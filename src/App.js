import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./config/ReactotronConfig";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LinkedInPopUp } from "react-linkedin-login-oauth2";

import store from "./store";
import StyledApp from "./styles/global";

import TransferXp from "./pages/TransferXp";
import HowItWorks from "./pages/HowItWorks";
import Error from "./pages/Error";
import Ranking from "./pages/Ranking";
import Admin from "./pages/admin";
import UserInfo from "./pages/UserInfo";
import Github from "./pages/Github";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const { token, isCoreTeam } = store.getState().auth;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <StyledApp />
        <Header />
        <Switch>
          <Route exact path="/" component={HowItWorks} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/github/:status" component={Github} />
          <Route path="/linkedin" component={LinkedInPopUp} />
          <Route component={Error} />

          {token && isCoreTeam && (
            <>
              <Route path="/transfer" component={TransferXp} />
              <Route path="/admin" component={Admin} />
              <Route path="/userInfo" component={UserInfo} />
            </>
          )}
        </Switch>
        <Footer />
        <ToastContainer autoClose={2000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
