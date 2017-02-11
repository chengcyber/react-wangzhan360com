import React from 'react';
import './App.css';
import './common.css';
import FixedNav from './FixedNav';
import SideLink from './SideLink';
import Sections from '../containers/Sections';


const App = () => {

        return (
        <div className="body-container">
            <FixedNav />
            <SideLink />
            <Sections />
        </div>
        )


 }

export default App;