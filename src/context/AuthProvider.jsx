import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getMe = async () => {
    try {
      const res = await fetch("http://localhost:9000/api/user/getMe", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data.user);
        setUser(data.user);
        setIsError(false);
      } else {
        setUser(null);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setUser(null);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, isError }}>
      {children}
    </AuthContext.Provider>
  );
};
