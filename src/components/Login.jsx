import React, { useState } from "react";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import github from "../assets/github.svg";
import google from "../assets/google.svg";

export default function Login() {
  const [data, setData] = useState([]);
  const { login } = useAuth();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    console.log(data);
    login(data);
  };

  const continueWithGoogle = async () => {
    try {
      console.log("continue with ggogle");
      const config = {
        withCredentials: true,
      };
      const res = await axios.get(
        `auth/o/google-oauth2/?redirect_uri=${
          import.meta.env.VITE_REDIRECT_URI
        }`,
        config
      );

      window.location.href = res.data.authorization_url;
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      <main>
        <section className="mt-16 w-full h-full index-50 ">
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4 h-full shadow-lg rounded-lg bg-gray-300">
                <div className="relative flex flex-col min-w-0 break-words w-full   border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img alt="..." className="w-5 mr-1" src={github} />
                        Github
                      </button>
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={continueWithGoogle}
                      >
                        <img alt="..." className="w-5 mr-1" src={google} />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          onChange={handleChange}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          name="email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          onChange={handleChange}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          name="password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          onClick={handleLogin}
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap p-4">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-800"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <Link to="/signup" className="text-gray-800">
                      <small>Create new account</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
