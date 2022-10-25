import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 home-container">
      <div className="p-24">
        <h2 className="text-6xl pb-6 home-title">
          <span className="yellow-shape">
            <span className="text-sky-800 font-semibold">Codie</span>
            <span className="text-amber-300 font-semibold">Pie</span>
            <img
              src="https://react-educal.netlify.app/assets/img/shape/yellow-bg.png"
              alt=""
            />
          </span>{" "}
          The best place to learn Web Development and more!!!
        </h2>
        <p className="home-text text-2xl">
          Over 80+ courses related to web dev, client or frontend, server or
          backend, database etc which are created by renowned teachers from
          renowned institutes.
        </p>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Home;
