import { LoginControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "@/components/common/Form";

const initialstate = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormdata] = useState(initialstate);

  const onsubmit = () => {
    console.log("login submit");
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="font-medium text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </Link>
          </p>
        </h1>
      </div>
      <Form
        formcontrols={LoginControls}
        formData={formData}
        setFormdata={setFormdata}
        onSubmit={onsubmit}
        ButtonText="Login"
      />
    </div>
  );
};

export default Login;
