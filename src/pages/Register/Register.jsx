import React, { useState } from "react";
import { useAuth } from "../../utils/AuthProvider";
import register_image from "../../assets/images/login_image.jpg";
import logo from "../../assets/images/basic_fat_logo.svg";
import './Register.scss'
export default function Register() {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [subscription, setSubscription] = useState("9.99"); // Choix par défaut

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email, username, password, subscription);

    register(email, username, password, subscription);
    alert("Utilisateur enregistré avec succès !");
  };
  // const { authToken, logout, users } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!authToken) {
  //     navigate('/register'); // Redirige vers la page de connexion si non authentifié
  //   }
  // }, [authToken, navigate]);

  return (
    <section id="register">
      <div className="register__content">
        <div className="form__content">
        <img src={logo} alt="Login image" className="logo_img"/>
          <div className="register__title">
            <h2>Inscription</h2>
            <p >
              Connectez-vous à votre compte pour profiter de toutes les
              fonctionnalités de l'application.
            </p>
          </div>
          <form onSubmit={handleRegister}>
            <div className="form-group my-3">
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
            <div className="form-group my-3">
              <label>Nom d'utilisateur:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                className="form-control"
                required
              />
            </div>
            <div className="form-group my-3">
              <label>Mot de passe:</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <div className="form-group my-3">
              <label>Type d'abonnement:</label>
              <select
                value={subscription}
                onChange={(e) => setSubscription(e.target.value)}
                className="form-select"
              >
                {/* <option value="0" selected>Selectionnez votre type d'abonnement</option> */}
                <option value="9.99">9,99€</option>
                <option value="19.99">19,99€</option>
                <option value="29.99">29,99€</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary connection_btn">
              S'inscrire
            </button>
          </form>
        </div>
        <div className="visual__content">
        <img src={register_image} alt="" />
        </div>
      </div>
    </section>
  );
}
