// import { BrowserRouter, Routes, Route } from "react-router-dom";
//
// function Home() {
//   return <h1>Pain page</h1>;
// }
//
// function About() {
//   return <h1>About us</h1>;
// }
//
// function App() {
//   return (
// <BrowserRouter>
/* <Routes> */
/* <Route path="/" element={<Home />} /> */
/* <Route path="/about" element={<About />} /> */
/* </Routes> */
/* </BrowserRouter> */
//   );
// }
//
// export default App;

// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/" style={{ margin: "0px 20px" }}>
//         Main
//       </Link>
//       <Link to="/about">About</Link>
//       <br />

//       <NavLink
//         to="/"
//         style={{ margin: "0px 20px" }}
//         className={({ isActive }) => (isActive ? "active-link" : "")}
//       >
//         Pagrindinis
//       </NavLink>

//       <NavLink
//         to="/about"
//         className={({ isActive }) => (isActive ? "active-link" : "")}
//       >
//         Apie mus
//       </NavLink>
//     </nav>
//   );
// }

// function Home() {
//   return <h1>Pain page</h1>;
// }

// function About() {
//   return <h1>About us</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   useParams,
//   Link,
// } from "react-router-dom";

// function UserProfile() {
//   const { id } = useParams();
//   return (
//     <div>
//       <h1>User ID: {id}</h1>
//       <Link to="/">Back</Link>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Pain page</h1>
//       <Link to="/user/1">User 1</Link>
//       <br />
//       <Link to="/user/2">User 2</Link>
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/user/:id" element={<UserProfile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";

function OrderDetails() {
  let { userId, orderId } = useParams();
  return (
    <h1>
      User ID: {userId}, Order ID: {orderId}
    </h1>
  );
}

function Home() {
  return (
    <div>
      <h1>Pain page</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">Back</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId/order/:orderId" element={<OrderDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
