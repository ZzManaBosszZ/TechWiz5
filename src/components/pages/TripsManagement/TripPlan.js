import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  FaPlane,
  FaUtensils,
  FaCamera,
  FaBed,
  FaCar,
  FaMoneyBillWave,
} from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";

function TripPlan() {
  const { id } = useParams();

  const [trip, setTrip] = useState({ expenses: [], categories: [] });
  const [newExpense, setNewExpense] = useState({ activity: "", amount: 0 });

  const [itineraryItems, setItineraryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

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

  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);



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

  const handleSaveEdit = () => {
    if (!editItem.activity) {
      alert("Activity cannot be empty.");
      return;
    }
    if (editItem.expense <= 0) {
      alert("Expense must be greater than 0.");
      return;
    }
    const updatedItems = itineraryItems.map((item) =>
      item.id === editItem.id ? { ...item, ...editItem } : item
    );
    setItineraryItems(updatedItems);
    setFilteredItems(updatedItems);
    handleCloseEditModal();
  };

  const handleDeleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedItems = itineraryItems.filter((item) => item.id !== id);
      setItineraryItems(updatedItems);
      setFilteredItems(updatedItems);
      handleCloseDetailModal();
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(filteredItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFilteredItems(items);
    setItineraryItems(items);
  };

  const getIcon = (type) => {
    switch (type) {
      case "Transport":
        return <FaPlane className="text-primary" />;
      case "accommodation":
        return <FaBed className="text-success" />;
      case "Food":
        return <FaUtensils className="text-warning" />;
      case "sightseeing":
        return <FaCamera style={{ color: "#6f42c1" }} />;
      default:
        return <FaCar className="text-secondary" />;
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

  // Hàm tạo expense mới
  const handleCreateExpense = () => {
    if (!newExpense.activity) {
      alert("Activity cannot be empty.");
      return;
    }
    if (newExpense.amount <= 0) {
      alert("Amount must be greater than 0.");
      return;
    }
    const newItem = {
      id: String(itineraryItems.length + 1),
      date: new Date().toISOString().split("T")[0],
      time: new Date().toTimeString().split(" ")[0].slice(0, 5),
      activity: newExpense.activity,
      location: "Expense",
      type: "expense",
      notes: "",
      expense: parseFloat(newExpense.amount),
    };
    const updatedItinerary = [...itineraryItems, newItem];
    setItineraryItems(updatedItinerary);
    setFilteredItems(updatedItinerary);
    handleCloseModal();
  };

  console.log("filteredItems", filteredItems);

  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const handleNextDay = () => {
    if (currentDayIndex < groupedDays.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
  };

  const handlePreviousDay = () => {
    if (currentDayIndex > 0) {
      setCurrentDayIndex(currentDayIndex - 1);
    }
  };

  return (
    <div
      className="tab-pane fade"
      id="tour-plan"
      role="tabpanel"
      aria-labelledby="tour-plan-tab"
    >
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
                style={{ borderRadius: "5px", margin: "0 15px 10px", height: "3.2rem" }}
                className="form-select text-center"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="activity">Sort by Activity</option>
              </select>
              <button
                className={`sec-btn ${trip.categories.length === 0 ? "" : ""
                  }`}
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
              <h2>{groupedDays[currentDayIndex].day}</h2>
              <Button
                variant="primary"
                onClick={handleNextDay}
                disabled={currentDayIndex === groupedDays.length - 1}
              >
                Next
              </Button>
            </div>
          )}

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="itinerary">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {groupedDays.length > 0 && (
                    <div className="mb-5">
                      <h2 className="mb-3">
                        {groupedDays[currentDayIndex].day} ({groupedDays[currentDayIndex].date})
                      </h2>
                      <ul className="list-group">
                        {groupedDays[currentDayIndex].items.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-2"
                                onClick={() => handleOpenDetailModal(item)}
                                style={{ cursor: "pointer", position: "relative" }}
                              >
                                <div className="d-flex align-items-center mb-2 mb-md-0">
                                  <div
                                    className="me-3"
                                    style={{ fontSize: "1.5rem", marginRight: "10px" }}
                                  >
                                    {/* Check if it's an expense and use FaMoneyBillWave or use getIcon with expenseCategory */}
                                    {item.type === "expense" ? (
                                      <FaMoneyBillWave className="text-success" />
                                    ) : (
                                      getIcon(item.expenseCategory) // Use expenseCategory from API data
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
                                        ${item.amountExpense.toFixed(2)}
                                      </p>
                                    )}
                                  </div>
                                  {/* Edit and Delete Buttons */}
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
                            )}
                          </Draggable>
                        ))}
                      </ul>
                    </div>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          {/* Detail Modal */}
          <Modal show={detailModalOpen} onHide={handleCloseDetailModal}>
            <Modal.Header closeButton>
              <Modal.Title>Itinerary Details</Modal.Title>
            </Modal.Header>
            {selectedItem && (
              <Modal.Body>
                <p><strong>Activity:</strong> {selectedItem.activity}</p>
                <p><strong>Location:</strong> {selectedItem.location}</p>
                <p><strong>Date:</strong> {new Date(selectedItem.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {selectedItem.time}</p>
                <p><strong>Type:</strong> {selectedItem.type}</p>
                <p><strong>Notes:</strong> {selectedItem.notes}</p>
                <p><strong>Expense:</strong> ${selectedItem.amountExpense.toFixed(2)}</p>
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
                  <Form.Group className="mb-3" controlId="formActivity">
                    <Form.Label>Activity</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter activity"
                      value={editItem.activity}
                      onChange={(e) =>
                        setEditItem({ ...editItem, activity: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter location"
                      value={editItem.location}
                      onChange={(e) =>
                        setEditItem({ ...editItem, location: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={editItem.date}
                      onChange={(e) =>
                        setEditItem({ ...editItem, date: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      type="time"
                      value={editItem.time}
                      onChange={(e) =>
                        setEditItem({ ...editItem, time: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      value={editItem.type}
                      onChange={(e) =>
                        setEditItem({ ...editItem, type: e.target.value })
                      }
                    >
                      <option value="transportation">Transportation</option>
                      <option value="accommodation">Accommodation</option>
                      <option value="meal">Meal</option>
                      <option value="sightseeing">Sightseeing</option>
                      <option value="expense">Expense</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formNotes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter notes"
                      value={editItem.notes}
                      onChange={(e) =>
                        setEditItem({ ...editItem, notes: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formExpense">
                    <Form.Label>Expense</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter expense"
                      value={editItem.expense}
                      onChange={(e) =>
                        setEditItem({ ...editItem, expense: parseFloat(e.target.value) })
                      }
                      min="0"
                      step="0.01"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
            )}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSaveEdit}>
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
                <Form.Group className="mb-3" controlId="formNewActivity">
                  <Form.Label>Activity</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter activity"
                    value={newExpense.activity}
                    onChange={(e) =>
                      setNewExpense({ ...newExpense, activity: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNewAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={newExpense.amount}
                    onChange={(e) =>
                      setNewExpense({ ...newExpense, amount: e.target.value })
                    }
                    min="0"
                    step="0.01"
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
