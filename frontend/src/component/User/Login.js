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

const Login = ({ history, location }) => {
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
        // <Fragment>
        //   <div className="LoginSignUpContainer">
        //     <div className="LoginSignUpBox">
        //       <div>
        //         <div className="login_signUp_toggle">
        //           <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
        //           <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
        //         </div>
        //         <button ref={switcherTab}></button>
        //       </div>
        //       <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
        //         <div className="loginEmail">
        //           <MailOutlineIcon />
        //           <input
        //             type="email"
        //             placeholder="Email"
        //             required
        //             value={loginEmail}
        //             onChange={(e) => setLoginEmail(e.target.value)}
        //           />
        //         </div>
        //         <div className="loginPassword">
        //           <LockOpenIcon />
        //           <input
        //             type="password"
        //             placeholder="Password"
        //             required
        //             value={loginPassword}
        //             onChange={(e) => setLoginPassword(e.target.value)}
        //           />
        //         </div>
        //         <Link to="/password/forgot">Forget Password ?</Link>
        //         <input type="submit" value="Login" className="loginBtn" />
        //       </form>
        //       <form className="signUpForm" ref={registerTab} encType="multipart/form-data" onSubmit={registerSubmit}>
        //         <div className="signUpName">
        //           <FaceIcon />
        //           <input
        //             type="text"
        //             placeholder="Name"
        //             required
        //             name="name"
        //             value={name}
        //             onChange={registerDataChange}
        //           />
        //         </div>
        //         <div className="signUpEmail">
        //           <MailOutlineIcon />
        //           <input
        //             type="email"
        //             placeholder="Email"
        //             required
        //             name="email"
        //             value={email}
        //             onChange={registerDataChange}
        //           />
        //         </div>
        //         <div className="signUpPassword">
        //           <LockOpenIcon />
        //           <input
        //             type="password"
        //             placeholder="Password"
        //             required
        //             name="password"
        //             value={password}
        //             onChange={registerDataChange}
        //           />
        //         </div>

        //         <div id="registerImage">
        //           <img src={avatarPreview} alt="Avatar Preview" />
        //           <input
        //             type="file"
        //             name="avatar"
        //             accept="image/*"
        //             onChange={registerDataChange}
        //           />
        //         </div>
        //         <input type="submit" value="Register" className="signUpBtn" />
        //       </form>
        //     </div>
        //   </div>
        // </Fragment>
        <Fragment>
          <div id="container" className="container">
            <div className="myCard">
              <div id="row" className="row">
                <div id="col" className="col-md-6">
                  <div className="d-flex myLeftCtn justify-content-center">
                    <form className="myForm text-center" onSubmit={loginSubmit}>
                      <header>Login To Continue</header>
                      {/* <div className="form-group">
                                <i className="fas fa-user"></i>
                                <input className="myInput" type="text" placeholder="Username" id="username" required />
                            </div> */}

                      <div className="form-group">
                        <i className="fas fa-envelope"></i>
                        <input
                          className="myInput"
                          placeholder="Email"
                          type="text"
                          value={loginEmail}
                          id="email"
                          name="email"
                          required
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <i className="fas fa-lock"></i>
                        <input
                          className="myInput"
                          type="password"
                          value={loginPassword}
                          id="password"
                          name="password"
                          placeholder="Password"
                          required
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <Link to="/password/forgot" id="forgetpass">
                          Forget Password?
                        </Link>
                      </div>

                      {/* <div className="form-group ">
                                <label>
                                    <input id="check_1" name="check_1" type="checkbox" required /><small> I read and agree to Terms & Conditions</small>
                                    <div className="invalid-feedback">You must check the box.</div>
                                </label>
                            </div> */}

                      <button type="submit" id="loginbutt" className="btn butt">
                        LOGIN
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="myRightCtn">
                    <div className="box">
                      <header>New User!</header>
                      <p>Don't have an account ?</p>
                      <Link
                        to="./signup"
                        type="submit"
                        className="btn butt_out"
                      >
                        Sign Up
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

export default Login;
