function ExpenseReview() {
    return (
        <>
            <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                <div class="tab-box review-tab-box">
                    <h2 class="h2-title">Tour Review Expense</h2>
                    <p>This tab summarizes trip expenses, covering major costs like flights, accommodation, and meals, as well as any extra fees. It helps users compare actual spending to the budget and evaluate cost-effectiveness for future trips. This section may also include feedback on service quality relative to the expenses.</p>
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