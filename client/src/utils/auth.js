const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5500/api/v1";

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
