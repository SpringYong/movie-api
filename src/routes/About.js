import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about">
      <img
        className="about_img"
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAzMjRfMTQx%2FMDAxNTUzMzU1OTQzNTI3.-OgnroYRgf6jziVJErBfIThL2J4UiAeLLBUpSobQuW8g.H9Sjcdo9eflz3pjx76mgINY5pg9TGMX-i8JtNH28qZkg.JPEG.ptj0969%2FD2T0CJcU8AA9Lq5.jpg&type=sc960_832"
      />
      <div className="about_container">
        <span>
          “All we can do is our best and sometimes the best that we can do is to
          start over.”
        </span>
        <span>− Captain America: The Winter Soldier</span>
      </div>
    </div>
  );
}

export default About;
