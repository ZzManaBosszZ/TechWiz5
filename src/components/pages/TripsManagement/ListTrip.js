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
                const tripsWithImages = response.data.data.map(trip => ({
                    ...trip,
                    image: getRandomImage() // Gán ảnh ngẫu nhiên cho mỗi mục
                }));
                setTrips(tripsWithImages);
            } catch (error) { }
        };
        loadData();
    }, []);


    //search, filter
    const [searchName, setSearchName] = useState("");
    const [searchDestination, setSearchDestination] = useState("");
    const [searchStartDate, setSearchStartDate] = useState("");
    const [searchDuration, setSearchDuration] = useState("Any");
    const [minBudget, setMinBudget] = useState("");
    const [maxBudget, setMaxBudget] = useState("");

    const handleSearchNameChange = (e) => setSearchName(e.target.value);
    const handleSearchDestinationChange = (e) => setSearchDestination(e.target.value);
    const handleSearchStartDateChange = (e) => setSearchStartDate(e.target.value);
    const handleSearchDurationChange = (e) => setSearchDuration(e.target.value);
    const handleMinBudgetChange = (e) => setMinBudget(e.target.value);
    const handleMaxBudgetChange = (e) => setMaxBudget(e.target.value);

    const handleReset = () => {
        setSearchName("");
        setSearchDestination("");
        setSearchStartDate("");
        setSearchDuration("Any");
        setMinBudget("");
        setMaxBudget("");
    };

    const filteredTrips = trips.filter((item) => {
        const nameMatch = item.tripName.toLowerCase().includes(searchName.toLowerCase());
        const destinationMatch = item.destination.toLowerCase().includes(searchDestination.toLowerCase());
        const startDateMatch = searchStartDate
            ? new Date(item.startDate).toLocaleDateString() === new Date(searchStartDate).toLocaleDateString()
            : true;
        const durationMatch = searchDuration === "Any" || (searchDuration === "1 Day Tour" && (new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24) === 1) ||
            (searchDuration === "2-4 Days Tour" && (new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24) >= 2 && (new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24) <= 4) ||
            (searchDuration === "5-7 Days Tour" && (new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24) >= 5 && (new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24) <= 7) ||
            (searchDuration === "7+ Days Tour" && (new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24) > 7);
        const budgetMatch = (minBudget ? item.budget >= minBudget : true) && (maxBudget ? item.budget <= maxBudget : true);

        return nameMatch && destinationMatch && startDateMatch && durationMatch && budgetMatch;
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
        "url(assets/images/tour-box-image3.jpg)",
        "url(assets/images/tour-list-image1.jpg)",
        "url(assets/images/tour-list-image2.jpg)",
        "url(assets/images/tour-list-image3.jpg)",
    ];

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };


    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Number of items per page
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
                                                        <div className="tour-box-image back-image" style={{ backgroundImage: trip.image }}></div>
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
                                                                    <Link to={`/trip-detail/${trip.id}`} title="View Details" className="sec-btn"><span>View Details</span></Link>
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

                        {/* Search */}
                        <div class="col-lg-4">
                            <div class="right-side">
                                <div class="widget wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div class="line-title">
                                        <h4 class="h4-title">Find Your Tour</h4>
                                    </div>
                                    <div class="find-tour-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-search"></i></span>
                                                        <input type="text" placeholder="Search Tour(Name)" className="form-input" value={searchName} onChange={handleSearchNameChange} />
                                                    </span>
                                                </div>
                                                <div className="col-lg-12">
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                                                        <input type="text" placeholder="Where To?(Destination)" className="form-input" value={searchDestination} onChange={handleSearchDestinationChange} />
                                                    </span>
                                                </div>
                                                <div className="col-lg-12">
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                                                        <input
                                                            type="date"
                                                            className="form-input"
                                                            value={searchStartDate}
                                                            onChange={handleSearchStartDateChange}>
                                                        </input>
                                                        <span className="arrow"><i className="fas fa-caret-down"></i></span>
                                                    </span>
                                                </div>
                                                <div className="col-lg-12">
                                                    <label className="label-input">Duration</label>
                                                    <span className="form-control-span no-icon">
                                                        <select className="form-input" value={searchDuration} onChange={handleSearchDurationChange}>
                                                            <option value="Any">Any</option>
                                                            <option value="1 Day Tour">1 Day Tour</option>
                                                            <option value="2-4 Days Tour">2-4 Days Tour</option>
                                                            <option value="5-7 Days Tour">5-7 Days Tour</option>
                                                            <option value="7+ Days Tour">7+ Days Tour</option>
                                                        </select>
                                                        <span className="arrow"><i className="fas fa-caret-down"></i></span>
                                                    </span>
                                                </div>
                                                <div className="col-lg-6 col-sm-6">
                                                    <label className="label-input">Min Budget</label>
                                                    <span className="form-control-span no-icon no-arrow">
                                                        <input type="number" className="form-input" placeholder="1" value={minBudget} onChange={handleMinBudgetChange} />
                                                    </span>
                                                </div>
                                                <div className="col-lg-6 col-sm-6">
                                                    <label className="label-input">Max Budget</label>
                                                    <span className="form-control-span no-icon no-arrow">
                                                        <input type="number" className="form-input" placeholder="100" value={maxBudget} onChange={handleMaxBudgetChange} />
                                                    </span>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button className="sec-btn find-now-btn" type="button" onClick={handleReset}><span>Reset</span></button>
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