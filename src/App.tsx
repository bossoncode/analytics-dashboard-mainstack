import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://fe-task-api.mainstack.io");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="h-screen flex overflow-y-scroll">
      <div className="w-1/5 bg-white py-5 fixed border-l border-[#EFF1F6]">
        <Sidebar />
      </div>
      <div className="w-4/5 ml-[20%] px-10 py-5">hey</div>
    </div>
  );
};

export default App;
