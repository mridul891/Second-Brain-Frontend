import { useRef } from "react";
import { Button } from "../component/Button";
import { Input } from "../component/Input";
import axios from "axios";
import { BackendUrl } from "../config";
import toast from "react-hot-toast";

const SignupPage = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const signup = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(username);
    console.log(password);
    try {
      await axios.post(`${BackendUrl}/api/v1/signup`, {
        username,
        password,
      });
    } catch (error) {
      console.log(error)
      // toast.error()
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900 ">
      <div className="bg-white rounded border min-w-48 p-12 flex flex-col gap-4">
        <Input placeholder="Enter Username" reference={usernameRef} />
        <Input placeholder="Enter Password" reference={passwordRef} />

        <div>
          <Button variant="primary" text="SignUp" size="md" onClick={signup} />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
