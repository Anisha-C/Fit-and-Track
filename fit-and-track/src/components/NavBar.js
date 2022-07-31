// import { a } from 'react-router-dom';
import '../semantic/dist/components/menu.css';
import'../semantic/dist/components/button.css';

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
                    Fit and Track
                </div>
                <ul style={{ display: "flex", listStyle: "none"}} class ='right menu'>
                    <li>
                        <a onClick={() => props.changePage('exercise')} className="item">Exercises</a>
                    </li>
                    <li>
                        <a onClick={() => props.changePage('food')} className="item">Food Log</a>
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
