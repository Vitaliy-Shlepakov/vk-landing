import React from 'react';
import './App.sass';
import ScrollArea from "./components/ScrollArea/ScrollArea";
import FixedArea from "./components/FixedArea/FixedArea";

const App = () => {
    return (
        <div className="app">
            <ScrollArea/>
            <FixedArea/>
        </div>
    );
}

export default App;
