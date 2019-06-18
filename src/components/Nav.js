import React, { Component } from 'react'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.toggleBurger = this.toggleBurger.bind(this)
  }

  toggleBurger(event) {
    event.preventDefault();
    let navbar = document.querySelector('.navbar');
    let burger = document.querySelector('.navbar-burger');
    let menu = document.querySelector('.navbar-menu');
    navbar.classList.toggle('is-warning');
    navbar.classList.toggle('is-transparent');
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }

  render() {
    return(
      <nav className="navbar is-warning is-fixed-top">
        <div className="navbar-brand">
          <a href="#" className="navbar-item">
            <p className="title main-title">RetroKeeper</p>
          </a>
          
        </div>

        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <a href="#" className="navbar-item">
              <i className="material-icons">home</i>
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable is-unselectable">
              <a className="navbar-link">
                <i className="material-icons">view_list</i>
                Collection
              </a>
              <div className="navbar-dropdown is-boxed">
                <a href="#consoles" className="navbar-item">
                  <i className="material-icons">tv</i>
                  Consoles
                </a>
                <a href="#games" className="navbar-item">
                  <i className="material-icons">gamepad</i>
                  Games
                </a>
                <a className="navbar-item is-disabled" title="Coming soon...">
                  <i className="material-icons">videogame_asset</i>
                  Peripherals
                </a>
                <a href="#about" className="navbar-item">
                  <i className="material-icons">info</i>
                  About
                </a>
                <hr className="navbar-divider"/>
                <div className="navbar-item">
                  Version 0.7.1
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a href="" className="button is-info">
                    <span className="icon">
                      <i className="material-icons">account_box</i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav
