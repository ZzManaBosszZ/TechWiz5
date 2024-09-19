function TripPlan() {
    return (
        <>
            <div class="tab-pane fade" id="tour-plan" role="tabpanel" aria-labelledby="tour-plan-tab">
                <div class="tab-box tour-plan-tab-box">
                    <div class="tour-timeline-box">
                        <div class="tt-box-number">1</div>
                        <div class="tt-box-content">
                            <h3 class="h3-title">Day 1: <span>Departure</span></h3>
                            <div class="tour-timetable-schedule mt-40 mb-40">
                                <ul>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Destination</h4>
                                        </div>
                                        <div class="tts-description">
                                            <a href="#">Greece</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Departure</h4>
                                        </div>
                                        <div class="tts-description">
                                            Lorem Ipsum
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Departure Time</h4>
                                        </div>
                                        <div class="tts-description">
                                            9:15 AM To 9:30 AM.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Return Time</h4>
                                        </div>
                                        <div class="tts-description">
                                            Approximately 10:30 PM.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Dress Code</h4>
                                        </div>
                                        <div class="tts-description">
                                            comfortable clothing and light jacket.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Price Included</h4>
                                        </div>
                                        <div class="tts-description">
                                            <ul class="included">
                                                <li><i class="fas fa-check"></i>5 Star Accommodation</li>
                                                <li><i class="fas fa-check"></i>Air fases</li>
                                                <li><i class="fas fa-check"></i>3 Nights Hotel Accomodation</li>
                                                <li><i class="fas fa-check"></i>All transportation in destination location</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tts-label">
                                            <h4 class="h4-title">Price Not Included</h4>
                                        </div>
                                        <div class="tts-description">
                                            <ul class="not-included">
                                                <li><i class="fas fa-times"></i>Guide Service Fee</li>
                                                <li><i class="fas fa-times"></i>Any Private Expenses</li>
                                                <li><i class="fas fa-times"></i>Room Service Fees</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TripPlan;