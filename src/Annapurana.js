
import React from 'react';
import ReactDom from 'react-dom/client';
import Body from './components/Body.js';
import Header from './components/tempHeader.js';


const AppLayout = ()=>{
    return <div className="app">
            <Header/>
            <Body/>
    </div>
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);