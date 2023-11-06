import React from "react";
import teacher from "../assets/teacher.jpg";
import student from "../assets/student.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div class="flex justify-center items-center h-screen w-full">
        <div class="bg-white rounded-lg shadow-lg p-8 flex-col justify-center items-center w-[80%]">
          <h2 class="flex justify-center items-center text-5xl font-light mb-8 mx-auto">
            Choose an Account
          </h2>
          <div class="flex justify-between">
            <div class="w-1/2 pr-4">
              <div class="rounded-lg mb-4">
                <img
                  src={student}
                  alt="Student"
                  class="mx-auto w-80 object-cover h-80 "
                />
              </div>
              <Link
                to="studentRegister"
                className="flex justify-center items-center"
              >
                <button class="bg-gray-800 text-white rounded-lg px-4 py-2">
                  Create Student Account
                </button>
              </Link>
            </div>
            <div class="w-1/2 pl-4 flex-col justify-center items-center">
              <div class="rounded-lg mb-4">
                <img
                  src={teacher}
                  alt="Teacher"
                  class="mx-auto w-80 object-cover h-80"
                />
              </div>
              <Link
                to="teacherRegister"
                className="flex justify-center items-center"
              >
                <button class="bg-gray-800 text-white rounded-lg px-4 py-2">
                  Create Teacher Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
