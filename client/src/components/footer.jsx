import React from "react";

function Footer() {
  return (
    <footer
      class="text-center text-dark"
      style={{
        position: "relative",
      }}
    >
      <div
        class="text-center"
        style={{backgroundColor: "rgba(255, 255, 255, 0.5)"}}
      >
        Developed with 💖 by
        <a
          class="text-dark pl-1"
          href="https://www.linkedin.com/in/bandepalli-surya/"
        >
          Surya
        </a>{" "}
        and{" "}
        <a
          class="text-dark"
          href="https://www.linkedin.com/in/abhishekmanikandan"
        >
          Abhishek
        </a>
      </div>
    </footer>
  );
}

export default Footer;
