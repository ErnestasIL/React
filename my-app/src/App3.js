import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import NotFound from "./NotFound";

function Navbar() {
  const getRandomUser = () => `/user/${Math.floor(Math.random() * 50) + 1}`;
  return (
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        About
      </NavLink>
      <NavLink
        to={getRandomUser()}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Random User
      </NavLink>
    </nav>
  );
}

function Home() {
  return <h1>Pain page</h1>;
}

function About() {
  return <h1>About us</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
