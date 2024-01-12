// Profile.js
import React, { useEffect } from "react";
import { useAuth } from "../authContext/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Проверяем аутентификацию при каждом рендере
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    // После выхода из аккаунта перенаправляем пользователя на страницу входа
    navigate("/sign-in");
  };

  // Если пользователь не аутентифицирован, компонент не рендерится
  if (!isAuthenticated) {
    return null;
  }

  // Рендерим содержимое компонента для аутентифицированных пользователей
  return (
    <div>
      <h1 style={{ paddingTop: "100px" }}>Profile Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
