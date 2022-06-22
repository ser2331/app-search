import React, {useEffect} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PeopleList from "../people-list";
import FakeData  from "../FakeData";
import {useDispatch} from "react-redux";
import { app as actions } from '../store/actions';
import "./app.scss";

const { DATASET } = FakeData;

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.setPeopleToList(DATASET));
    }, []);

    return (
        <div className="App">
            <AppHeader/>
            <SearchPanel/>
            <PeopleList/>
        </div>
    );
};

export default App;
