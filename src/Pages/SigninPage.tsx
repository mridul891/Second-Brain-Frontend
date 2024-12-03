import axios from "axios";
import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { BackendUrl } from "../config";
import { useRef } from "react";
import toast from "react-hot-toast";

const SigninPage = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const signin = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      await axios.post(`${BackendUrl}/api/v1/signin`, {
        username,
        password,
      });
    } catch (error) {
      // console.log(error.response.data.message);
      console.log(error)
      const value = error.response.data.message;
      console.log(value);
      toast.error(value);
    }
  };

  return (
    <div
      className="h-screen w-screen 
    flex justify-center items-center bg-gray-900 "
    >
      <div className="bg-white rounded border min-w-48 p-12 flex flex-col gap-4">
        <Input placeholder="Enter Username" reference={usernameRef} />
        <Input placeholder="Enter Password" reference={passwordRef} />

        <div>
          <Button variant="primary" text="SignIn" size="md" onClick={signin} />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
