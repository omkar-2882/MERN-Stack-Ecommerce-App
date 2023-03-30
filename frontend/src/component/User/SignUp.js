import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
// import "./signup.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";

const SignUp = ({ history, location }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const profileimg = require("../../images/Profile.png");
  const [avatar, setAvatar] = useState(profileimg);
  const [avatarPreview, setAvatarPreview] = useState(profileimg);

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    console.log(avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {/* Signup */}
          <div id="container" className="container">
            <div className="myCard">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex myLeftCtn justify-content-center">
                    <form
                      id="myForm"
                      className="text-center"
                      onSubmit={registerSubmit}
                    >
                      <header>Create New Account</header>
                      <div className="form-group">
                        <i className="fas fa-user"></i>
                        <input
                          className="myInput"
                          type="text"
                          placeholder="Username"
                          id="name"
                          name="name"
                          onChange={registerDataChange}
                          value={name}
                          required
                          //   minLength={5}
                        />
                      </div>
                      <div className="form-group">
                        <i className="fas fa-envelope"></i>
                        <input
                          className="myInput"
                          placeholder="Email"
                          type="text"
                          value={email}
                          id="email"
                          name="email"
                          required
                          onChange={registerDataChange}
                        />
                      </div>
                      <div className="form-group">
                        <i className="fas fa-lock"></i>
                        <input
                          className="myInput"
                          type="password"
                          value={password}
                          id="password"
                          name="password"
                          placeholder="Password"
                          required
                          onChange={registerDataChange}
                        />
                      </div>
                      {/* <div className="form-group">
                        <i className="fas fa-lock"></i>
                        <input
                          className="myInput"
                          type="password"
                          value={creds.cpassword}
                          id="password"
                          name="cpassword"
                          placeholder="Confirm Password"
                          required
                          onChange={onchange}
                        />
                      </div> */}

                      <div id="registerImage" className="form-group">
                        <input
                          className="myInput"
                          type="file"
                          name="avatar"
                          accept="image/*"
                          onChange={registerDataChange}
                        />
                        <img src={avatarPreview} alt="Avatar Preview" />
                      </div>

                      {/* <div className="form-group ">
                        <label>
                          <input
                            id="check_1"
                            name="check_1"
                            type="checkbox"
                            required
                          />
                          <small> I read and agree to Terms & Conditions</small>
                          <div className="invalid-feedback">
                            You must check the box.
                          </div>
                        </label>
                      </div> */}
                      <button type="submit" id="signbutt" className="btn butt">
                        SIGN UP
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="myRightCtn">
                    <div className="box">
                      <header>Welcome Back!</header>
                      <p>Already have an account ?</p>
                      <Link to="./login" type="submit" className="btn butt_out">
                        LOGIN
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SignUp;
