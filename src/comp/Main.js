import React from 'react';
import Imgp from '../img/imagepos.jpg';

function Main(){
    return (
        <>
         <div class="image">
        <div>
        <img class="full-width-image" alt="img" src={Imgp}/>
           <div class="inside-image">    
        <span class="image-c">Action | Drama | Movie | Adventure</span><br/>
        <span class="image-h">Interstellar</span><br/>
        <input class="image-b" type="button" value="Watch trailer"/> <input  class="image-b" type="button" value="Add to favourites"/>
        <p class="image-p">hello we are about to think the destiny hello we are about to think the destiny
            hello we are about to think the destiny hello we are about to think the destiny
            hello we are about to think the destiny hello we are about to think the destiny
        </p>
           </div>

       </div>
    </div>
    </>
    );
}
export default Main;