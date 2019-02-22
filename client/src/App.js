import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store.js';

import MyNavbar from './components/MyNavbar.js';
import LoginForm from './components/LoginForm.js';
import RegisterForm from './components/RegisterForm.js';
import PostForm from './components/PostForm.js';
import PostsPage from './components/PostsPage.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    login: true,
    register: false,
    view: false,
    post: false
  }

  logOut = () => {
    this.setState({
      login: true,
      register: false,
      view: false,
      post: false
    });
  }

  goToLogin = () => {
    this.logOut();
  }

  goToRegister = () => {
    this.setState({
      login: false,
      register: true,
      view: false,
      post: false
    });
  }

  goToPostMake = () => {
    this.setState({
      login: false,
      register: false,
      view: false,
      post: true
    });
  }

  goToPostView = () => {
    this.setState({
      login: false,
      register: false,
      view: true,
      post: false
    });
  }

  setView = () => {
    let token = localStorage.getItem("token");
    if (token !== "null") {
      if (this.state.post) {
        return (<PostForm />);
      }
      return (<PostsPage />);
    } else {
      if (this.state.register) {
        return (<RegisterForm />);
      }
      return (<LoginForm />);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MyNavbar out={this.goToLogin} reg={this.goToRegister} pos={this.goToPostMake} vew={this.goToPostView} />
          <br /><br />
          {this.setView()}
        </div >
      </Provider>
    );
  }
}

export default App;
