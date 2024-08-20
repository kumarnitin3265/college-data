import { FETCH_COLLEGES, SEARCH_COLLEGES, SORT_COLLEGS } from "../actions/types";

const initialState = {
    colleges: [],
    filteredColleges: [],
};

const collegeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COLLEGES:
            return {
                ...state,
                colleges: action.append
                    ? [...state.colleges, ...action.payload]
                    : action.payload,
                filteredColleges: action.append
                    ? [...state.colleges, ...action.payload]
                    : action.payload,
            };
        case SORT_COLLEGS:
            const sorted = [...state.filteredColleges].sort((a, b) => {
                if(action.payload.order === 'asc') {
                    return a[action.payload.field] > b[action.payload.field]? 1: -1;
                } else {
                    return a[action.payload.field] < b[action.payload.field]? 1: -1
                }
            });
            return {
                ...state,
                filteredColleges: sorted,
            };
        case SEARCH_COLLEGES: 
            const filtered = state.colleges.filter((college) => {
                college.name.toLowerCase().includes(action.payload.toLowerCase())
            });
            return {
                ...state,
                filteredColleges: filtered,
            };
        default:
            return state;
    }
};

export default collegeReducer;