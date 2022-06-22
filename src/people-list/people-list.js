import React from 'react';
import * as _ from 'lodash';
import {useSelector} from "react-redux";

import "./people-list.scss";

const PeopleList = () => {
    const peoples = useSelector((state) => _.get(state, 'app.peoples'));
    const term = useSelector((state) => _.get(state, 'app.term'));

    const filteredPeoples = () => {
        if (term.length === 0)
            return peoples;

        return peoples.filter((item) => {
            return item.toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    };

    return (
        <div className="PeopleList">
            {
                filteredPeoples().map((people) => (
                    <div key={people} className="people">
                        {people}
                    </div>
                ))
            }
        </div>
    );
};

export default PeopleList;
