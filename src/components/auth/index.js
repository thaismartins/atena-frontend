import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LinkedIn } from "react-linkedin-login-oauth2";

import { Creators as AuthActions } from "../../store/ducks/auth";

import { Modal, Form, Button, LinkedinButton } from "./styles";

const clientId = process.env.REACT_APP_LINKEDIN_KEY;
const callbackUrl = process.env.REACT_APP_LINKEDIN_URL_CALLBACK;

class Auth extends Component {
  static propTypes = {
    action: PropTypes.func.isRequired,
    signInRequest: PropTypes.func.isRequired,
    signInLinkedinRequest: PropTypes.func.isRequired
  };

  state = {
    user: "",
    password: ""
  };

  handleLinkedinSuccess = data => {
    const { code } = data;
    const { signInLinkedinRequest } = this.props;

    signInLinkedinRequest({ code });
  };

  handleLinkedinFailure = error => {
    // TODO: send alert error
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest({ user, password });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { user, password } = this.state;

    return (
      <Modal onClick={this.props.action}>
        <Form onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
          <h1>Olá, impulser!</h1>
          <span>Usuário do Rocket.Chat</span>
          <input
            type="text"
            name="user"
            value={user}
            onChange={this.handleInputChange}
          />
          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <Button type="submit">Logar</Button>
          <p className="or">- ou -</p>
          <LinkedinButton>
            <LinkedIn
              className="bt-linkedin"
              clientId={clientId}
              onFailure={this.handleLinkedinFailure}
              onSuccess={this.handleLinkedinSuccess}
              redirectUri={callbackUrl}
              scope="r_liteprofile">
              Logar com{" "}
              <img src="/linkedin-icon.png" alt="Linkedin" title="Linkedin" />
            </LinkedIn>
          </LinkedinButton>
        </Form>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Auth);
