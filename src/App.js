import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Components/HomeScreen";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){

      } else{

      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
