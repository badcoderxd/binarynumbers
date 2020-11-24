import React from 'react';
import Cardi from '../img/film.jpg';

function Card() {
    return (
      <>

<div class="movie-coll">

<div class="movie-coll-h">
    <div>Movie Collections</div>
    <div class="all-c">All collections</div>
</div>

<div class="movie-coll-holder">

    <div>
        <img src={Cardi}/><br/>
    <div class="adv">
        <span class="ac">Adventure</span><br/>
    </div>
    <div class="adx">
        <span class="ad">Collection of the amazing adventure</span>
    </div>
    </div>

    <div>
        <img src={Cardi}/><br/>
    <div class="adv">
        <span class="ac">Adventure</span><br/>
    </div>
    <div class="adx">
        <span class="ad">Collection of the amazing adventure</span>
    </div>
    </div>

    <div>
        <img src={Cardi}/><br/>
    <div class="adv">
        <span class="ac">Adventure</span><br/>
    </div>
    <div class="adx">
        <span class="ad">Collection of the amazing adventure</span>
    </div>
    </div>

    <div>
        <img src={Cardi}/><br/>
    <div class="adv">
        <span class="ac">Adventure</span><br/>
    </div>
    <div class="adx">
        <span class="ad">Collection of the amazing adventure</span>
    </div>
    </div>
   

</div>

</div>

      </>
    );
}
export default Card;