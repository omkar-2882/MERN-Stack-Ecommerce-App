import React from "react";
import "./Home2.css";
import about from "../../images/about/about-us.jpg";
import client1 from "../../images/clients/client-1.png";
import client2 from "../../images/clients/client-2.png";
import client3 from "../../images/clients/client-3.png";
import client4 from "../../images/clients/client-4.png";
import client5 from "../../images/clients/client-5.png";
import client6 from "../../images/clients/client-6.png";
import client7 from "../../images/clients/client-7.png";
import client8 from "../../images/clients/client-8.png";

const About = () => {
  return (
    <>
      <section class="about spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="about__pic">
                <img src={about} alt="" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>Who We Are ?</h4>
                <p >
                Our app was founded on the belief that shopping should be easy, convenient, and enjoyable. We understand the frustration that comes with navigating crowded stores and long checkout lines. That's why we've created a platform that allows you to shop from the comfort of your own home.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>What We Do ?</h4>
                <p>
                Our team is committed to providing you with the best possible experience. We are constantly working to improve our app, adding new features and updating our product offerings to ensure that we are always meeting the needs of our customers.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>Why Choose Us</h4>
                <p>
                We pride ourselves on our commitment to customer service. If you ever have any questions or concerns, our friendly and knowledgeable support team is always here to help. We believe that great customer service is the key to building long-lasting relationships with our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // <!-- Client Section Begin --> */}
      <section class="clients spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center mb-5">
                {/* <span>Partner</span> */}
                <h2>Happy Clients</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src={client1} alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src={client2} alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src={client3} alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src={client4} alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src={client5} alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src={client6} alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src={client7} alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src={client8} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
