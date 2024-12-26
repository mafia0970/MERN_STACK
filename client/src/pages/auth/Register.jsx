import Form from "@/components/common/Form";
import { registerFormControls } from "@/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormdata] = useState(initialState);

  const onsubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Create a New Account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
        <Form
          formcontrols={registerFormControls}
          formData={formData}
          setFormdata={setFormdata}
          onSubmit={onsubmit}
          ButtonText="Register"
        />
      </div>
    </div>
  );
};

export default Register;
