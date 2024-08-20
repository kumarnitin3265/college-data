
import collegeData from '../data/colleges.json';
import { FETCH_COLLEGES, SEARCH_COLLEGES, SORT_COLLEGS } from './types';

export const fetchColleges = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_COLLEGES,
            payload: collegeData.slice(0, 10),      // initial 10 rows
        });
    };
};

export const loadMoreColleges = (start, count) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_COLLEGES,
            payload: collegeData.slice(start, start+count),
            append: true
        });
    };
};

export const sortColleges = (field, order) => {
    return {
        type: SORT_COLLEGS,
        payload: { field, order},
    };
};

export const searchColleges = (query) => {
    return {
        type: SEARCH_COLLEGES,
        payload: query,
    };
};