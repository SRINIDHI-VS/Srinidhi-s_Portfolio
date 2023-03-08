import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={
            "https://raw.githubusercontent.com/SRINIDHI-VS/myavatar/main/IMG-FormalPic.jpg"
          }
          alt="Creater"
        />

        <h2>Shree</h2>
        <p>
          <q>Motivation is temporary, but discipline last forever.</q>
        </p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/v-s-srinidhi-2803/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/SRINIDHI-VS" target={"blank"}>
            <AiFillGithub />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=7975076729&text&type=phone_number&app_absent=0"
            target={"blank"}
          >
            <BsWhatsapp />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
