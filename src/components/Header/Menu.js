import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as AuthActions } from "../../store/ducks/auth";

import StyledMenu from "./Menu.style";
import { Link } from "react-router-dom";
import Auth from "../auth";
import mock from "../../assets/mock.jpeg";

class Menu extends Component {

  static propTypes = {
    auth: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      isCoreTeam: PropTypes.bool,
      token: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    }).isRequired,
    signOut: PropTypes.func.isRequired
  };

  state = {
    activeModal: false
  };

  toggleModal = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  render() {
    const { auth, signOut } = this.props;
    console.log('this.props', this.props)

    return (
      <>
        <StyledMenu>
          <li key="index">
            <Link to="/">
              <button>como funciona</button>
            </Link>
          </li>
          <li key="ranking">
            <Link to="/ranking">
              <button>ranking</button>
            </Link>
          </li>
          {auth.user ? (
            <>
              <li key="transfer">
                <Link to="/transfer">
                  <button>Transferir</button>
                </Link>
              </li>
              <li key="admin">
                <Link to="/admin">
                  <button>Admin</button>
                </Link>
              </li>
              <li key="logout">
                <button onClick={signOut}>logout</button>
              </li>
              <li className="user">
                <Link to="/userInfo">
                  <button className="profile">
                    <img src={mock} alt="" className="avatar" />
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <li key="login">
              <button onClick={this.toggleModal}>login</button>
            </li>
          )}
        </StyledMenu>
        {this.state.activeModal && <Auth action={this.toggleModal} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
