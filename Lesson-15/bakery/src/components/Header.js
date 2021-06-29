import React from 'react';
import './style.css';
import { NavLink } from "react-router-dom";
import Category from '../pages/Category/Category';
export default class Header extends React.Component {
  render() {
    return <header className="header">
      <img className="logo" src="logo.jpeg" />
      <nav className="navigator">
        <span><NavLink to="/home">Menu</NavLink></span>
        <span><NavLink to="/category/1">Category</NavLink></span>
        <span>News & events</span>
      </nav>
    </header>
  }
}


