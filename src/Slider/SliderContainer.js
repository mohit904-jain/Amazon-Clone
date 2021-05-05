import React from "react";
import SliderDisplay from "./SliderDisplay";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function SliderContainer() {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <SliderDisplay
      user={user}
      basket={basket}
      handleAuthentication={handleAuthentication}
    />
  );
}

export default SliderContainer;
