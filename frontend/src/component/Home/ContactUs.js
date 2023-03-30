import React from "react";
import "./Home2.css";

const ContactUs = () => {
  let subject;
  let body;
  // let myname;
  const onSubmitHandler = (e) => {
    e.preventDefault(); 
    console.log(subject)
    console.log(body)
    window.location.href = `mailto:omkar.gawde2882@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section className="contact spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact__text">
              <div className="section-title">
                {/* <span>Information</span> */}
                <h2>Contact Us</h2>
                <p>
                  As you might expect of a company that began as a high-end
                  interiors contractor, we pay strict attention.
                </p>
              </div>
              <ul>
                <li>
                  <h4>India</h4>
                  <p>
                    195 Lotus Square Tower, Andheri-West, Mumbai-400038 <br />
                    +91 982314 0958
                  </p>
                </li>
                {/* <li>
                  <h4></h4>
                  <p>
                    109 Avenue Léon, 63 Clermont-Ferrand <br />
                    +12 345-423-9893
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact__form">
              <form onSubmit={onSubmitHandler}>
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Name"/>
                  </div>
                  <div className="col-lg-6">
                    <input type="text" name="subject" placeholder="Subject" onChange={(e)=> subject = e.target.value}/>
                  </div>
                  <div className="col-lg-12">
                    <textarea style={{whitespace: "pre-line"}} placeholder="Message" name="body" onChange={(e)=> body = e.target.value}></textarea>
                    <button
                      type="submit"
                      className=""
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
