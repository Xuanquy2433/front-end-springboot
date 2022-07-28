import React, { useState } from "react";
import "./css/login.css";
import axios from "axios";
import { API_USER_FORGOT, API_USER_LOGIN } from "../utils/const";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const onLogin = async (e) => {
    const reponse = await axios.post(API_USER_LOGIN, data);
    console.log("respon", reponse);
    if (reponse && reponse.status === 200) {
      console.log("Login sucsess");
      alert("dang nhap thanh cong");
      // toast.success("Login sucsess");
      localStorage.setItem("token", reponse?.data.token);
      localStorage.setItem("user", JSON.stringify(reponse.data));
      navigate('/')

    } else if (reponse && reponse.status === 403) {
      alert("dang nhap that bai");
    }
  };


  const onForget = async (e) => {
    const reponse = await axios.post(API_USER_FORGOT, data);
    console.log("respon", reponse);
    if (reponse && reponse.status === 200) {
      console.log("Login sucsess");
      alert("dang nhap thanh cong");
      // toast.success("Login sucsess");
      localStorage.setItem("token", reponse?.data.token);
      localStorage.setItem("user", JSON.stringify(reponse.data));
      navigate('/')

    } else if (reponse && reponse.status === 403) {
      alert("dang nhap that bai");
    }
  };

  return (
    <React.Fragment>
      <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Member Login</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <i class="fa fa-user"></i>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  required="required"
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <i class="fa fa-lock"></i>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required="required"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>

              <div class="form-group">
                <button
                  class="btn btn-primary btn-block btn-lg"
                  value="Login"
                  aria-hidden="true"
                  // data-dismiss="modal"
                  style={{ cursor: "pointer", color: 'white' }}
                  onClick={(e) => {
                    onLogin(e);
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a href="">Forgot Password?</a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
}

export default Login;
