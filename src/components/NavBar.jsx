import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {

    useGSAP(() => {
       const navTween = gsap.timeline({
        scrollTrigger: {
          trigger: "nav",
          start: "bottom top",
          scrub: true,
        },
      });
        navTween.fromTo('nav', {
            backgroundColor: "transparent"}, {
            backgroundColor: "#00000050",
            backgroundFilter: "blur(10px)",
            duration: 0.5,
            ease: "power1.inOut"
        });
     
    }, []);

  return (
    <nav>
      <div>
        <a href="#home" className="flex gap-2 items-center">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <p>Titay-Drinks</p>
        </a>

        <ul className="flex gap-4 items-center">
          {navLinks.map((index) => (
            <li key={index.id} className="cursor-pointer">
              <a
                href={`#${index.id}`}
                className="text-white hover:text-gray-900"
              >
                {index.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
