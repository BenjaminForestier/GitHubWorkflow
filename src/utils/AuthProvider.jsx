import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import bcrypt from 'bcryptjs'
import CryptoJS from 'crypto-js';
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(() => {
      const token = localStorage.getItem('authToken');
      return token;
    });
    const [users, setUsers] = useState(() => {
      // Charger les utilisateurs stockés dans le localStorage (s'il y en a)
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      return storedUsers;
    });
  
    const register = async (email, username, password, subscription) => {
        // const salt = await bcrypt.genSalt(10); 
        // const hashedPassword = await bcrypt.hash(password, salt);
        const hashedPassword = CryptoJS.SHA256(password).toString();
      const newUser = {
        id: uuidv4(),  // Générer un ID unique
        email : email,
        username : username,
        password : hashedPassword,
        subscription : subscription
      };
      setUsers([...users, newUser]);
      localStorage.setItem('users', JSON.stringify([...users, newUser])); // Sauvegarder dans le localStorage
    };
  
    const login = (email, password) => {
      const user = users.find(u => u.email === email);
      const hashedPassword = CryptoJS.SHA256(password).toString(); // Hasher le mot de passe saisi
      
      if (user && user.password === hashedPassword) {  // Comparer le mot de passe hashé
        const now = new Date();
        const expiryTime = new Date(now.getTime() + 3 * 60 * 60 * 1000); // 3 heures d'expiration
        const token = uuidv4(); // Générer un token pour cette session
        localStorage.setItem('authToken', token);
        localStorage.setItem('expiry', expiryTime.toJSON());
        setAuthToken(token); // Mettre à jour l'état avec le token d'authentification
        return true;
      }
      return false;
    };
  
    const logout = () => {
      setAuthToken(null);
      localStorage.removeItem('authToken');
      localStorage.removeItem('expiry');
    };
  
    useEffect(() => {
      const token = localStorage.getItem('authToken');
      const expiry = new Date(localStorage.getItem('expiry'));
      if (expiry < new Date()) {
        logout();  // Déconnexion si le token est expiré
      } else if (token) {
        setAuthToken(token);  // Restaurer le token si toujours valide
      }
    }, []);
  
    return (
      <AuthContext.Provider value={{ authToken, login, logout, register, users }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export function useAuth() {
    return useContext(AuthContext);
  }