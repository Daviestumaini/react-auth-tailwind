
export async function registerUser(formData) {
  try {
    const response = await fetch("https://charity-minds-backend.onrender.com/api/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const resData = await response.json();

     if (res.ok) {
        alert("Registration successful!");
        navigate("/login");
        console.log("Response status:", res.status);
      } else {
        const errorData = await res.json();
        alert(errorData.message || "Registration failed!");
      }
       } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };


export async function loginUser(identifier, password) {
  try {
    const response = await fetch("https://charity-minds-backend.onrender.com/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });
    const resData = await response.json();
if (response.ok) {
      alert("Login successful!");
      navigate("/dashboard");
      console.log("Response status:", response.status);
    } else {
      const errorData = await response.json();
      alert(errorData.message || "Login failed!");
    }
   } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } 
  };