import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/auth/login", {
        username,
        password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token); // 🔐 Store token
        setMessage("✅ Login successful! Token saved.");
        setUsername("");
        setPassword("");
      })
      .catch((err) => {
        console.error("Login error:", err);
        setMessage("❌ Invalid username or password");
      });
  };

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {message && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{message}</p>}
    </section>
  );
}

export default LoginForm;