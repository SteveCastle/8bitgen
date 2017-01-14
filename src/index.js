import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import loggingMiddleware from './middleware/loggingMiddleware';
import App from './App';
import './index.css';

const initialState = {
    colors: [
        "#7C7C7C",
        "#0000FC",
        "#0000BC",
        "#4428BC",
        "#940084",
        "#A80020",
        "#A81000",
        "#881400",
        "#503000",
        "#007800",
        "#006800",
        "#005800",
        "#004058",
        "#000000",
        "#000000",
        "#000000",
        "#BCBCBC",
        "#0078F8",
        "#0058F8",
        "#6844FC",
        "#D800CC",
        "#E40058",
        "#F83800",
        "#E45C10",
        "#AC7C00",
        "#00B800",
        "#00A800",
        "#00A844",
        "#008888",
        "#000000",
        "#000000",
        "#000000",
        "#F8F8F8",
        "#3CBCFC",
        "#6888FC",
        "#9878F8",
        "#F878F8",
        "#F85898",
        "#F87858",
        "#FCA044",
        "#F8B800",
        "#B8F818",
        "#58D854",
        "#58F898",
        "#00E8D8",
        "#787878",
        "#000000",
        "#000000",
        "#FCFCFC",
        "#A4E4FC",
        "#B8B8F8",
        "#D8B8F8",
        "#F8B8F8",
        "#F8A4C0",
        "#F0D0B0",
        "#FCE0A8",
        "#F8D878",
        "#D8F878",
        "#B8F8B8",
        "#B8F8D8",
        "#00FCFC",
        "#F8D8F8",
        "#000000",
        "#000000"
    ],
    frames: [
        [
            ['#000', '#000', '#f9af14', '#f9af14', '#f9af14', '#000', '#000', '#bcbcbc'],
            ['#000', '#f9af14', '#f9af14', '#f9af14', '#f9af14', '#f9af14', '#000', '#bcbcbc'],
            ['#000', '#f9af14', '#f2be98', '#000', '#ffc9a1', '#000', '#000', '#bcbcbc'],
            ['#df9d12', '#df9d12', '#f2be98', '#ffc9a1', '#ffc9a1', '#ffc9a1', '#000', '#bcbcbc'],
            ['#000', '#358230', '#358230', '#359030', '#359030', '#000', '#000', '#a9a9a9'],
            ['#ffc9a1', '#358230', '#358230', '#359030', '#358230', '#358230', '#ffc9a1', '#f2be98'],
            ['#000', '#000', '#358230', '#358230', '#358230', '#000', '#000', 'brown'],
            ['#000', '#ad0200', '#000', '#000', '#ad0200', '#000', '#000', '#000']
        ]
    ],
    currentFrame: 0,
    selectedColor: "#000"
}

const configureStore = function configureStore(initialState) {
    return createStore(
        reducer,
        initialState, compose(
            applyMiddleware(
                loggingMiddleware,
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ))
}

//Configure store with initial empty state.
const store = configureStore(initialState);


ReactDOM.render( < Provider store = { store } >
    < App / >
    < /Provider>,
    document.getElementById('root')
);
