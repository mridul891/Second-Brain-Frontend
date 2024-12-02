import "./App.css";
import { Button } from "./compo nent/button";
import { Card } from "./component/Card";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div className="">
      <div className="flex justify-end gap-4 p-3 ">
        <Button
          text={"Share"}
          variant="primary"
          size="lg"
          startIcon={<ShareIcon />}
        />
        <Button text={"Secondary"} variant="secondary" size="md" />
      </div>
      <div className="flex gap-3">
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
  );
}

export default App;
