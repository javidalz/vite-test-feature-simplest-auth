import {
    lazy,
    useState,
    useMemo,
    useCallback,
    useEffect,
    Suspense,
} from 'react'
import './App.scss'
import axios from 'axios'
import axiosInstance from './common/axiosInstance'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import Home from './pages/Home'
import { Provider, useSelector } from 'react-redux'
import { compose, applyMiddleware, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './common/state/reducers/counterSlice'
import createSagaMiddleware from 'redux-saga'
import userSaga from './common/sagas/userSaga'
import userSlice from './common/state/reducers/userSlice'
import Posts from './pages/Posts'
import rootSaga from './common/sagas'
import postsSlice from './common/state/reducers/postsSlice'
import SinglePost from './pages/SinglePost'
import Login from './pages/Login'
import CheckList from './pages/CheckList'
import Profile from './pages/Profile'
import authSlice from './common/state/reducers/authSlice'
import { allReducers } from './common/state/reducers'
import { tokenSelector } from './common/state/selectors/authSelector'
import RootNavigator from './RootNavigator'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = configureStore({
    reducer: allReducers,
    composeEnhancers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

function App() {
    return (
        <Provider store={store}>
            <RootNavigator />
        </Provider>
    )
}

export default App
