import Layout from "../../layouts";

function TripCreate() {
    return (
        <Layout>
            <section class="main-banner">
                <div class="banner-slider">
                    <div class="banner-slide-box overlay back-image">
                        <div class="sec-wp">
                        <div class="main-banner-bottom-form">
                <div class="sec-wp">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="banner-form">
                                    <form>
                                        <div class="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                            <span class="form-control-span where-wrap">
                                                <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                                                <input type="text" class="form-input" placeholder="Where To?"/>
                                            </span>
                                        </div>
                                        <div class="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.3s">
                                            <span class="form-control-span when-wrap">
                                                <span class="icon"><i class="fas fa-calendar-alt"></i></span>
                                                <select class="form-input">
                                                    <option>When?</option>
                                                    <option>January</option>
                                                    <option>February</option>
                                                    <option>March</option>
                                                    <option>April</option>
                                                    <option>May</option>
                                                    <option>June</option>
                                                    <option>July</option>
                                                    <option>August</option>
                                                    <option>September</option>
                                                    <option>October</option>
                                                    <option>November</option>
                                                    <option>December</option>
                                                </select>
                                                <span class="arrow"><i class="fas fa-caret-down"></i></span>
                                            </span>
                                        </div>
                                        <div class="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.4s">
                                            <span class="form-control-span travel-wrap">
                                                <span class="icon"><i class="fas fa-flag"></i></span>
                                                <select class="form-input">
                                                    <option>Travel Type</option>
                                                    <option>Cultural</option>
                                                    <option>Adventure</option>
                                                    <option>Historical</option>
                                                    <option>Seaside</option>
                                                    <option>Discovery</option>
                                                </select>
                                                <span class="arrow"><i class="fas fa-caret-down"></i></span>
                                            </span>
                                        </div>
                                        <div class="input-col button-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <span class="form-control-span button-wrap">
                                                <button class="sec-btn"><span>Find Now</span></button>
                                            </span>
                                        </div>
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