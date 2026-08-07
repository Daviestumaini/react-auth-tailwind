const DEPLOYED_API_URL = "https://charity-minds-backend.onrender.com/api/v1";
const LOCAL_API_URL = "http://localhost:5500/api/v1";
const API_URL = import.meta.env.VITE_API_URL || DEPLOYED_API_URL;

export async function registerUser(formData) {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const resData = await response.json();

    if (!response.ok) {
      return { success: false, error: resData.message || "Registration failed!" };
    }

    try {
      await fetch(`${LOCAL_API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ...resData.user }),
      });
    } catch (syncError) {
      console.warn("Local users sync skipped", syncError);
    }

    return { success: true, user: resData.user };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function loginUser(identifier, password) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });
    const resData = await response.json();

    if (!response.ok) {
      return { success: false, error: resData.message || "Login failed!" };
    }

    localStorage.setItem("auth_logged_in", "true");
    localStorage.setItem("auth_user", JSON.stringify(resData.user));
    return { success: true, user: resData.user };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
