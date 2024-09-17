import config from "../../config";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, path }) =>  {
    return (
        <div className="content-header">
			<div className="d-flex align-items-center">
				<div className="mr-auto">
					<h3 className="page-title">{title}</h3>
					<div className="d-inline-block align-items-center">
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to={path}><i className="icon-Home"></i></Link></li>
								<li className="breadcrumb-item" aria-current="page"> <Link to={path}>Home</Link></li>
								<li className="breadcrumb-item active" aria-current="page">{title}</li>
							</ol>
						</nav>
					</div>
				</div>				
			</div>
		</div>
    );
}

BreadCrumb.defaultProps = {
    path: config.routes.home,
};
export default BreadCrumb;

{/* <div className="main-banner-bottom-form">
                    <div className="sec-wp">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="banner-form">
                                        <form>
                                            <div className="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                                <span className="form-control-span where-wrap">
                                                    <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                                                    <input type="text" className="form-input" placeholder="Where To?" />
                                                </span>
                                            </div>
                                            <div className="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.3s">
                                                <span className="form-control-span when-wrap">
                                                    <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                                                    <select className="form-input">
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
                                                    <span className="arrow"><i className="fas fa-caret-down"></i></span>
                                                </span>
                                            </div>
                                            <div className="input-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.4s">
                                                <span className="form-control-span travel-wrap">
                                                    <span className="icon"><i className="fas fa-flag"></i></span>
                                                    <select className="form-input">
                                                        <option>Travel Type</option>
                                                        <option>Cultural</option>
                                                        <option>Adventure</option>
                                                        <option>Historical</option>
                                                        <option>Seaside</option>
                                                        <option>Discovery</option>
                                                    </select>
                                                    <span className="arrow"><i className="fas fa-caret-down"></i></span>
                                                </span>
                                            </div>
                                            <div className="input-col button-col wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.5s">
                                                <span className="form-control-span button-wrap">
                                                    <button className="sec-btn"><span>Find Now</span></button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}