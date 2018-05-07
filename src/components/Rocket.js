import React, { Component } from 'react';
import '../assets/scss/Rocket.scss';

class Rocket extends Component {
    render() {
        return(
            <div className="rocket">
<h2>rocket</h2>
<div className="rocket__container">
<div className="rocket__container--left">
    <p>name: <span id="name">falcon1</span>
    </p>
    <p>company: <span id="company">falcon1</span>
    </p>
    <p>height: <span id="height">falcon1</span>
    </p>
    <p>diameter: <span id="diameter">falcon1</span>
    </p>
    <p>mass: <span id="mass">falcon1</span>
    </p>
</div>
<div className="rocket__container--right">
    <p>first flight: <span id="first-flight">falcon1</span>
    </p>
    <p>country: <span id="success-rate">falcon1</span>
    </p>
    <p>success rate: <span id="height">falcon1</span>
    </p>
    <p>cost per launch: <span id="cost">falcon1</span>
    </p>
</div>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse provident cupiditate. Reiciendis molestiae odio hic expedita
explicabo adipisci facere, officia sapiente quas excepturi consequuntur dolor alias distinctio, itaque
aliquid.</p>
</div>
        )
    }
}

export default Rocket;



