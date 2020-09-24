import React from 'react';
import './App.css';
import FuncComp from "./components/FuncComp";
import ClasComp from "./components/ClasComp";
import QuoteComp from "./components/QuoteComp";

function App() {
    return (
        <div className="App">
            <FuncComp />
            <ClasComp text="class component"/>
            <QuoteComp author="Shakespeare"/>
        </div>
    );
}
export default App;
