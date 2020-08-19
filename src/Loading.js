import React from "react";

//from semantic UI

const Loading = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui massive text loader">{props.message}</div>
    </div>
  );
};

//can load the below if we don't pass props down
Loading.defaultProps = {
  message: "Loading..."
};

export default Loading;
