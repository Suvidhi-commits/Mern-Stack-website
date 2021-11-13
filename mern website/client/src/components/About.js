import React from "react";
import image from "../images/mayank.jpg";

const About = () => {
  return (
    <>
      <section className="about shadow p-3 mb-5 bg-white rounded">
        <div className="container emp-profile">
          <form method="">
            <div className="row">
              <div className="col-md-4">
                <img className="profile" src={image} alt="profile" />
              </div>

              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Mayank jain</h5>
                  <h6>web developer</h6>
                  <p className="profile-rating mt-3 mb-5">
                    RANKING : <span> 5/10</span>
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                      >
                        <b>About</b>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                      >
                        <b>Timeline</b>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>

            <div className="row">
              {/* leftside */}
              <div className="col-md-4">
                <div className="profile-work">
                  <p>
                    <u>
                      <b> WORK LINK</b>
                    </u>
                  </p>
                  <a href="http://youtube.com" target="link">
                    Youtube
                  </a>
                  <br />
                  <a href="http://instagram.com" target="link">
                    Instagram
                  </a>
                  <br />
                  <a href="http://facebook.com" target="link">
                    Facebook
                  </a>
                  <br />
                  <a href="http://teitter.com" target="link">
                    Twitter
                  </a>
                  <br />
                  <a href="http://figma.com" target="link">
                    Linkedian
                  </a>
                  <br />

                  <a href="http://figma.com" target="link">
                    Web developer
                  </a>
                  <br />
                </div>
              </div>

              {/* rightside */}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content " id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    area-aria-labelledby="home-tab"
                  >
                    <div className="row abs">
                      <div className="col-md-5">
                        <label>
                          <b>User ID</b>
                        </label>
                      </div>
                      <div className="col-md-6 right_side">
                        <p>3648302-0-5850</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <label>
                          <b> Name</b>
                        </label>
                      </div>
                      <div className="col-md-6 right_side">
                        <p>Mayank Jain</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <label>
                          <b> Email</b>
                        </label>
                      </div>
                      <div className="col-md-6 right_side">
                        <p>abc@gmail.com</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <label>
                          <b> Phone_number</b>
                        </label>
                      </div>
                      <div className="col-md-6 right_side">
                        <p>7235672990</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <label>
                          <b> Professional</b>
                        </label>
                      </div>
                      <div className="col-md-6 right_side">
                        <p>Web developer</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row top">
                      <div className="col-md-5">
                        <label>
                          <b>Experience</b>
                        </label>
                      </div>
                      <div className="col-md-6 right_side">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <label>
                          <b>Hourly Rate</b>
                        </label>
                      </div>
                      <div className="col-md-6 right_side">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <label>
                          <b>Total Projects</b>
                        </label>
                      </div>
                      <div className="col-md-6 right_side">
                        <p>50</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <label>
                          <b>Avaibality</b>
                        </label>
                      </div>
                      <div className="col-md-6 right_side">
                        <p>6 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default About;
