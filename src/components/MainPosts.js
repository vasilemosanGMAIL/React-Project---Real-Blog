import React from "react";

const MainPosts = (props) => {
  return (
    <div className="post-preview">
      <a href="post.html">
        <h2 className="post-title">{props.h2}</h2>
        <h3 className="post-subtitle">{props.h3}</h3>
      </a>
      <p className="post-meta">
        Posted by <a href="#!">Start Bootstrap</a>
        {props.date}
      </p>
    </div>
  );
};

export default MainPosts;
