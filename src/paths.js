import About from "pages/About";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Post from "pages/Post";
import Profile from "pages/Profile";
import Search from "pages/Search";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Container } from './styles';

function Paths() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />

          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Paths;
