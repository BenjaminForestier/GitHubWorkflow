import React, { useState } from 'react';
import { useAuth } from '../../utils/AuthProvider';

export default function Register() {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [subscription, setSubscription] = useState('9.99');  // Choix par défaut


  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email, username, password, subscription);
    
    register(email, username, password, subscription);
    alert('Utilisateur enregistré avec succès !');
  };
  // const { authToken, logout, users } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!authToken) {
  //     navigate('/register'); // Redirige vers la page de connexion si non authentifié
  //   }
  // }, [authToken, navigate]);
  
  


  return (
    <section id='register'>
        <form onSubmit={handleRegister}>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Nom d'utilisateur:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Mot de passe:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          current-password = 'true'
        />
      </div>
      <div>
        <label>Type d'abonnement:</label>
        <select value={subscription} onChange={(e) => setSubscription(e.target.value)}>
          <option value="9.99">9,99€</option>
          <option value="19.99">19,99€</option>
          <option value="29.99">29,99€</option>
        </select>
      </div>
      <button type="submit">S'inscrire</button>
    </form>
    </section>
  )
}
