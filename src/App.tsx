import { useState } from "react";
import "./App.css";
import { Button } from "./component/Button";
import { Card } from "./component/Card";
import CreateContextModel from "./component/CreateContextModel";
import { ShareIcon } from "./icons/ShareIcon";
import Plus from "./icons/Plus";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="">
      <CreateContextModel
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="ml-10 h-screen">
        <div className="flex justify-between items-center ">
          <div className="text-4xl font-bold">All Notes</div>
          <div className="flex justify-end gap-4 p-3 mr ">
            <Button
              text={"Add Content"}
              variant="primary"
              size="lg"
              startIcon={<Plus />}
              onClick={() => setModalOpen(true)}
            />
            <Button
              text={"Share Brain"}
              variant="secondary"
              size="md"
              startIcon={<ShareIcon />}
            />
          </div>
        </div>
        <div className="flex gap-3 ">
          <Card
            title="First CARD"
            link="https://x.com/work_pandey/status/1840061289978101807"
            type="twitter"
          />
          <Card
            title="second CARD"
            link="https://www.youtube.com/watch?v=0LE0trd740Q"
            type="youtube"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
