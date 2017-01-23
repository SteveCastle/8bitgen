import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import loggingMiddleware from './middleware/loggingMiddleware';
import ApolloClient, { createNetworkInterface }  from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import {ArtBoardContainer} from './components/ArtBoard';
import './index.css';

const initialState = {grids: {
    colors: ["#7C7C7C","#BCBCBC","#F8F8F8","#FCFCFC","#0000FC","#0078F8","#3CBCFC","#A4E4FC","#0000BC","#0058F8","#6888FC","#B8B8F8","#4428BC","#6844FC","#9878F8","#D8B8F8","#940084","#D800CC","#F878F8","#F8B8F8","#A80020","#E40058","#F85898","#F8A4C0","#A81000","#F83800","#F87858","#F0D0B0","#881400","#E45C10","#FCA044","#FCE0A8","#503000","#AC7C00","#F8B800","#F8D878","#007800","#00B800","#B8F818","#D8F878","#006800","#00A800","#58D854","#B8F8B8","#005800","#00A844","#58F898","#B8F8D8","#004058","#008888","#00E8D8","#00FCFC","#000000","#000000","#787878","#F8D8F8","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#BCBCBC","#F8F8F8","#FCFCFC"],
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
}

const client = new ApolloClient({
    networkInterface: createNetworkInterface({uri:'http://localhost:3001/graphql'})
});

const configureStore = function configureStore(initialState) {
    return createStore(
        combineReducers(
            {grids: reducer,
             apollo: client.reducer()
            }),
        initialState, compose(
            applyMiddleware(
                loggingMiddleware,
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ))
}

//Configure store with initial empty state.
const store = configureStore(initialState);

const routes = <Route path="/" component={App}>
  <IndexRoute component={ArtBoardContainer} />
  <Route path="/grid/:gridId" component={ArtBoardContainer} />
</Route>;

ReactDOM.render( <ApolloProvider store={ store } client={ client }> 
      <Router history={browserHistory}>{routes}</Router>
    </ApolloProvider>,
    document.getElementById('root')
);
