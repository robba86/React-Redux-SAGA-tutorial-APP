import React from "react";
import { getUser } from "../actions";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { Input, Button, Message } from "semantic-ui-react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  usernameInput({ input, meta: { touched, error }, ...custom }) {
    const hasError = touched && error !== undefined;
    return (
      <div>
        {hasError && <Message error header="Error" content={error} />}
        <Input
          error={hasError}
          fluid
          placeholder="Username..."
          {...input}
          {...custom}
        />
      </div>
    );
  }

  passwordInput({ input, meta: { touched, error }, ...custom }) {
    const hasError = touched && error !== undefined;
    return (
      <div>
        {hasError && <Message error header="Error" content={error} />}
        <Input
          error={hasError}
          fluid
          type="password"
          placeholder="Password..."
          {...input}
          {...custom}
        />
      </div>
    );
  }

  submit({ username, password }, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(getUser(username, password, resolve, reject));
    }).catch(error => {
      throw new SubmissionError(error);
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Field name="username" component={this.usernameInput} />
        <Field name="password" component={this.passwordInput} />
        {/* <button onClick={() => this.props.getUser()}>Sign in</button> */}

        <Button fluid type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.username || values.username.trim() === "") {
    errors.username = "Username required";
  }
  if (!values.password || values.password.trim() === "") {
    errors.password = "Password required";
  }
  return errors;
};

export default reduxForm({
  form: "simple",
  validate
})(SignIn);
