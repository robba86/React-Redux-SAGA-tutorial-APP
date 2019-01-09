import React from "react";
import { connect } from "react-redux";
import img from "../loading_spinner.gif";

let Loading = ({ loadingWelcome, loadingUser }) => {
  const loading = loadingWelcome || loadingUser;

  return loading ? (
    <div style={{ textAlign: "center" }}>
      <img src={img} alt="Loading" />
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  loadingWelcome: state.welcome.loading,
  loadingUser: state.user.loading
});

Loading = connect(
  mapStateToProps,
  null
)(Loading);

export default Loading;
