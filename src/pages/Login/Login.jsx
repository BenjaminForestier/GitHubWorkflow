import React, { useEffect, useState } from "react";
import { useAuth } from "../../utils/AuthProvider";
import "./Login.scss";
import login_image from "../../assets/images/login_image.jpg";
import logo from "../../assets/images/basic_fat_logo.svg";
export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // let isLogin;
  
  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      //rediection sur le dashboard
      window.location.href = '/dashboard'
    } else {
      alert("Échec de la connexion. Vérifiez vos informations.");
      // setPassword("");
      // setEmail("");
    }
  };
  useEffect(() => {
    if (window.location.pathname.includes('login') || window.location.pathname.includes('')  ) {
        document.querySelector('.header-container').style.display = 'none'
        document.querySelector('.sidebar__container').style.display = 'none'
        document.querySelector('.app_body').style.width = '100%'

    }
  }, []);
  return (
    <section id="login">
      <div className="login__content">
        <div className="form__content">
          <img src={logo} alt="Login image" className="logo_img"/>
          <div className="login__title">
            <h2>Connexion</h2>
            <p>
              Connectez-vous à votre compte pour profiter de toutes les
              fonctionnalités de l'application.
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-group my-4">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                className="form-control"
                required
              />
            </div>
            <div className="form-group my-4">
              <label>Mot de passe:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary connection_btn">
              Se connecter
            </button>
          </form>
          <p className="sign_in">
            Vous n'avez pas encore de compte?{" "}
            <a href="/register">Créer un compte</a>
          </p>
        </div>
        <div className="visual__content">
          <img src={login_image} alt="" />
        </div>
      </div>
    </section>
  );
}
