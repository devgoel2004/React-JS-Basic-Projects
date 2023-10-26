import React from "react";
import "../styles/footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h1>QuantumSoft</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.youtube.com/" target={"_blank"}>
            Youtube
          </a>
          <a
            href="https://www.linkedin.com/in/dev-goel-25bb54223/"
            target={"_blank"}>
            Linkdin
          </a>
          <a href="https://github.com/devgoel2004" target={"_blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
