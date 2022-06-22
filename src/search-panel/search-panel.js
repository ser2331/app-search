import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as _ from "lodash";
import { app as actions } from '../store/actions';

import "./search-panel.scss";

const SearchPanel = () => {
    const dispatch = useDispatch();
    const term = useSelector((state) => _.get(state, 'app.term'));

    const onSearchChange = (e) => {
        dispatch(actions.setChange(e.target.value));
    };

    return (
        <div className="SearchPanel">
            <form>
                <input
                    style={{ width: 424 }}
                    placeholder="input name"
                    value={term}
                    onChange={onSearchChange}
                    className="input-name"
                />
            </form>
        </div>
    );
};

export default SearchPanel;
