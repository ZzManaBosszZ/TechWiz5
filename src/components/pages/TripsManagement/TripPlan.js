import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
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
    FaSearch,
    FaMoneyBillWave
} from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";

function TripPlan() {

    const { id } = useParams();

    const [trip, setTrip] = useState({ expenses: [], categories: [] });

    const loadData = useCallback(async () => {
        try {
            const tripDetailRequest = await api.get(url.TRIP.LIST_BY_ID.replace("{}", id), { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            setTrip(tripDetailRequest.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);
    const [showModal, setShowModal] = useState(false);

    // const handleOpenModal = () => setShowModal(true);
    // const handleCloseModal = () => setShowModal(false);



    const [itineraryItems, setItineraryItems] = useState([
        { id: "1", date: "2023-06-01", time: "09:00", activity: "Departure", location: "Airport", type: "transportation", notes: "Check-in 2 hours before flight", expense: 150 },
        { id: "2", date: "2023-06-01", time: "14:00", activity: "Hotel Check-in", location: "Seaside Resort", type: "accommodation", notes: "Room 301", expense: 200 },
        { id: "3", date: "2023-06-01", time: "18:00", activity: "Dinner", location: "Beachfront Restaurant", type: "meal", notes: "Reservation under Smith", expense: 80 },
        { id: "4", date: "2023-06-02", time: "10:00", activity: "City Tour", location: "Downtown", type: "sightseeing", notes: "Meet guide at hotel lobby", expense: 50 },
        { id: "5", date: "2023-06-02", time: "15:00", activity: "Museum Visit", location: "National Museum", type: "sightseeing", notes: "Audio guide available", expense: 25 },
    ]);

    const [filteredItems, setFilteredItems] = useState(itineraryItems);
    // const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortBy, setSortBy] = useState("date");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newExpense, setNewExpense] = useState({ activity: "", amount: 0 });

    // useEffect(() => {
    //     let result = [...itineraryItems];

    //     if (searchTerm) {
    //         result = result.filter(
    //             (item) =>
    //                 item.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //                 item.location.toLowerCase().includes(searchTerm.toLowerCase())
    //         );
    //     }

    //     if (filterType !== "all") {
    //         result = result.filter((item) => item.type === filterType);
    //     }

    //     result.sort((a, b) => {
    //         if (sortBy === "date") {
    //             return new Date(a.date + " " + a.time) - new Date(b.date + " " + b.time);
    //         } else {
    //             return a.activity.localeCompare(b.activity);
    //         }
    //     });

    //     setFilteredItems(result);
    // }, [itineraryItems, searchTerm, filterType, sortBy]);

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
            case "transportation":
                return <FaPlane className="text-primary" />;
            case "accommodation":
                return <FaBed className="text-success" />;
            case "meal":
                return <FaUtensils className="text-warning" />;
            case "sightseeing":
                return <FaCamera className="text-purple" />;
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

    // const handleCreateExpense = () => {
    //     if (newExpense.activity && newExpense.amount > 0) {
    //         const newItem = {
    //             id: String(itineraryItems.length + 1),
    //             date: new Date().toISOString().split("T")[0],
    //             time: new Date().toTimeString().split(" ")[0].slice(0, 5),
    //             activity: newExpense.activity,
    //             location: "Expense",
    //             type: "expense",
    //             notes: "",
    //             expense: parseFloat(newExpense.amount),
    //         };
    //         setItineraryItems([...itineraryItems, newItem]);
    //         handleCloseModal();
    //     }
    // };

    console.log('filteredItems', filteredItems); // Log before rendering the filteredItems


    return (
        <div className="tab-pane fade" id="tour-plan" role="tabpanel" aria-labelledby="tour-plan-tab">
            <div className="tab-box tour-plan-tab-box">
                <div className="rb-comment-form"></div>
                <div className="container my-5">
                    <h1 className="display-4 text-center mb-4">Trip Itinerary</h1>
                    <div className="mb-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
                        {/* <div className="mb-3 mb-md-0 w-100 w-md-50">
                            <div className="input-group">
                                <span className="input-group-text" id="search-icon">
                                    <FaSearch />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search activities or locations"
                                    aria-label="Search"
                                    aria-describedby="search-icon"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div> */}
                        <div className="d-flex flex-wrap gap-2">
                            <select
                                className="form-select"
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
                                className="form-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="date">Sort by Date</option>
                                <option value="activity">Sort by Activity</option>
                            </select>
                            <Button variant="primary" onClick={handleOpenModal} className="d-flex align-items-center">
                                <FaMoneyBillWave className="me-2" /> Create Expense
                            </Button>
                        </div>
                    </div>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="itinerary">
                            {(provided) => (
                                <ul
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="list-group"
                                >
                                    {filteredItems.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <li
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-2"
                                                >
                                                    <div className="d-flex align-items-center mb-2 mb-md-0">
                                                        <div className="me-3" style={{ fontSize: '1.5rem' }}>
                                                            {item.type === "expense" ? <FaMoneyBillWave className="text-success" /> : getIcon(item.type)}
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-1">{item.activity}</h5>
                                                            <small className="text-muted">{item.location}</small>
                                                        </div>
                                                    </div>
                                                    <div className="text-md-end">
                                                        <p className="mb-1"><strong>{new Date(item.date).toLocaleDateString()}</strong></p>
                                                        <p className="mb-1 text-muted">{item.time}</p>
                                                        {item.expense > 0 && (
                                                            <p className="mb-0 text-success fw-semibold">${item.expense.toFixed(2)}</p>
                                                        )}
                                                    </div>
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>

                    <Modal show={isModalOpen} onHide={handleCloseModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Create Expense</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="expenseActivity" className="mb-3">
                                    <Form.Label>Activity</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter activity"
                                        value={newExpense.activity}
                                        onChange={(e) => setNewExpense({ ...newExpense, activity: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="expenseAmount" className="mb-3">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter amount"
                                        value={newExpense.amount}
                                        onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button variant="primary" >
                                Create
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>

    );
}

export default TripPlan;