import React, { useState, useEffect } from 'react';
import Layout from "../../layouts";
import api from '../../../services/api';
import url from '../../../services/url';
import { getAccessToken } from '../../../utils/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';

function TripCreate() {


    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const loadData = async () => {
        try {
            const headerConfig = {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            };

            const [categoriesResponse] = await Promise.all([
                api.get(url.CATEGORY.LIST, headerConfig),
            ]);

            setCategories(categoriesResponse.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const [formData, setFormData] = useState({
        tripName: '',
        destination: '',
        budget: 0,
        groupSize: 0,
        startDate: '',
        endDate: '',
        categoriesId: [],
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const headers = {
                Authorization: `Bearer ${getAccessToken()}`,
                "Content-Type": "application/json",
            };
            const response = await api.post(url.TRIP.CREATE, formData, { headers });

            if (response && response.data) {
                toast.success("Create Trip Expense Track Successfully.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    navigate(config.routes.trip);
                }, 3000);
            }
        } catch (error) {
            if (error.response && error.response.data === 400 && error.response.data.message === "Trip already exists") {
                toast.warning("The name of this Trip already exists", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error("An error occurred while creating the Trip expense track", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    };

    // Hàm xử lý thay đổi giá trị của các trường nhập liệu
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // Điều kiện hiển thị các trường và nút
    const showDestination = formData.tripName !== '';
    const showStartDate = formData.destination !== '';
    const showEndDate = formData.startDate !== '';
    const showGroupSize = formData.endDate !== '';
    const showBudget = formData.groupSize > 0;
    const showCategories = formData.budget > 0;
    const showButton = formData.budget.length > 0;

    return (
        <Layout>
            <ToastContainer />
            <section className="main-banner">
                <div className="banner-slider">
                    <div className="banner-slide-box overlay back-image">
                        <div className="sec-wp">
                            <div className="main-banner-bottom-form">
                                <div className="sec-wp">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="banner-form">
                                                    <form onSubmit={handleSubmit}>

                                                        {/* Trường Trip Name */}
                                                        <div className="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                                            <label htmlFor="tripName">Trip Name</label>
                                                            <span className="form-control-span where-wrap">
                                                                <span className="icon"><i className="fas fa-tag"></i></span>
                                                                <input
                                                                    type="text"
                                                                    name="tripName"
                                                                    className="form-input"
                                                                    placeholder="Trip Name"
                                                                    value={formData.tripName}
                                                                    onChange={handleChange}
                                                                />
                                                            </span>
                                                        </div>
                                                        {/* Trường Destination */}
                                                        {showDestination && (
                                                            <div className="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.3s">
                                                                <label htmlFor="destination">Destination</label>
                                                                <span className="form-control-span where-wrap">
                                                                    <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                                                                    <input
                                                                        type="text"
                                                                        name="destination"
                                                                        className="form-input"
                                                                        placeholder="Where To?"
                                                                        value={formData.destination}
                                                                        onChange={handleChange}
                                                                    />
                                                                </span>
                                                            </div>
                                                        )}

                                                        {/* Trường Start Date */}
                                                        {showStartDate && (
                                                            <div className="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.3s">
                                                                <label htmlFor="startDate">Start Date</label>
                                                                <span className="form-control-span date-wrap">
                                                                    <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                                                                    <input
                                                                        type="date"
                                                                        name="startDate"
                                                                        className="form-input"
                                                                        placeholder="Start Date"
                                                                        value={formData.startDate}
                                                                        onChange={handleChange}
                                                                    />
                                                                </span>
                                                            </div>
                                                        )}

                                                        {/* Trường End Date */}
                                                        {showEndDate && (
                                                            <div className="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.4s">
                                                                <label htmlFor="startDate">End Date</label>
                                                                <span className="form-control-span date-wrap">
                                                                    <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                                                                    <input
                                                                        type="date"
                                                                        name="endDate"
                                                                        className="form-input"
                                                                        placeholder="End Date"
                                                                        value={formData.endDate}
                                                                        onChange={handleChange}
                                                                    />
                                                                </span>
                                                            </div>
                                                        )}

                                                        {/* Trường Group Size */}
                                                        {showGroupSize && (
                                                            <div className="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.6s">
                                                                <label htmlFor="groupSize">Group Size</label>
                                                                <span className="form-control-span number-wrap">
                                                                    <span className="icon"><i className="fas fa-users"></i></span>
                                                                    <input
                                                                        type="text"
                                                                        name="groupSize"
                                                                        className="form-input"
                                                                        placeholder="Group Size"
                                                                        value={formData.groupSize}
                                                                        onChange={handleChange}
                                                                    />
                                                                </span>
                                                            </div>
                                                        )}

                                                        {/* Trường Budget */}
                                                        {showBudget && (
                                                            <div className="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.7s">
                                                                <label htmlFor="budget">Budget</label>
                                                                <span className="form-control-span number-wrap">
                                                                    <span className="icon"><i className="fas fa-dollar-sign"></i></span>
                                                                    <input
                                                                        type="text"
                                                                        name="budget"
                                                                        className="form-input"
                                                                        placeholder="Budget"
                                                                        value={formData.budget}
                                                                        onChange={handleChange}
                                                                    />
                                                                </span>
                                                            </div>
                                                        )}

                                                        {/* Trường Categories */}
                                                        {showCategories && (
                                                            <div className="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.8s">
                                                                <label htmlFor="categoriesId">Travel Type</label>
                                                                <span className="form-control-span categories-wrap">
                                                                    <span className="icon"><i className="fas fa-tags"></i></span>
                                                                    <select
                                                                        name="categoriesId"
                                                                        className="form-input"
                                                                        multiple
                                                                        value={formData.categoriesId}
                                                                        onChange={(e) => {
                                                                            const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
                                                                            setFormData(prevData => ({ ...prevData, categoriesId: selectedOptions }));
                                                                        }}
                                                                    >
                                                                        {categories.map(category => (
                                                                            <option key={category.id} value={category.id}>{category.name}</option>
                                                                        ))}
                                                                    </select>
                                                                    <span className="arrow"><i className="fas fa-caret-down"></i></span>
                                                                </span>
                                                            </div>
                                                        )}

                                                        {/* Nút Find Now */}
                                                        {showButton && (
                                                            <div className="input-col button-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.6s">
                                                                <span className="form-control-span button-wrap">
                                                                    <button className="sec-btn"><span>Begin Your Trip Expense Track</span></button>
                                                                </span>
                                                            </div>
                                                        )}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default TripCreate;
