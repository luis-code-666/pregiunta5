import React, { useState, useEffect } from "react";
import styles from "./styles/ProfileCard.css";
import instagram from "./../images/instagram.png";
import linkedin from "./../images/linkedin.png";

export default function ProfileCard(props) {
  const [name, setName] = useState(props.profile.name);

  // acción que cambiara los datos cuando profile cambie.
  useEffect(() => {
    setName(props.profile.name);
  }, [props.profile]);

  return (
    <div class="container">
      <img class="img-background" src={props.profile.background} />
      <h2 class="name">{name}</h2>
      <h3 class="position">{props.profile.position}</h3>
      <h4 class="description">{props.profile.description}</h4>
      <div class="avatar-container">
        <img class="avatar" src={props.profile.avatar} alt="" />
      </div>
      <div class="card-white">
        <div class="social-media-links">
          <img src={instagram} />
          <div> Yaretas24</div>
          <img src={linkedin} />
          <div> Yaretas24</div>
        </div>
      </div>
    </div>
  );
}
