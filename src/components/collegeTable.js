import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchColleges, loadMoreColleges, searchColleges, sortColleges } from "../actions/collegeActions";

const CollegeTable = () => {
    const dispatch = useDispatch();
    const colleges = useSelector((state) => state.colleges.filteredColleges);

    useEffect(() => {
        dispatch(fetchColleges());
    }, [dispatch]);

    const handleScroll = (e) => {
        if(e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
            dispatch(loadMoreColleges(colleges.length, 10));
        }
    };

    const handleSort = (field) => {
        dispatch(sortColleges(field, 'asc'));
    };

    const handleSearch = (e) => {
        dispatch(searchColleges(e.target.value));
    };

    return (
        <div onScroll={handleScroll} style={{ height: '400px', overflowY: 'scroll' }}>
            <input type="text" placeholder="Search by College Name" onChange={handleSearch} />
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('rating')}>Rating</th>
                        <th onClick={() => handleSort('fees')}>Fees</th>
                        <th onClick={() => handleSort('userReview')}>User Review</th>
                        <th>Featured</th>
                    </tr>
                </thead>
                <tbody>
                    {colleges.map((college, index) => {
                        <tr key={index}>
                            <td>{college.rating}</td>
                            <td>{college.fees}</td>
                            <td>{college.userReview}</td>
                            <td>{college.featured ? 'Yes': 'No'}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CollegeTable;