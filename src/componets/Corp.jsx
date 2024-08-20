import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

function Corp() {
  return (
    <div>
      <div className="container">
        <nav
          className="navbar navbar-expand-sm  fixed-top"
          style={{ backgroundColor: "white" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ marginLeft: 50 }}>
              <img src="https://www.corpdata.in/static/images/logo.png" alt />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="collapsibleNavbar"
              style={{ textAlign: "right" }}
            >
              <ul
                className="navbar-nav "
                style={{
                  fontFamily:
                    'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                  marginLeft: 650,
                }}
              >
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PRICING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
                <li>
                  <button type="button" className="btn btn-warning">
                    <Link to="/Signup">
                      <i className="fa fa-user" aria-hidden="true" />
                      <span className="padding_10" style={{ marginLeft: 10 }}>
                        Signup
                      </span>
                    </Link>
                  </button>
                  {/* <button
                  type="button"
                  className="btn btn-primary"
                  style={{ marginLeft: 10 }}
                >
                  LOGIN
                </button> */}

                  <Link to="/Login">
                    <i className="fa fa-user" aria-hidden="true" />
                    <span className="padding_10" style={{ marginLeft: 10 }}>
                      Login
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* home */}
      <div className="container-fluid">
        <div
          className="c1"
          style={{ backgroundColor: "rgb(44, 154, 238)", height: 500 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div
                  className="intro-message "
                  style={{ textAlign: "center", color: "white", marginTop: 80 }}
                >
                  <h1
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      
                      fontWeight: 700,
                      fontSize: 80,
                    }}
                  >
                    CorpData
                  </h1>
                  <hr className="intro-divider" />
                  <h3>API Infrastructure for Risk Assessment</h3>
                  <h3>
                    Trusted by more than 10,000+ users and 350+ financial
                    institutions
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product cards */}
      <div className="container " style={{ marginTop: "-80px" }}>
        <div
          className="row products-cards"
          style={{ justifyContent: "space-between" }}
        >
          <div
            className=" col-md-4 product-main bg-dark"
            style={{ color: "white", borderRadius: 30, maxWidth: 350 }}
          >
            <div className="panel panel-info">
              <div className="panel-heading clearfix">
                <div className="panel-body">
                  <h2 style={{ textAlign: "center" }}>MCA Download</h2>
                  <br />
                  <div
                    className="product-content"
                    style={{ fontWeight: 800, color: "rgb(143, 181, 224)" }}
                  >
                    <p>
                      CorpData eases user activity of downloading individual
                      documents from MCA and provides company information
                      organised in folders as per their categories.
                    </p>
                    <p>
                      Download data related to Financial Statements, Charge
                      details, Director details and other E-filings made by the
                      company on MCA Portal.
                    </p>
                    <br />
                    <h4>Why MCA Downloader ?</h4>
                    <ul>
                      <li>
                        Spend only 2 minutes to place order in CorpData instead
                        of 3-4 hours downloading on MCA.
                      </li>
                      <li>
                        Get complete document set, organized by categories with
                        proper filenames in the ZIP.
                      </li>
                      <li>
                        Real-time progress monitoring and notification of
                        completion.
                      </li>
                    </ul>
                    <div className="row action-buttons">
                      <div className="col-sm-12 col-md-6">
                        <a
                          href="#"
                          className="btn btn-info btn-block btn-md"
                          style={{ marginTop: 80 }}
                        >
                          <span>
                            <strong>PLACE ORDER</strong>
                          </span>
                        </a>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <a
                          href="#"
                          className="btn btn-primary btn-block btn-md"
                          style={{ marginTop: 80 }}
                        >
                          <span>
                            <strong>DASHBOARD</strong>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 product-main bg-dark"
            style={{ color: "white", borderRadius: 30, maxWidth: 350 }}
          >
            <div className="panel panel-info">
              <div className="panel-heading clearfix">
                <div className="panel-body">
                  <h2 style={{ textAlign: "center" }}>
                    XML (XBRL) <br />
                    Conversion
                  </h2>
                  <br />
                  <div
                    className="product-content"
                    style={{ fontWeight: 800, color: "rgb(143, 181, 224)" }}
                  >
                    <p>
                      Unique feature of converting multiple years financial
                      statement in XML format into one single Excel workbook.
                    </p>
                    <p>
                      The excel file will contain the comparative financial data
                      for the XMLs uploaded which will help the analyst for
                      simple visiblity and also save the data input time.
                    </p>
                    <br />
                    <h4>Why XML (XBRL) Converter ?</h4>
                    <ul>
                      <li>
                        Spend only 2 minutes to place order in CorpData instead
                        of 10-12 hours of manual data feeding.
                      </li>
                      <li>
                        Get complete financial details along with their
                        schedules in a single excel file.
                      </li>
                      <li>Notification on completion.</li>
                    </ul>
                    <div className="row action-buttons">
                      <div className="col-sm-12 col-md-6">
                        <a
                          href="/xbrl/upload"
                          className="btn btn-info btn-block btn-md"
                          style={{ marginTop: 90 }}
                        >
                          <span>
                            <strong>PLACE ORDER</strong>
                          </span>
                        </a>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <a
                          href="/xbrl"
                          className="btn btn-primary btn-block btn-md"
                          style={{ marginTop: 90 }}
                        >
                          <span>
                            <strong>DASHBOARD</strong>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 product-main bg-dark"
            style={{ color: "white", borderRadius: 30, maxWidth: 350 }}
          >
            <div className="panel panel-info">
              <div className="panel-heading clearfix">
                <div className="panel-body">
                  <h2 style={{ textAlign: "center" }}>CorpData API</h2>
                  <br />
                  <div
                    className="product-content"
                    style={{ fontWeight: 800, color: "rgb(143, 181, 224)" }}
                  >
                    <p>
                      API corpdata caters to all your data needs through API
                      calls making the data sourcing much more easier and
                      simpler.
                    </p>
                    <p>
                      The CorpData API would have APIs available for all your
                      data needs (MCA data, EPFO, GST, Litigation etc.) which
                      would require a one time system integration between your
                      system and CorpData API platform.
                    </p>
                    <br />
                    <h4>Why CorpData API?</h4>
                    <ul>
                      <li>24*7 customer support available</li>
                      <li>
                        One time quick &amp; easy integration for all your data
                        requirements
                      </li>
                      <li>All your data needs at one place</li>
                    </ul>
                    <div className="row action-buttons">
                      <div className="col-sm-12 col-md-12">
                        <a
                          href="#"
                          className="btn btn-primary btn-block btn-md"
                          style={{ marginTop: 175, marginLeft: 100 }}
                        >
                          <span>
                            <center>
                              {" "}
                              <strong>CONTACT US</strong>
                            </center>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new section */}
      <div className="content-section mt-5">
        <div className="container">
          <div className="row">
            <br />
            <br />
            <center>
              <h3 className="section-heading center">
                Always know what you'll pay
              </h3>
              <br />
            </center>
            <div
              className="panel panel-info col-sm-12 col-md-4 col-lg-4 pricing_block"
              style={{
                textAlign: "center",
                fontWeight: 700,
                boxShadow: "2px 5px #337ab8",
                border: "solid  #337ab8",
              }}
            >
              <h3 style={{ color: "#337ab8" }}>COMPANY</h3>
              <p>Download company filings</p>
              <p className="price" style={{ fontSize: 40 }}>
                ₹ 130
              </p>
              <small>(Exclusive of GST)</small>
              <p className="desc">PER COMPANY</p>
            </div>
            <div
              className="panel panel-info col-sm-12 col-md-4 col-lg-4 pricing_block"
              style={{
                textAlign: "center",
                fontWeight: 700,
                boxShadow: "2px 5px #337ab8",
                border: "solid  #337ab8",
              }}
            >
              <h3 style={{ color: "#5bc0de" }}>LLP</h3>
              <p>Download LLP filings</p>
              <p className="price" style={{ fontSize: 40 }}>
                ₹ 80
              </p>
              <small>(Exclusive of GST)</small>
              <p className="desc">PER LLP</p>
            </div>
            <div
              className="panel panel-info col-sm-12 col-md-4 col-lg-4 pricing_block"
              style={{
                textAlign: "center",
                fontWeight: 700,
                boxShadow: "2px 5px #337ab8",
                border: "solid  #337ab8",
              }}
            >
              <h3 style={{ color: "#223a46" }}>XML (XBRL)</h3>
              <p>Convert XML to Excel</p>
              <p className="price" style={{ fontSize: 40 }}>
                ₹ 40
              </p>
              <small>(Exclusive of GST)</small>
              <p className="desc">PER XML/YEAR</p>
            </div>
          </div>
        </div>
      </div>
      {/* new section */}
      <div className="content-section-b mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <h2 className="section-heading">FAQs</h2>
              <dl>
                <dt>
                  <i className="glyphicon glyphicon-question-sign" />
                  What does the ZIP file contain?
                </dt>
                <dd>
                  The ZIP file contains the PDFs for each company, organized in
                  folders as per the categories filed on the MCA website. To
                  ensure that each file name is unique, it is prefixed with the
                  document ID.
                </dd>
                <dt>
                  <i className="glyphicon glyphicon-question-sign" />
                  How much time it takes to download one company?
                </dt>
                <dd>
                  It depends on the number of documents filed at MCA and
                  response time of MCA server. It should not take more than 45
                  minutes to download a company.
                </dd>
                <dt>
                  <i className="glyphicon glyphicon-question-sign" />
                  How long will the company be available on my dashboard?
                </dt>
                <dd>
                  We will guarantee that the file will be made available for 24
                  hours after the download completes and the notification is
                  sent to you via email. After 24 hours, we may possibly delete
                  it to ensure optimum space utilization on our server.
                </dd>
                <dt>
                  <i className="glyphicon glyphicon-question-sign" />
                  Can only registered MCA users could avail your service?
                </dt>
                <dd>
                  Yes, you need to provide your login credentials for MCA before
                  downloading. If you don't have an account at MCA,{" "}
                  <a
                    target="_blank"
                    href="http://www.mca.gov.in/mcafoportal/loadUserRegistration.do?link=loadUserRegistration"
                  >
                    create it
                  </a>
                  and then use our service.
                </dd>
                <dt>
                  <i className="glyphicon glyphicon-question-sign" />
                  Do you store my MCA username and password?
                </dt>
                <dd>
                  No, we don't. While processing an order, it may be temporarily
                  stored on our server as part of the downloading process but is
                  removed after completion. See our{" "}
                  <a target="_blank" href="/legal/privacy">
                    Privacy Policy
                  </a>
                  for more details.
                </dd>
                <dt>
                  <i className="glyphicon glyphicon-question-sign" />
                  What happens if the MCA website is down?
                </dt>
                <dd>
                  CorpData only facilitates access to public records available
                  on the MCA website, we are not a reseller of public records
                  and only ensure fast and convenient access to data. In case of
                  connectivity issues, we will do our best to download the
                  documents and raise a complaint with MCA to make the company
                  available in your login.
                </dd>
                <dt>
                  <i className="glyphicon glyphicon-question-sign" />
                  What does the Excel file contains?
                </dt>
                <dd>
                  The Excel file contains the Balance Sheet, Profit &amp; Loss
                  Account and their respective schedules for each year.
                </dd>
                <dt>
                  <i className="glyphicon glyphicon-question-sign" />
                  How long will the converted excel be available on my
                  dashboard?
                </dt>
                <dd>
                  We will guarantee that the file will be made available for 7
                  days after the download completes and the notification is sent
                  to you via email. After 7 days, we may possibly delete it to
                  ensure optimum space utilization on our server.
                </dd>
                <dt>
                  <i className="glyphicon glyphicon-question-sign" />
                  What are the taxonomies supported?
                </dt>
                <dd>
                  CorpData XBRL conversion tool supports Taxonomies for 2012,
                  2013, 2015, 2016 &amp; Ind-AS.
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* contact */}
      <div className="banner mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Contact Us</h2>
              <p>
                <i className="glyphicon glyphicon-envelope" />
                <a
                  href="mailto:corpdata@corpdata.in "
                  style={{ textDecoration: "none", fontWeight: 700 }}
                >
                  corpdata@corpdata.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <p className="copyright text-muted small">
                CorpData © 2016-2020 (None). By using this site, you agree to
                the
                <a target="_blank" href="/legal/terms">
                  Terms of Use
                </a>{" "}
                and
                <a target="_blank" href="/legal/privacy">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Corp;





