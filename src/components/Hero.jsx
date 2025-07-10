import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const animateTitle = new SplitText(".title", {
      type: "chars, words",
    });

    const animatePragraph = new SplitText(".subtitle", {
      type: "lines",
    });

    animateTitle.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(animateTitle.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "power4.out",
      stagger: 0.07,
    });

    gsap.from(animatePragraph.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "power4.out",
      stagger: 0.07,
      delay: 1,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    }).to(".right-leaf", { y:200}, 0)
      .to(".left-leaf", { y:-200 }, 0)
        .to(".title", { y: 100, opacity: 0 }, 0)
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 sub-content hidden md:block">
              <p>Cool. Classic. Crisp</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
