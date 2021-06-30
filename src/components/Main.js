import React from "react";
import MainPosts from "./MainPosts";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Header />
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7 text-start">
            <MainPosts
              h2="Man must explore, and this is exploration at its greatest"
              h3="Problems look mighty small from 150 miles up"
              date=" on September 24, 2021"
            />

            <hr className="my-4" />

            <MainPosts
              h2="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
              h3=""
              date=" on September 18, 2021"
            />

            <hr className="my-4" />

            <MainPosts
              h2="Science has not yet mastered prophecy"
              h3="We predict too much for the next year and yet far too little for the next ten."
              date=" on August 24, 2021"
            />

            <hr className="my-4" />

            <MainPosts
              h2="Failure is not an option"
              h3="Many say exploration is part of our destiny, but it’s actually our duty to future generations."
              date=" on July 8, 2021"
            />

            <hr className="my-4" />

            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
