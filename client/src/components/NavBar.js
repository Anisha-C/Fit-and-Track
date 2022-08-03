// import { a } from 'react-router-dom';

import {Image} from 'semantic-ui-react';
import '../semantic/dist/components/menu.css';
import'../semantic/dist/components/button.css';
import '../semantic/dist/components/image.css';
import myLogo from '/assets/images/fit_and_track.jpg';

export default function Navbar(props) {

    async function logout() {
        const response = await fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

    return (
        <nav class='ui sticky'>
            <div class="ui massive menu">
                <div class="header item">
                    <Image class="ui medium circular image" src= '../assets/images/fit_and_track.jpg' />
                    Fit and Track
                </div>
                <ul style={{ display: "flex", listStyle: "none"}} class ='right menu'>
                    <li>
                        <a onClick={() => props.changePage('exercise')} className="item">Exercises</a>
                    </li>
                    <li className="navbar-item">
                        <a onClick={() => props.changePage('intake')} className="nav-link">Intake Log</a>
                    </li>
                    <li>
                        <a onClick={() => props.changePage('user')} className="item">Register</a>
                    </li>
                </ul>
                <div class="item">
                    <div onClick={logout}  class='ui primary button'>Log Out</div>
                </div>
            </div>
        </nav>
    );
}
