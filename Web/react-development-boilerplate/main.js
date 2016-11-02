import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostForm from './src/PostForm';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render(
  <PostForm/>,
  document.getElementById('root'));