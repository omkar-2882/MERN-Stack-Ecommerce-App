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
                <p>
                  Contextual advertising programs sometimes have strict policies
                  that need to be adhered too. Let’s take Google as an example.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>Who We Do ?</h4>
                <p>
                  In this digital generation where information can be easily
                  obtained within seconds, business cards still have retained
                  their importance.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>Why Choose Us</h4>
                <p>
                  A two or three storey house is the ideal way to maximise the
                  piece of earth on which our home sits, but for older or infirm
                  people.
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
