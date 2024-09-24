import React, { useState } from "react";
import { useAuth } from "../../utils/AuthProvider";
import { Router } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      alert("Connexion réussie !");
      //   Router()
    } else {
      alert("Échec de la connexion. Vérifiez vos informations.");
      setPassword("");
      setEmail("");
    }
  };
  return (
    <section id="login">
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </section>
  );
}
