import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";

const imgStyle = {
  hight: "auto",
  width: "80%",
  border: "4px solid RebeccaPurple ",
  borderRadius: "5%"
};
const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "olive"
};

let UserItem = ({ user }) => {
  return user ? (
    <article style={articleStyle}>
      <div>
        <h1>Name: {user.success ? user.data.name : "No Name"}</h1>
        <p>Email: {user.success ? user.data.email : "No Email"}</p>
        <p>Message: {user.message}</p>
        <p>Success: {user.success ? "true" : "false"}</p>
        <p>Data: {user.success ? JSON.stringify(user.data) : "No Data"}</p>
      </div>
    </article>
  ) : null;
};

const mapStateToProps = state => ({
  form: state.form,
  user: state.user.user
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

UserItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserItem);

export default UserItem;
