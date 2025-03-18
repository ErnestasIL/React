import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "John Doe", role: "admin" });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function UserProfile() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <p>Logged in as: {user.name}</p>
          <p>Role: {user.role}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <UserProfile />
    </AuthProvider>
  );
}

export default App;

// const ThemeContext = createContext("light");

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// function ThemeComponent() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <div
//       style={{
//         backgroundColor: theme === "dark" ? "#333" : "#fff",
//         color: theme === "dark" ? "#fff" : "#000",
//         padding: "20px",
//       }}
//     >
//       <p>Current Theme is: {theme}</p>
//       <button
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         style={{ border: "none", background: "transparent" }}
//       >
//         😮
//       </button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <ThemeComponent />
//     </ThemeProvider>
//   );
// }

// export default App;
