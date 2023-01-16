import React from "react";

function Footer() {
  return (
    <footer
      class="text-center text-dark fixed-bottom"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    >
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
      >
        Developed with 💖 by
        <a class="text-dark pl-1" href="https://www.linkedin.com/in/bandepalli-surya/">
          Bandepalli Surya
        </a>{" "}
        and{" "}
        <a class="text-dark" href="https://www.linkedin.com/in/abhishekmanikandan">
          Abhishek Manikandan
        </a>
      </div>
    </footer>
  );
}

export default Footer;
