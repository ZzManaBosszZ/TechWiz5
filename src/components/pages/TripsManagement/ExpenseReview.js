import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Chart from "react-apexcharts";

function ExpenseReview() {

    const { id } = useParams();

    const [trip, setTrip] = useState({ expenses: [], categories: [] });
    const [chartData, setChartData] = useState({ labels: [], series: [] });

    // Giả sử ngân sách tổng là 1200 USD
    const totalBudget = 1200;

    // Fake data for testing
    useEffect(() => {
        // Dữ liệu giả
        const fakeCategories = [
            { id: 1, name: "Accommodation" },
            { id: 2, name: "Meals" },
            { id: 3, name: "Transport" },
            { id: 4, name: "Activities" },
            { id: 5, name: "Miscellaneous" }
        ];

        const fakeExpenses = [
            { categoryId: 1, amount: 500 },
            { categoryId: 2, amount: 200 },
            { categoryId: 3, amount: 150 },
            { categoryId: 4, amount: 100 },
            { categoryId: 5, amount: 50 }
        ];

        setTrip({ categories: fakeCategories, expenses: fakeExpenses });

        // Chuẩn bị dữ liệu cho biểu đồ
        const labels = fakeCategories.map(category => category.name);

        // Tổng số tiền đã chi tiêu
        const totalSpent = fakeExpenses.reduce((sum, expense) => sum + expense.amount, 0);
        
        // Tính phần tiền còn lại
        const remainingAmount = totalBudget - totalSpent;

        const series = fakeCategories.map(category => {
            const totalExpenseForCategory = fakeExpenses
                .filter(expense => expense.categoryId === category.id)
                .reduce((sum, expense) => sum + expense.amount, 0);
            return totalExpenseForCategory;
        });

        // Thêm phần "Remaining" vào series và labels
        setChartData({ 
            labels: [...labels, "Remaining"], 
            series: [...series, remainingAmount] 
        });
    }, [id]);

    const chartOptions = {
        chart: {
            type: 'donut',
        },
        labels: chartData.labels,
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A'], // Màu sắc khác nhau
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 300
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    // const { id } = useParams();

    // const [trip, setTrip] = useState({ expenses: [], categories: [] });
    // const [chartData, setChartData] = useState({ labels: [], series: [] });

    // const loadData = useCallback(async () => {
    //     try {
    //         const tripDetailRequest = await api.get(url.TRIP.LIST_BY_ID.replace("{}", id), { headers: { Authorization: `Bearer ${getAccessToken()}` } });
    //         const tripData = tripDetailRequest.data.data;

    //         setTrip(tripData);

    //         // Extract categories and expenses for chart
    //         const labels = tripData.categories.map(category => category.name);
    //         const series = tripData.categories.map(category => {
    //             const totalExpenseForCategory = tripData.expenses
    //                 .filter(expense => expense.categoryId === category.id)
    //                 .reduce((sum, expense) => sum + expense.amount, 0);
    //             return totalExpenseForCategory;
    //         });

    //         setChartData({ labels, series });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [id]);

    // useEffect(() => {
    //     loadData();
    // }, [loadData]);

    // const chartOptions = {
    //     chart: {
    //         type: 'donut',
    //     },
    //     labels: chartData.labels,
    //     responsive: [{
    //         breakpoint: 480,
    //         options: {
    //             chart: {
    //                 width: 300
    //             },
    //             legend: {
    //                 position: 'bottom'
    //             }
    //         }
    //     }]
    // };

    return (
        <>
            <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                <div class="tab-box review-tab-box">
                    <h2 class="h2-title">Tour Review Expense</h2>
                    <p>This tab summarizes trip expenses, covering major costs like flights, accommodation, and meals, as well as any extra fees. It helps users compare actual spending to the budget and evaluate cost-effectiveness for future trips. This section may also include feedback on service quality relative to the expenses.</p>
                    
                    {/* Chart */}
                    <div class="chart-wrapper">
                        <Chart
                            options={chartOptions}
                            series={chartData.series}
                            type="donut"
                            width="500"
                        />
                    </div>
                    
                    {/* Existing content */}
                    <div class="review-breakdown">
                        <div class="rb-left-side">
                            <div class="rb-avarage-rating">
                                <h2 class="h2-title"><span>10.0</span></h2>
                            </div>
                            <div class="rb-avarage-verbal-desc">
                                <i class="fas fa-smile"></i> Superb
                            </div>
                        </div>
                        <div class="rb-right-side">
                            <div class="rb-progress-bar">
                                <div class="progress-bar-item">
                                    <h4 class="h4-title">Accomodation</h4>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar1"></div>
                                        <span class="progress-value">100%</span>
                                    </div>
                                </div>
                                <div class="progress-bar-item">
                                    <h4 class="h4-title">Destination</h4>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar2"></div>
                                        <span class="progress-value">100%</span>
                                    </div>
                                </div>
                                <div class="progress-bar-item">
                                    <h4 class="h4-title">Meals</h4>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar3"></div>
                                        <span class="progress-value">100%</span>
                                    </div>
                                </div>
                                <div class="progress-bar-item">
                                    <h4 class="h4-title">Transport</h4>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar4"></div>
                                        <span class="progress-value">100%</span>
                                    </div>
                                </div>
                                <div class="progress-bar-item">
                                    <h4 class="h4-title">Overall</h4>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar4"></div>
                                        <span class="progress-value">100%</span>
                                    </div>
                                </div>
                                <div class="progress-bar-item">
                                    <h4 class="h4-title">Value for Money</h4>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar4"></div>
                                        <span class="progress-value">100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExpenseReview;
