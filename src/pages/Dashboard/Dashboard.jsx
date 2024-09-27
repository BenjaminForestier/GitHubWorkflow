import React from "react";
import { useAuth } from "../../utils/AuthProvider";
export default function Dashboard() {
  const { currentUser,logout } = useAuth();
  return (
    <>
      <h1>Test</h1>
    </>
  );
}
