import React from 'react';
import './App.css';
import './common.css';
import FixedNav from './FixedNav';
import SideLink from './SideLink';
// import Sections from '../containers/Sections';
import FullPageSecs from '../containers/FullPageSecs';
import ScrollPageSecs from '../containers/ScrollPageSecs';


const App = () => {

 
    return (
    <div className="body-container">
        <FixedNav />
        <SideLink />
        {/*<FullPageSecs />*/}
        <ScrollPageSecs />
    </div>
    )


 }

export default App;