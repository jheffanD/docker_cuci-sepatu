import Navbar from "../../componen/navbar";
import Input from "../Input/page";
import List from "../list/page";

export default function Dashboard() {
  return (
    <div className="bg-white">
      <Navbar />
      <Input />
      <List />
    </div>
  );
}
