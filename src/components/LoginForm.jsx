import {useState} from "react";
import { Link, useNavigate} from "react-router";

const loginForm = () => {
    const [email, setEmail] = useState("example@test.com")
    const [password, setPassword] =useState("")

const navigate = useNavigate();

 const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form is submitted");

    try {
      // Set the backend endpoint that receives the login request.
      const apiUrl =
        "https://charity-minds-backend.onrender.com/api/v1/auth/login";

      // Send the form data to the API using a JSON POST request.
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // Parse the JSON response body returned by the server.
      const resData = await response.json();

      // Stop if the server response indicates a failed request.
      if (!response.ok || !resData.success) {
        throw new Error(
          resData.message || "Failed to login. Please try again later.",
        );
      }

      // Log the login message for debugging or confirmation purposes.
      console.log(resData.message);

      localStorage.setItem("auth_logged_in", true);

      // Redirect the user to the dashboard page after successful login.
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="loginForm"
      className="mt-8 w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
    >
      <p id="errorMessage" className="text-red-500" />
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required=""
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none ring-0 transition focus:border-cyan-400"
          placeholder="name@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required=""
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
          placeholder="••••••••"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Login
      </button>
      <p className="text-center text-sm text-slate-400">
        New here?{" "}
        <Link
          to="/auth/register"
          className="font-medium text-cyan-400 hover:text-cyan-300"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
};

export {loginForm};