import React from "react";
import vg from "../../assets/2.png";
import "../styles/Home.scss";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <div>
      <div className="home" id="home">
        <main>
          <h1>QuantumSoft</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            harum facilis hic, eius culpa sit et fugit molestias veritatis
            doloribus, distinctio, dicta iusto in consequuntur deserunt
            necessitatibus eligendi veniam commodi esse qui magni. Reiciendis
            reprehenderit incidunt alias ipsum nemo dolorum placeat illum,
            possimus recusandae voluptate a adipisci fuga sed ratione?
          </p>
        </div>
      </div>
      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
