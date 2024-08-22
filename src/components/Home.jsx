import { motion, animate } from "framer-motion";
import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/My_Image.png";
const Home = ({ ratio }) => {
  const projectCount = useRef(null);

  const animationProjectsCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <>
      <div id="home">
        <section>
          <div>
            <motion.h1 {...animation.h1}>
              Hi,  I'am <br />
              <span>S</span>RINIDHI V S
            </motion.h1>

            <Typewriter
              options={{
                strings: [
                  "Front End Developer",
                  "Front End Enginner",
                  "Full Stack Developer",
                  "Javascript Developer",
                  "ReactJs Developer",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriterpara",
                cursor: "",
              }}
            />
            <div>
              <a href="SRINIDHI_Resume.pdf" download="Srinidhi's_Resume">Get Resume</a>
              <a href="#work">
                Projects
                <BsArrowUpRight />
              </a>
            </div>

            <aside>
              <article>
                <p>
                  +
                  {ratio < 3 && (
                    <motion.span
                      ref={projectCount}
                      whileInView={animationProjectsCount}
                    >
                      10
                    </motion.span>
                  )}
                </p>
                <span>Projects Made</span>
              </article>
              <article data-special>
                <p>Contact</p>
                <span>srinidhivs28@gmail.com</span>
              </article>
            </aside>
          </div>
        </section>
        <section>
          <img
            src={me}
            alt="Unable to load the profile pic, Please check the connection..."
          />
        </section>
        <BsChevronDown />
      </div>
    </>
  );
};

export default Home;
