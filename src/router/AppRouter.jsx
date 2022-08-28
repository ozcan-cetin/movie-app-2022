import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MovieDetail from '../pages/MovieDetail';


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/details/:id" element={<PrivateRouter />}> */}
        <Route path="/details/:id" element={<MovieDetail />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter