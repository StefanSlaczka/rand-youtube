import React, { Component } from "react";
// this is the only class component other class components are not allowed and are replaced with className
class NavBar extends Component {
  render() {
    // .jsx can only return one element so we need to wrap it in a div
    return (
      //React.Fragment only show the content inside of it
      //you use className instead of class because class is a reserved word in javascript
      // refuriong to a link dont use # use /#
      <React.Fragment>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <a className='navbar-brand' href='/#'>
            Rand(YouTube[Video])
          </a>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href='/#'>
                  Follow Me
                </a>
              </li>
            </ul>
            <button className='press-me' onClick={press_me}>
              Don't Press Me
            </button>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}


export default NavBar;

function press_me (){
  alert("You pressed me");
  afterClick();
}

function afterClick (){
  alert("You clicked me");
  press_me();
}

