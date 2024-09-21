import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import {
  FaPlane,
  FaUtensils,
  FaCamera,
  FaBed,
  FaCar,
  FaMoneyBillWave,
} from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function TripPlan() {
  const { id } = useParams();

  const [trip, setTrip] = useState({ expenses: [], categories: [] });
  const [newExpense, setNewExpense] = useState({});
  const [filterType, setFilterType] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);


  const [itineraryItems, setItineraryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const exchangeRates = { USD: 1, EUR: 0.85, VND: 23000 }; // Example rates

  const [currency, setCurrency] = useState('USD');
  const predefinedCategories = ["Transport", "Accommodation", "Meal", "Sightseeing", "Miscellaneous"];

  // const fetchExchangeRates = async () => {
  //   try {
  //     const response = await api.get('https://v6.exchangerate-api.com/v6/e66fc655a318d26723c9988a/latest/USD'); // Thay URL_API_TY_GIA_HOI_DOAI bằng URL thực tế
  //     const rates = response.data.data; // Tùy thuộc vào cấu trúc dữ liệu trả về
  //     setExchangeRates(rates);
  //   } catch (error) {
  //     console.error("Error fetching exchange rates:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchExchangeRates();
  // }, []);

  const convertCurrency = (amount, currency) => {
    const rate = exchangeRates[currency] || 1;
    return amount * rate;
  };

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    setCurrency(selectedCurrency);
    // Optionally, update filteredItems to reflect the change in amounts
    const updatedItems = itineraryItems.map(item => ({
      ...item,
      amountExpense: convertCurrency(item.amountExpense, selectedCurrency) // convert amount to selected currency
    }));
    setFilteredItems(updatedItems);
  };

  const loadTrip = useCallback(async () => {
    try {
      const tripDetailRequest = await api.get(url.TRIP.LIST_BY_ID.replace("{}", id), { headers: { Authorization: `Bearer ${getAccessToken()}` } });
      const tripData = tripDetailRequest.data.data;

      // Cập nhật itineraryItems từ dữ liệu API
      setItineraryItems(tripData.expenses || []);
      setFilteredItems(tripData.expenses || []);
      setTrip(tripData);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    loadTrip();
  }, [loadTrip]);

  const handleCreateExpense = async () => {
    try {
      const response = await api.post(
        url.EXPENSE.CREATE,  // Thay URL này với URL tạo expense của bạn
        {
          tripId: id, // Lấy tripId hiện tại từ useParams
          expenses: [
            {
              tripId: id, // ID chuyến đi
              expenseCategory: newExpense.expenseCategory,
              note: newExpense.note,
              amountExpense: newExpense.amountExpense,
              date: newExpense.date, // Nếu bạn đã có trường date
            },
          ],
        },
        {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        }
      );

      const createdExpenses = response.data.data; // Giả sử API trả về dữ liệu như vậy
      // Cập nhật lại danh sách expense với expenses vừa tạo
      setItineraryItems((prevItems) => [...prevItems, ...createdExpenses]);
      setFilteredItems((prevItems) => [...prevItems, ...createdExpenses]);

      toast.success("Expense created successfully!");
      handleCloseModal();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create expense. Please try again.");
    }
  };

  const handleEditExpense = async () => {
    try {
      const response = await api.put(
        url.EXPENSE.PUT,  // Thay URL này với URL cập nhật expense của bạn
        {
          id: editItem.id, // ID của expense cần cập nhật
          tripId: id, // ID chuyến đi
          expenseCategory: editItem.expenseCategory,
          note: editItem.note,
          amountExpense: editItem.amountExpense,
          date: editItem.date, // Ngày tháng đã chỉnh sửa
        },
        {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        }
      );

      const updatedExpense = response.data.data; // Giả sử API trả về dữ liệu đã cập nhật
      // Cập nhật danh sách expenses với expense đã chỉnh sửa
      setItineraryItems((prevItems) =>
        prevItems.map((item) => (item.id === updatedExpense.id ? updatedExpense : item))
      );
      setFilteredItems((prevItems) =>
        prevItems.map((item) => (item.id === updatedExpense.id ? updatedExpense : item))
      );

      toast.success("Expense updated successfully!");
      handleCloseEditModal();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update expense. Please try again.");
    }
  };


  const handleOpenDetailModal = (item) => {
    setSelectedItem(item);
    setDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedItem(null);
    setDetailModalOpen(false);
  };

  const handleOpenEditModal = (item) => {
    setEditItem(item);
    setDetailModalOpen(false);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditItem(null);
    setEditModalOpen(false);
    if (selectedItem) {
      setDetailModalOpen(true);
    }
  };

  const handleDeleteItem = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`${url.EXPENSE.DELETE}`, {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
          data: [id],
        });
        const updatedItems = itineraryItems.filter((item) => item.id !== id);
        setItineraryItems(updatedItems);
        setFilteredItems(updatedItems);
        toast.success("Item deleted successfully!");
        handleCloseDetailModal();
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete item. Please try again.");
      }
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "Transport":
        return <FaPlane className="text-primary" />;
      case "Accommodation":
        return <FaBed className="text-success" />;
      case "Food":
        return <FaUtensils className="text-warning" />;
      case "Sightseeing":
        return <FaCamera style={{ color: "#6f42c1" }} />;
      default:
        return <FaMoneyBillWave className="text-secondary" />;
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewExpense({ activity: "", amount: 0 });
  };

  const sortedItems = useMemo(() => {
    return [...itineraryItems].sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateA - dateB;
    });
  }, [itineraryItems]);

  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const groupedDays = useMemo(() => {
    const groupedItems = sortedItems.reduce((groups, item) => {
      const date = new Date(item.date).toLocaleDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(item);
      return groups;
    }, {});

    return Object.keys(groupedItems).map((date, index) => ({
      day: `Day ${index + 1}`,
      date,
      items: groupedItems[date],
    }));
  }, [sortedItems]);

  const handlePreviousDay = () => {
    setCurrentDayIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextDay = () => {
    setCurrentDayIndex((prevIndex) => Math.min(prevIndex + 1, groupedDays.length - 1));
  };

  return (
    <div
      className="tab-pane fade"
      id="tour-plan"
      role="tabpanel"
      aria-labelledby="tour-plan-tab"
    >
      <ToastContainer />
      <div className="tab-box tour-plan-tab-box">
        <div className="rb-comment-form"></div>
        <h1 className="display-4 text-center mb-4">Trip Itinerary</h1>
        <div className="container my-5">
          <div className="mb-4 d-flex flex-column flex-md-row justify-content-around align-items-center">
            <div className="d-flex flex-wrap gap-2">
              <select
                style={{ borderRadius: "5px", margin: "0 15px 10px" }}
                className="form-select text-center"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="transportation">Transportation</option>
                <option value="accommodation">Accommodation</option>
                <option value="meal">Meal</option>
                <option value="sightseeing">Sightseeing</option>
                <option value="expense">Expense</option>
              </select>
              <select
                style={{ borderRadius: "5px", margin: "0 15px 15px 0" }}
                value={currency}
                onChange={handleCurrencyChange}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="VND">VND</option>
              </select>

              <button
                className={`sec-btn ${trip.categories.length === 0 ? "" : ""}`}
                onClick={handleOpenModal}
              >
                <span>Create Expense</span>
              </button>
            </div>
          </div>

          {groupedDays.length > 0 && (
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <Button
                variant="primary"
                onClick={handlePreviousDay}
                disabled={currentDayIndex === 0}
              >
                Previous
              </Button>
              <Button
                variant="primary"
                onClick={handleNextDay}
                disabled={currentDayIndex === groupedDays.length - 1}
              >
                Next
              </Button>
            </div>
          )}

          {groupedDays.length === 0 && <h2>No days available</h2>}
          {groupedDays.length > 0 && currentDayIndex < groupedDays.length && (
            <div className="mb-5">
              <h2 className="mb-3">
                {groupedDays[currentDayIndex].day} ({groupedDays[currentDayIndex].date})
              </h2>
              <ul className="list-group">
                {groupedDays[currentDayIndex].items.map((item, index) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-2"
                    onClick={() => handleOpenDetailModal(item)}
                    style={{ cursor: "pointer", position: "relative" }}
                  >
                    <div className="d-flex align-items-center mb-2 mb-md-0">
                      <div
                        className="me-3"
                        style={{ fontSize: "1.5rem", marginRight: "10px" }}
                      >
                        {item.type === "expense" ? (
                          <FaMoneyBillWave className="text-success" />
                        ) : (
                          getIcon(item.expenseCategory)
                        )}
                      </div>
                      <div>
                        <h5 className="mb-1">{item.expenseCategory}</h5>
                        <small className="text-muted">{item.location}</small>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ marginRight: "8rem" }}>
                        <p className="mb-1">
                          <strong>{new Date(item.date).toLocaleDateString()}</strong>
                        </p>
                        <p className="mb-1 text-muted">{item.time}</p>
                        {item.amountExpense > 0 && (
                          <p className="mb-0 text-success fw-semibold">
                            <span>{convertCurrency(item.amountExpense, currency).toFixed(2)} {currency}</span>
                          </p>
                        )}
                      </div>
                      <div style={{ height: "2.5rem" }} className="ms-auto d-flex gap-2">
                        <Button
                          style={{ marginRight: "1em" }}
                          variant="outline-primary"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenEditModal(item);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteItem(item.id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Detail Modal */}
          <Modal show={detailModalOpen} onHide={handleCloseDetailModal}>
            <Modal.Header closeButton>
              <Modal.Title>Expense Details</Modal.Title>
            </Modal.Header>
            {selectedItem && (
              <Modal.Body>
                {/* <p><strong>Activity:</strong> {selectedItem.expenseCategory || 'N/A'}</p> */}
                {/* <p><strong>Location:</strong> {trip.destination || 'N/A'}</p> */}
                <p><strong>Date:</strong> {new Date(selectedItem.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {new Date(selectedItem.date).toLocaleTimeString() || 'N/A'}</p>
                <p><strong>Notes:</strong> {selectedItem.note || 'N/A'}</p>
                <p><strong>Expense:</strong> {convertCurrency(selectedItem.amountExpense, currency).toFixed(2)} {currency}</p>
              </Modal.Body>
            )}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDetailModal}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => handleOpenEditModal(selectedItem)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDeleteItem(selectedItem.id)}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Edit Modal */}
          <Modal show={editModalOpen} onHide={handleCloseEditModal}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Itinerary Item</Modal.Title>
            </Modal.Header>
            {editItem && (
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formExpenseCategory">
                    <Form.Label>Expense Category</Form.Label>
                    <Form.Control
                      type="text"
                      name="expenseCategory"
                      placeholder="Enter expense category"
                      value={editItem.expenseCategory}
                      autoFocus
                      onChange={(e) =>
                        setEditItem((prev) => ({ ...prev, expenseCategory: e.target.value }))
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formNote">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="note"
                      rows={3}
                      placeholder="Enter note"
                      value={editItem.note}
                      onChange={(e) =>
                        setEditItem((prev) => ({ ...prev, note: e.target.value }))
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formAmountExpense">
                    <Form.Label>Expense Amount</Form.Label>
                    <Form.Control
                      type="number"
                      name="amountExpense"
                      placeholder="Enter expense amount"
                      value={editItem.amountExpense}
                      onChange={(e) =>
                        setEditItem((prev) => ({ ...prev, amountExpense: parseFloat(e.target.value) }))
                      }
                      min="0"
                      step="0.01"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={new Date(editItem.date).toISOString().split('T')[0]} // Định dạng ngày tháng
                      onChange={(e) =>
                        setEditItem((prev) => ({ ...prev, date: new Date(e.target.value) }))
                      }
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
            )}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleEditExpense}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Create Expense Modal */}
          <Modal show={isModalOpen} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Create New Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formNewExpenseCategory">
                  <Form.Label>Expense Category</Form.Label>
                  <Form.Control
                    as="select"
                    value={newExpense.expenseCategory || ""}
                    onChange={(e) => setNewExpense({ ...newExpense, expenseCategory: e.target.value })}
                  >
                    <option value="">Select a category</option>
                    {predefinedCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNewNote">
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter note"
                    value={newExpense.note}
                    onChange={(e) => setNewExpense({ ...newExpense, note: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNewAmountExpense">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={newExpense.amountExpense}
                    onChange={(e) => setNewExpense({ ...newExpense, amountExpense: e.target.value })}
                    min="0"
                    step="0.01"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNewDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={newExpense.date || ""}
                    onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleCreateExpense}>
                Add Expense
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default TripPlan;
