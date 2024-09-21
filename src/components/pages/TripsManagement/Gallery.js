import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap"; // React Bootstrap components
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import { toast } from "react-toastify";

function Gallery() {

    const { id } = useParams();
    const [tripDetail, setTripDetail] = useState({ photos: [] });
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Load trip details (including photos)
    const loadData = useCallback(async () => {
        try {
            const tripDetailRequest = await api.get(url.TRIP.LIST_BY_ID.replace("{}", id), {
                headers: { Authorization: `Bearer ${getAccessToken()}` }
            });
            setTripDetail(tripDetailRequest.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    // Handle file selection (multiple files)
    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files)); // Store all selected files
    };

    // Handle file upload for multiple files
    const handleUpload = async () => {
        if (selectedFiles.length === 0) {
            alert("Please select files first!");
            return;
        }

        try {
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append("image", file); // Append multiple files
            });
            formData.append("tripid", id); // Send trip ID with the files

            const uploadResponse = await api.post(url.PHOTO.CREATE, formData, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                    "Content-Type": "multipart/form-data"
                }
            });

            // Refresh the gallery after successful upload
            toast.success("Photos uploaded successfully!");
            loadData();
            setSelectedFiles([]); // Clear selected files
            setShowModal(false); // Close modal
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    // Handle modal visibility
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
            <div className="tab-box gallery-tab-box">
                <h2 className="h2-title">Make Your <span>Own Memories</span></h2>
                
                {/* Upload Button */}
                <Button variant="primary" onClick={handleShowModal}>
                    Upload Photos
                </Button>

                {/* Modal for Upload */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Photos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="file" multiple onChange={handleFileChange} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpload}>
                            Upload
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Gallery */}
                <div className="memories-gallery">
                    {tripDetail.photos.length === 0 ? (
                        <p>No photos yet. Be the first to upload!</p>
                    ) : (
                        <div className="row">
                            {tripDetail.photos.map((photo, index) => (
                                <div key={index} className={`col-lg-${index % 2 === 0 ? 7 : 5}`}>
                                    <div className="memories-gallery-image back-image"
                                        data-fancybox
                                        data-src={photo.fileUrl}
                                        style={{ backgroundImage: `url(${photo.fileUrl})` }}>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
