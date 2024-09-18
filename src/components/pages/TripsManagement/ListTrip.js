import Layout from "../../layouts";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Reason from "../../layouts/Reason";
import { Link } from "react-router-dom";
import config from "../../../config";

function ListTrip() {

    const [trips, setTrips] = useState([]);
    const [sortBy, setSortBy] = useState("Budget");
    const [sortOrder, setSortOrder] = useState("Descending");



    //show list data
    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await api.get(url.TRIP.LIST_BY_USER, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setTrips(response.data.data);
                // console.log(response.data.data);
            } catch (error) { }
        };
        loadData();
    }, []);

    //search, filter
    const [searchName, setSearchName] = useState("");
    const [searchDestination, setSearchDestination] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const handleSearchNameChange = (e) => {
        setSearchName(e.target.value);
    };
    const handleSearchDestinationChange = (e) => {
        setSearchDestination(e.target.value);
    };
    const handleCreatedDateChange = (e) => {
        setCreatedDate(e.target.value);
    };
    const filteredTrips = trips.filter((item) => {
        const nameMatch = item.tripName.toLowerCase().includes(searchName.toLowerCase());
        const destinationMatch = item.destination.toLowerCase().includes(searchDestination.toLowerCase());
        const createdDateMatch = createdDate ? new Date(item.createdDate) >= new Date(createdDate) : true;
        return nameMatch && destinationMatch && createdDateMatch;
    });

    const sortedTrips = [...filteredTrips].sort((a, b) => {
        let comparison = 0;
        if (sortBy === "Budget") {
            comparison = a.budget - b.budget; // So sánh ngân sách
        } else if (sortBy === "Trip Start Date") {
            comparison = new Date(b.startDate) - new Date(a.startDate);
        } else if (sortBy === "Title") {
            comparison = a.tripName.localeCompare(b.tripName);
        } else if (sortBy === "Duration") {
            const durationA = (new Date(a.endDate) - new Date(a.startDate)) / (1000 * 60 * 60 * 24);
            const durationB = (new Date(b.endDate) - new Date(b.startDate)) / (1000 * 60 * 60 * 24);
            comparison = durationB - durationA;
        }
        return sortOrder === "Descending" ? comparison : -comparison;
    });
    

    const images = [
        "url(assets/images/tour-box-image1.jpg)",
        "url(assets/images/tour-box-image2.jpg)",
        "url(assets/images/tour-box-image3.jpg)"
        // Thêm các URL ảnh khác nếu cần
    ];

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };

    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1; // Number of items per page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedTrips = sortedTrips.slice(startIndex, endIndex);

    const totalPages = Math.ceil(sortedTrips.length / itemsPerPage);

    return (
        <Layout>
            <section class="main-banner inner-banner overlay back-image" style={{ backgroundImage: "url(assets/images/tour-banner.jpg)" }}>
                <div class="sec-wp">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="banner-content wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h1 class="h1-title">Your Trip List</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="main-tour-list pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="left-side">
                                {/* Sort */}
                                <div className="tour-filter mb-30 wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <form>
                                        <div className="row no-gutters">
                                            <div className="col-lg-4">
                                                <label className="form-input filter-label">Sort by :</label>
                                            </div>
                                            <div className="col-lg-4">
                                                <span className="form-control-span release-wrap">
                                                    <select className="form-input" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                                        <option value="Budget">Budget</option>
                                                        <option value="Trip Start Date">Start Date</option>
                                                        <option value="Title">Trip Name</option>
                                                        <option value="Duration">Duration</option>
                                                    </select>
                                                    <span className="arrow"><i className="fas fa-caret-down" aria-hidden="true"></i></span>
                                                </span>
                                            </div>
                                            <div className="col-lg-4">
                                                <span className="form-control-span order-wrap">
                                                    <select className="form-input" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                                        <option value="Ascending">Ascending</option>
                                                        <option value="Descending">Descending</option>
                                                    </select>
                                                    <span className="arrow"><i className="fas fa-caret-down" aria-hidden="true"></i></span>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* user trip expense track list */}
                                <div className="tour-filter-result wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div className="row">
                                        {paginatedTrips.map((trip) => {
                                            const startDate = new Date(trip.startDate);
                                            const endDate = new Date(trip.endDate);
                                            const duration = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // Số ngày giữa startDate và endDate
                                            return (
                                                <div className="col-lg-6 col-md-6" key={trip.id}>
                                                    <div className="tour-box">
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: getRandomImage() }}></div>
                                                        <div className="tour-box-content">
                                                            <div className="tour-box-label">
                                                                <div className="tour-box-inner-label">
                                                                    <h4 className="h4-title">{trip.destination}</h4>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-title">
                                                                <h4 className="h4-title">{trip.tripName}</h4>
                                                            </div>
                                                            <div className="tour-info-box">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <i className="fas fa-clock"></i>
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Duration</h5>
                                                                                <p>{duration} days</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="tour-info">
                                                                            <div className="tour-info-icon">
                                                                                <i className="fas fa-user-friends"></i>
                                                                            </div>
                                                                            <div className="tour-info-content">
                                                                                <h5 className="h6-title">Group Size</h5>
                                                                                <p>{trip.groupSize} People</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tour-box-bottom">
                                                                <div className="tour-price">
                                                                    <h3 className="h3-title">${trip.budget}</h3>
                                                                </div>
                                                                <div className="book-now-button">
                                                                    <Link to={`/trip/${trip.id}`} title="View Details" className="sec-btn"><span>View Details</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Pagination */}
                                    <div className="row">
                                        <div className="col-12">
                                            <ul className="pagination">
                                                {Array.from({ length: totalPages }, (_, index) => (
                                                    <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} key={index}>
                                                        <a className="page-link" onClick={() => handlePageChange(index + 1)}>
                                                            {index + 1}
                                                        </a>
                                                    </li>
                                                ))}
                                                <li className="page-item">
                                                    <a className="page-link" aria-label="Next" onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}>
                                                        <i className="fas fa-angle-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="right-side">
                                <div class="widget wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div class="line-title">
                                        <h4 class="h4-title">Find Your Tour</h4>
                                    </div>
                                    <div class="find-tour-form">
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-search"></i></span>
                                                        <input type="text" placeholder="Search Tour(Name)" class="form-input" />
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                                                        <input type="text" placeholder="Where To?(Destination)" class="form-input" />
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-calendar-alt"></i></span>
                                                        <select class="form-input">
                                                            <option>Month</option>
                                                            <option>January</option>
                                                            <option>February</option>
                                                            <option>March</option>
                                                            <option>April</option>
                                                            <option>May</option>
                                                            <option>June</option>
                                                            <option>July</option>
                                                            <option>August</option>
                                                            <option>September</option>
                                                            <option>October</option>
                                                            <option>November</option>
                                                            <option>December</option>
                                                        </select>
                                                        <span class="arrow"><i class="fas fa-caret-down"></i></span>
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <label class="label-input">Duration (enddate - createdate)</label>
                                                    <span class="form-control-span no-icon">
                                                        <select class="form-input">
                                                            <option>Any</option>
                                                            <option>1 Day Tour</option>
                                                            <option>2-4 Days Tour</option>
                                                            <option>5-7 Days Tour</option>
                                                            <option>7+ Days Tour</option>
                                                        </select>
                                                        <span class="arrow"><i class="fas fa-caret-down"></i></span>
                                                    </span>
                                                </div>
                                                <div class="col-lg-6 col-sm-6">
                                                    <label class="label-input">Min Budget</label>
                                                    <span class="form-control-span no-icon no-arrow">
                                                        <input type="number" class="form-input" placeholder="1" />
                                                    </span>
                                                </div>
                                                <div class="col-lg-6 col-sm-6">
                                                    <label class="label-input">Max Budget</label>
                                                    <span class="form-control-span no-icon no-arrow">
                                                        <input type="number" class="form-input" placeholder="100" />
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="checkbox-list">
                                                        <div class="checkbox-item">
                                                            <input type="checkbox" id="cultural" name="cultural" value="cultural" />
                                                            <label for="cultural" class="check-box-label">Cultural</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button class="sec-btn find-now-btn"><span>Find Now</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <Reason />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ListTrip;