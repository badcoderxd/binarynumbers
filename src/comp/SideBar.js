import React from 'react';
import Footex from '../img/fooext.png';
import Card from './Card';
import Main from './Main';

function SideBar() {
    return (
      <>
        <div class="sidenav">
        <span class="side-nav-cat">catagories</span>
     <div class="side-bar-in">
        <div>
            
        <a href="#about"><div><i class="fa fa-television" aria-hidden="true" ></i></div>Home</a>
        <a href="#about"><div><i class="fa fa-film" aria-hidden="true" ></i></div>Movies</a>
        <a href="#about"><div><i class="fa fa-television" aria-hidden="true" ></i></div>TV Series</a>
        <a href="#about"><div><i class="fa fa-users" aria-hidden="true" ></i></div>Concerts</a>
        <a href="#about"><div><i class="fa fa-dribbble" aria-hidden="true" ></i></div>Sport</a>
        <a href="#about"><div><i class="fa fa-qq" aria-hidden="true" ></i></div>For kids</a>
        <a href="#about"><div><i class="fa fa-star" aria-hidden="true" ></i></div>Favourites</a>
        <a href="#about"><div><i class="fa fa-user" aria-hidden="true" ></i></div>Personal data</a>
        
    </div>
    <div class="side-bottom">
        <p>some random text with no message some random text with no message</p>
        <img src={Footex}/>
    </div>
    </div>
      </div>
      
      <div class="main">

        <Main/>
        <Card/>
        <Card/>
     
      </div>
      </>
    );
  }
  
  export default SideBar;