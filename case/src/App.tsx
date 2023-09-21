import './App.css';
import Member from './pages/Member';
import Apicall from './pages/Apicall';
import Home from './pages/Home';

// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/member" Component={Member} />
                <Route path="/apicall" Component={Apicall} />
                {/* <Route component={NotFound} /> */}
            </Routes>
        </Router>
    );
};

export default App;
