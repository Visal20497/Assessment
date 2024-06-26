import React, { useState } from "react";
import Layout from "../../Component/Layout/Layout.js";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
function SignIn() {
  let [auth, setAuth] = useAuth();
  let location = useLocation();
  let [formData, setData] = useState({
    password: "",
    email: "",
  });
  let navigate = useNavigate();

  //this is for setting the value of form
  function formDataHandler(e) {
    setData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  }

  async function submitHandler(e) {
    try {
      e.preventDefault();
      //inline validation
      if (!formData.email || !formData.password) {
      } else {
        //api hitting
        let res = await axios.post(`/api/v1/login`, { ...formData });
        let data = res.data;
        if (data.success) {
          toast(data.message);
          setAuth(data);
          navigate(location.state || "/");
        } else {
          toast(data.message);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Layout title="Login -ecomm">
      <h4 className="text-center m-5">LogIn Form </h4>
      <div className="container" style={{ height: "70vh" }}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-5">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={formDataHandler}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={formDataHandler}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={submitHandler}
              >
                Login
              </button>
              <hr />
              <div>
                <Link to="/forget-password" >Forget Password</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
