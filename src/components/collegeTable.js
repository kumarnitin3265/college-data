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
        <div onScroll>
        <input type= "text" placeholder="Search by College Name" onChange={handleSearch}/>

        <div>
            <label for="college">Sort By...</label>
            <button onClick={() => handleSort('rating')}>Rating</button>
            <button onClick={() => handleSort('fees')}>Fees</button>
            <button onClick={() => handleSort('userReview')}>User Review</button>
        </div>

        <table>
            <thead>
                <td>CD Rank</td>
                <td>Colleges</td>
                <td>Course Fees</td>
                <td>Placement</td>
                <td>User Reviews</td>
                <td> Ranking</td>
            </thead>
            {colleges.map((college, i) => (
                <tr>
                    <td className={styled.sNo}> 
                        # {i+1}
                    </td>
                    <td className={styled.collegesCnt}>
                        <div className={styled.clgP1}>
                            <div className={styled.imgCnt}>
                                <img src='https://media.glassdoor.com/sqll/974141/maharaja-agrasen-institute-of-technology-squarelogo-1642764055963.png' alt={'companyname'} />
                            </div>
                            <div className={styled.clgDetail}>
                                <p className={styled.clgName}> {college.collegeDetail.name} </p>
                                <p className={styled.clgLocation}> {college.collegeDetail.location}  </p>
                                {
                                    college.collegeDetail.degree && college.collegeDetail.branch
                                    ?
                                        <div className={styled.branchDetail}>
                                            <span className={styled.branch}>
                                                <p className={styled.branchName}> {college.collegeDetail.degree}  {college.collegeDetail.branch}  </p>
                                                <img className={styled.dropdownIcon} src='https://cdn-icons-png.flaticon.com/128/2951/2951226.png' alt='dropdown' />
                                            </span>                                        
                                            <p className={styled.cutOff}> {college.collegeDetail.cutoff.name} : {college.collegeDetail.cutoff.cutoffNum} </p>
                                        </div>
                                    :
                                    ""
                                }
                            </div>
                        </div>
                        <div className={styled.clgP2}>
                            <span className={styled.applyNow}>
                                <img className={styled.arrowRightIcon} src='https://cdn-icons-png.flaticon.com/128/664/664866.png' alt='applyNow' />
                                <p> Apply Now </p>
                            </span>
                            <span className={styled.downloadBrochure}>
                                <img className={styled.downloadicon} src='https://cdn-icons-png.flaticon.com/128/2989/2989976.png' alt='downloadNow' />
                                <p> Download Brochure </p>
                            </span>
                            <span className={styled.addToCompare}>
                                <label>
                                    <input type='checkbox' />
                                    <span> Add to Compare </span>
                                </label>
                            </span>
                        </div>
                    </td>
                    <td className={styled.courseFees}>
                        <p> &#8377; {college.courseFee.amount} </p>
                        <p> {college.courseFee.degree} </p>
                        <p> - {college.courseFee.year} </p>
                        <span className={styled.compareFees}>
                            <img className={styled.compareFeeIcon} src='https://cdn-icons-png.flaticon.com/128/570/570226.png' alt='compare' />
                            Compare Fees
                        </span>
                    </td>
                    <td className={styled.placement}>
                        <p> &#8377; {college.placement.avgPackageAmt} </p>
                        <p> Average Package </p>
                        <p> &#8377; {college.placement.highestPackageAmt} </p>
                        <p> Highest Package </p>
                        <span className={styled.comparePlacement}> 
                            <img className={styled.comparePlacementIcon} src='https://cdn-icons-png.flaticon.com/128/570/570226.png' alt='compare' />
                            Compare Placement 
                        </span>
                    </td>
                    <td className={styled.userReviews}>
                        <span className={styled.rating}>
                            <img className={styled.dot} src='https://cdn-icons-png.flaticon.com/128/17500/17500360.png' alt='dot' />
                            <p> {college.userReview.rating} / 10 </p>
                        </span>
                        <p> Based on 289 User </p>
                        <p> Reviews </p>
                        <span className={styled.bestInSocialLife}>
                            <img className={styled.checkIcon} src='https://cdn-icons-png.flaticon.com/128/17554/17554905.png' alt='check' />
                            <p> Best in Social Life </p>
                            <img className={styled.dropdownIcon} src='https://cdn-icons-png.flaticon.com/128/2951/2951226.png' alt='dropdown' />
                        </span>
                    </td>
                    <td className={styled.ranking}>
                        <p className={styled.rank}> 
                        # {college.ranking.rank}<sup>rd</sup>/<span style={{color: 'orange', fontWeight: 700}}> {college.ranking.total} </span> in {college.ranking.location} 
                        
                        </p>
                        <span>
                            <img className={styled.newsIcon} src='https://seeklogo.com/images/I/india-today-logo-0218513CB5-seeklogo.com.png' alt='newsIcon' />
                            <p> {college.ranking.year} </p>
                        </span>
                        <span>
                            <span>
                                <span> <img className={styled.newsIcon} src='https://seeklogo.com/images/I/india-today-logo-0218513CB5-seeklogo.com.png' alt='newsChannel' /> </span>
                                <span> <img className={styled.newsIcon} src='https://seeklogo.com/images/I/india-today-logo-0218513CB5-seeklogo.com.png' alt='newsChannel' /> </span>
                                <span> <img className={styled.newsIcon} src='https://seeklogo.com/images/I/india-today-logo-0218513CB5-seeklogo.com.png' alt='newsChannel' /> </span>
                            </span>
                            <span>
                                <img className={styled.dropdownIcon} src='https://cdn-icons-png.flaticon.com/128/2951/2951226.png' alt='dropdown' />
                            </span>
                        </span>
                    </td>
                </tr>
            ))}
            </table>
        </div>
    )

};

export default CollegeTable;
