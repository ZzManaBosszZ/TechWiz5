import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Chart from "react-apexcharts";

function ExpenseReview() {
    const { id } = useParams();

    const [trip, setTrip] = useState({ expenses: [], budget: 0 });
    const [chartData, setChartData] = useState({ labels: [], series: [] });
    const [totalExpenses, setTotalExpense] = useState(0);
    const [remainingBudgets, setRemainingBudget] = useState(0);

    const loadData = useCallback(async () => {
        try {
            const tripDetailRequest = await api.get(url.TRIP.LIST_BY_ID.replace("{}", id), {
                headers: { Authorization: `Bearer ${getAccessToken()}` }
            });
            const tripData = tripDetailRequest.data.data;

            const expenses = tripData.expenses || [];
            const totalExpense = expenses.reduce((acc, expense) => acc + (expense.amountExpense || 0), 0);
            const remainingBudget = (tripData.budget || 0) - totalExpense;

            // Tính tổng chi phí và chuẩn bị dữ liệu cho biểu đồ
            const categoryTotals = expenses.reduce((acc, expense) => {
                const category = expense.expenseCategory || "Unknown";
                const amount = expense.amountExpense || 0;
                if (!acc[category]) {
                    acc[category] = 0;
                }
                acc[category] += amount;
                return acc;
            }, {});

            const labels = [...Object.keys(categoryTotals), 'Remaining Budget'];
            const series = [...Object.values(categoryTotals), remainingBudget].map(value => value || 0); // Đảm bảo không có giá trị undefined

            // // Kiểm tra dữ liệu trước khi cập nhật trạng thái
            // console.log('Labels:', labels);
            // console.log('Series:', series);
            // console.log('Total Expense:', totalExpense);
            // console.log('Remaining Budget:', remainingBudget);
            // console.log('Expenses:', expenses);
            // console.log('Trip:', tripData);
            // console.log('Category Totals:', categoryTotals);

            setChartData({ labels, series });
            setTrip(tripData);
            setTotalExpense(totalExpense);
            setRemainingBudget(remainingBudget);

        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const chartOptions = {
        chart: {
            type: 'donut',
        },
        labels: chartData.labels || [],
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
        }],
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: "Total Expense",
                            formatter: () => {
                                const total = totalExpenses || 0; // Đảm bảo giá trị không phải là undefined
                                return `$${total.toFixed(2)}`; // Sử dụng toFixed để định dạng số
                            }
                        }
                    }
                }
            }
        },
        tooltip: {
            y: {
                formatter: (value) => `$${(value || 0).toFixed(2)}` // Sử dụng toFixed để định dạng số
            }
        },
    };

    return (
        <>
            <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                <div className="tab-box review-tab-box">
                    <h2 className="h2-title">Tour Review Expense</h2>
                    <p>This tab summarizes trip expenses, covering major costs like flights, accommodation, and meals, as well as any extra fees.</p>

                    {/* Chart */}
                    <div className="chart-wrapper" style={{ marginTop: "30px", marginBottom: "30px" }}>
                        <Chart
                            options={chartOptions}
                            series={chartData.series}
                            type="donut"
                            width="100%"
                            height={320}
                        />
                    </div>

                    {/* Existing content */}
                    <div className="review-breakdown">
                        <div className="rb-left-side">
                            <div className="rb-avarage-rating">
                                <h2 className="h2-title"><span>10.0</span></h2>
                            </div>
                            <div className="rb-avarage-verbal-desc">
                                <i className="fas fa-smile"></i> Superb
                            </div>
                        </div>
                        <div className="rb-right-side">
                            <div className="rb-progress-bar">
                                <div className="progress-bar-item">
                                    <h4 className="h4-title">Accomodation</h4>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar1"></div>
                                        <span className="progress-value">100%</span>
                                    </div>
                                </div>
                                <div className="progress-bar-item">
                                    <h4 className="h4-title">Destination</h4>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar2"></div>
                                        <span className="progress-value">100%</span>
                                    </div>
                                </div>
                                <div className="progress-bar-item">
                                    <h4 className="h4-title">Meals</h4>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar3"></div>
                                        <span className="progress-value">100%</span>
                                    </div>
                                </div>
                                <div className="progress-bar-item">
                                    <h4 className="h4-title">Transport</h4>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar4"></div>
                                        <span className="progress-value">100%</span>
                                    </div>
                                </div>
                                <div className="progress-bar-item">
                                    <h4 className="h4-title">Overall</h4>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar4"></div>
                                        <span className="progress-value">100%</span>
                                    </div>
                                </div>
                                <div className="progress-bar-item">
                                    <h4 className="h4-title">Value for Money</h4>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar4"></div>
                                        <span className="progress-value">100%</span>
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
