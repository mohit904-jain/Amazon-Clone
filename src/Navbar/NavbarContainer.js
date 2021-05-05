import React from "react";
import NavbarDisplay from "./NavbarDisplay";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function NavbarContainer() {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <NavbarDisplay
      user={user}
      basket={basket}
      handleAuthentication={handleAuthentication}
    />
  );
}

export default NavbarContainer;
