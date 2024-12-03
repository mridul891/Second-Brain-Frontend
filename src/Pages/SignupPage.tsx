import { Button } from "../component/Button";
import { Input } from "../component/Input";

const SignupPage = () => {
  return (
    <div
      className="h-screen w-screen 
    flex justify-center items-center bg-gray-900 "
    >
      <div className="bg-white rounded border min-w-48 p-12 flex flex-col gap-4">
        <Input placeholder="Enter Username" />
        <Input placeholder="Enter Password" />

        <div>
          <Button variant="primary" text="SignUp" size="md" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
