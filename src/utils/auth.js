const API_BASE = "https://charity-minds-backend.onrender.com/api/v1/auth";

export async function registerUser(formData) {
  try {
    const response = await fetch(`${API_BASE}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const resData = await response.json();

    if (!response.ok || !resData.success) {
      return { success: false, error: resData.message || "Failed to register. Please try again." };
    }
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message || "Something went wrong." };
  }
}

export async function loginUser(identifier, password) {
  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });
    const resData = await response.json();

    if (!response.ok || !resData.success) {
      return { success: false, error: resData.message || "Failed to login. Please try again." };
    }
    localStorage.setItem("auth_logged_in", true);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message || "Something went wrong." };
  }
}