import React, { Fragment } from "react";

function Feed(props) {
  return (
    <Fragment>
      {props.posts.map((post, idx) => {
        const { text, name } = post;
        return (
          <div key={idx}>
            <p>
              <b>{text} </b> <i>{name} </i>
            </p>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Feed;
