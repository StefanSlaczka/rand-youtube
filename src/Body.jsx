import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='front-end bg-dark'>
          <div className='bordor'>
            <button className="Ow-No" onClick={Ow_No}>
              Ow No
            </button>
            <h3 className='title'>Random Youtube Generator 2.0</h3>
            <button className="YBT" onClick={ybt}>
                You Better Not
            </button>
            <h4 className='if'>If you even dare</h4>
            <div>
              <div className='circle '>
                <button className='BTM' onClick={rand_sting}>
                  More Videos
                </button>
              </div>
            </div>
            <h4 className='resion'>
              This website ise for poeple to watch the wierd side of youtube
            </h4>
            <footer className='sites'>
              <a
                href='https://www.instagram.com/stefan_slaczka/?hl=en'
                className='social__icon--link'
              >
                <i className='fab fa-instagram'></i>
              </a>
              <a
                href='https://www.facebook.com/stef.slaczka.3/'
                className='social__icon--link'
              >
                <i className='fab fa-facebook'></i>
              </a>
              <a
                href='https://www.youtube.com/channel/UCOmioF7pzY8-bUK7vuT44lg'
                className='social__icon--link'
              >
                <i className='fab fa-youtube'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/stefan-slaczka-537197201/'
                className='social__icon--link'
              >
                <i className='fab fa-linkedin'></i>
              </a>
              <a
                href='https://twitter.com/SlaczkaStefan'
                className='social__icon--link'
              >
                <i className='fab fa-twitter'></i>
              </a>
            </footer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function rand_sting() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var x = Math.floor(Math.random() * 100) + 5;
  for (var i = 0; i < x; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  let url = "https://www.youtube.com/results?search_query=" + text;
  window.open(url, "_blank");
  (window).height();
}

function Ow_No() {
  console.log("Your dumb");
  alert("You broke the website");
  window.close();
}

function ybt (){
  alert("REEEEEEE");
}