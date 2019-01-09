import React from "react";
import Button from "../containers/Button";
import Welcome from "../containers/Welcome";
import Loading from "../containers/Loading";
import SignIn from "../containers/SigIn";
import UserItem from "../containers/UserItem";

let App = () => (
  <div>
    <Button />
    <SignIn />
    <Loading />
    <Welcome />
    <UserItem />
  </div>
);

export default App;
