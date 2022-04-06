import "./App.css";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Checkout from "./components/Checkout.jsx";
import Login from "./components/Login.jsx";
import Payment from "./components/Payment";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("the user is ", user);

      if (user) {
        dispatch({
          type: "SET-USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET-USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/Checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />

        <Route
          path="/Payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />

        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
