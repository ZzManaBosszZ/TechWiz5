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
    const [categoryProgress, setCategoryProgress] = useState({
        Accommodation: 0,
        Food: 0,
        Transport: 0,
        Miscellaneous: 0, // Thêm danh mục linh tinh
        overall: 0,
    });
    const [loading, setLoading] = useState(true);

    const loadData = useCallback(async () => {
        setLoading(true);
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
                const category = expense.expenseCategory || "Miscellaneous"; // Các chi phí không xác định được sẽ là linh tinh
                const amount = expense.amountExpense || 0;
                if (!acc[category]) {
                    acc[category] = 0;
                }
                acc[category] += amount;
                return acc;
            }, {});

            const labels = [...Object.keys(categoryTotals), 'Remaining Budget'];
            const series = [...Object.values(categoryTotals), remainingBudget].map(value => value || 0);

            setChartData({ labels, series });
            setTrip(tripData);
            setTotalExpense(totalExpense);
            setRemainingBudget(remainingBudget);

            // Tính toán tỷ lệ phần trăm cho từng danh mục
            const totalBudget = tripData.budget || 0;
            setCategoryProgress({
                Accommodation: ((categoryTotals.Accommodation || 0) / totalBudget) * 100,
                Food: ((categoryTotals.Food || 0) / totalBudget) * 100,
                Transport: ((categoryTotals.Transport || 0) / totalBudget) * 100,
                Miscellaneous: ((categoryTotals.Miscellaneous || 0) / totalBudget) * 100, // Tính toán cho danh mục linh tinh
                overall: (totalExpense / totalBudget) * 100,
            });

        } catch (error) {
            console.log("Error loading data:", error);
        } finally {
            setLoading(false);
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
                            formatter: () => `$${totalExpenses.toFixed(2)}`,
                        }
                    }
                }
            }
        },
        tooltip: {
            y: {
                formatter: (value) => `$${(value || 0).toFixed(2)}`
            }
        },
    };

    // Xác định nội dung cho phần mặt cười
    const isHappy = categoryProgress.overall <= 80;

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                    <div className="tab-box review-tab-box">
                        <h2 className="h2-title">Tour Review Expense</h2>
                        <p>This tab summarizes trip expenses, covering major costs like flights, accommodation, and meals, as well as any extra fees.</p>

                        {/* Chart */}
                        <div className="chart-wrapper" style={{ marginTop: "30px", marginBottom: "30px" }}>
                            <Chart
                                width={"100%"}
                                height={320}
                                options={chartOptions}
                                series={chartData.series}
                                type="donut"
                            />
                        </div>

                        {/* Progress Bars */}
                        <div className="review-breakdown">
                            <div className="rb-left-side">
                                <div className="rb-avarage-rating">
                                    <h2 className="h2-title"><span>{(categoryProgress.overall).toFixed(2)}%</span></h2>
                                </div>
                                <div className="rb-avarage-verbal-desc">
                                    <i className={isHappy ? "fas fa-smile" : "fas fa-frown"}></i>
                                    {isHappy ? "Superb" : "The Budget is about to run out"}
                                </div>
                            </div>
                            <div className="rb-right-side">
                                <div className="rb-progress-bar">
                                    {['Accommodation', 'Food', 'Transport', 'Miscellaneous'].map((category) => (
                                        <div className="progress-bar-item" key={category}>
                                            <h4 className="h4-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: `${categoryProgress[category]}%` }}></div>
                                                <span className="progress-value">{categoryProgress[category].toFixed(2)}%</span>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="progress-bar-item">
                                        <h4 className="h4-title">Overall</h4>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: `${categoryProgress.overall}%` }}></div>
                                            <span className="progress-value">{categoryProgress.overall.toFixed(2)}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ExpenseReview;
