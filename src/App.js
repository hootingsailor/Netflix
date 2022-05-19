import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Components/HomeScreen";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  // const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else{
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
