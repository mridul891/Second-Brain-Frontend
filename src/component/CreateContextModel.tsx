import CrossIcon from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

const CreateContextModel = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div
          className="h-screen w-screen flex justify-center items-center
         bg-slate-200 fixed top-0 left-0 opacity-60 "
        >
          <div className="flex flex-col justify-center ">
            <span className="bg-white opacity-100 p-4 rounded-lg">
              {/* Top Part */}
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>

              {/* Bottom Part */}
              <div className="flex flex-col gap-4 mt-2">
                <Input placeholder={"Title"} />
                <Input placeholder={"Enter your link"} />

                <Button text={"Share"} variant="primary" size="md" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};


export default CreateContextModel;
