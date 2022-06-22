import {app as actions} from '../../actions';

const initialState = {
    peoples: [],
    term: '',
    currentPage: 1,
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case actions.APP_SET_PEOPLE:
            return {
                ...state,
                peoples: action.payload,
            };

        case actions.APP_SET_CHANGE:
            return {
                ...state,
                term: action.payload,
            };

        default:
            return state;
    }
};

export default app;
