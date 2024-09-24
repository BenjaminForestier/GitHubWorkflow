import React from "react";
import { useAuth } from "../../utils/AuthProvider";
export default function Dashboard() {
  const { currentUser } = useAuth();
  return (
    <>
      <h1>Test</h1>
      <div>
        {currentUser ? (
          <div>
            <h1>Bienvenue, {currentUser.username} !</h1>
            <p>Email : {currentUser.email}</p>
            <p>Abonnement : {currentUser.subscription}€</p>
          </div>
        ) : (
          <p>Vous n'êtes pas connecté</p>
        )}
      </div>
    </>
  );
}
