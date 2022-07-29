// import { a } from 'react-router-dom';

export default function Navbar(props) {


    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a onClick={() => props.changePage('exercise')} className="navbar-brand">Fit and Track</a>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <a onClick={() => props.changePage('exercise')} className="nav-link">Exercises</a>
                    </li>
                    <li className="navbar-item">
                        <a onClick={() => props.changePage('food')} className="nav-link">Food Log</a>
                    </li>
                    <li className="navbar-item">
                        <a onClick={() => props.changePage('user')} className="nav-link">User</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
