import React from 'react';
import '../App.css';
import Logo from '../img/logo.jpg';

function NavBar() {
  return (
    <>
    <div className="nav-bar">
        <div className="nav-bar-holder">


            <div className="nav-bar-l">

                <img src={Logo} alt="img" width="200px"/>

            </div>
          <div className="nav-bar-r">
            <div>
                <input type="text" placeholder="search your movie/serial" className="nav-one-input"/>
            </div>

            <div className="lang">

                 <div>
                    <i className="fa fa-globe" aria-hidden="true"><span>En</span></i>
                 </div>
                
            </div>

            <div className="nav-bar-l-s">
                <div>Login</div>
                <div>Try Now</div>
            </div>
        </div>

        </div>

    </div>
    </>
  );
}

export default NavBar;
