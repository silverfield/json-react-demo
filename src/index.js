import React from "react";
import { render } from "react-dom";
import Main from './components/Main'
import './styles.scss';

window.React = React;

if (document.getElementById("react-main")) {
    render(<Main />, document.getElementById("react-main"));
}