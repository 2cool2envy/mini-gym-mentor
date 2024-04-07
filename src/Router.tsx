import React from 'react';
import logo from './logo.svg';
//import '../App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from './components/Home';
import ChooseTraning from './components/ChooseTraining';

function RouterManager() {
    return (
        <Router>
            <div className="App">
                <ul className="App-header">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    ></Route>

                    <Route
                        path="/training"
                        element={<ChooseTraning />}
                    ></Route>



                </Routes>
            </div>
        </Router>

    );
}

export default RouterManager;
