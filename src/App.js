
import Home from './pages/home';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");

    const navElemArr = [navOpenBtn, navCloseBtn];

    const handleNavClick = () => {
      navbar.classList.toggle("active");
    };

    for (let i = 0; i < navElemArr.length; i++) {
      navElemArr[i].addEventListener("click", handleNavClick);
    }

    const navbarLinks = document.querySelectorAll("[data-nav-link]");

    const handleNavLinkClick = () => {
      navbar.classList.remove("active");
    };

    for (let i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].addEventListener("click", handleNavLinkClick);
    }

    const header = document.querySelector("[data-header]");

    const handleScroll = () => {
      window.scrollY >= 50 ? header.classList.add("active") : header.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);



    return () => {
      for (let i = 0; i < navElemArr.length; i++) {
        navElemArr[i].removeEventListener("click", handleNavClick);
      }

      for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].removeEventListener("click", handleNavLinkClick);
      }

      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  return (
    <Home/>
  );
}

export default App;
