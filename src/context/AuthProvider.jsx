import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function login({ username, password }) {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/jwt/create/",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setAuthToken(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("tokens", JSON.stringify(response.data));
        navigate("/");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async function updateToken() {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/jwt/refresh/",
        { refresh: authToken?.refresh },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setAuthToken(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("tokens", JSON.stringify(response.data));
      } else {
        logout();
      }
      if (loading) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      throw error;
    }
  }

  function logout() {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("tokens");
    navigate("/");
  }

  useEffect(() => {
    const storedTokens = localStorage.getItem("tokens");
    if (storedTokens) {
      const parsedTokens = JSON.parse(storedTokens);
      setAuthToken(parsedTokens);
      setUser(jwtDecode(parsedTokens.access));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const tokenRefreshInterval = setInterval(() => {
      if (authToken) {
        updateToken();
      }
    }, 1000 * 60 * 4);

    return () => {
      clearInterval(tokenRefreshInterval);
    };
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
