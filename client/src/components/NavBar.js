// import { a } from 'react-router-dom';

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
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a onClick={() => props.changePage('exercise')} className="navbar-brand">Fit and Track</a>
            <div className="collpase navbar-collapse">
                <ul style={{ display: "flex", listStyle: "none"}} className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <a onClick={() => props.changePage('exercise')} className="nav-link">Exercises</a>
                    </li>
                    <li className="navbar-item">
                        <a onClick={() => props.changePage('intake')} className="nav-link">Intake Log</a>
                    </li>
                    <li className="navbar-item">
                        <a onClick={() => props.changePage('user')} className="nav-link">User</a>
                    </li>
                </ul>
                <button onClick={logout} >Log Out</button>
            </div>
        </nav>
    );
}
