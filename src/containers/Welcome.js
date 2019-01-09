import React from "react";
import { connect } from "react-redux";

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

let Welcome = ({ data }) =>
  data ? (
    <article style={articleStyle}>
      <div>
        <h1>{data.message}</h1>
      </div>
    </article>
  ) : null;

const mapStateToProps = state => ({
  data: state.welcome.data
});

Welcome = connect(
  mapStateToProps,
  null
)(Welcome);

export default Welcome;
