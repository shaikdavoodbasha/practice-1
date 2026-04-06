import React from "react";
import One from "./components/one";
import One1 from "./components/one1";
import Parent from "./components/liftingstate/parent";
import Form1 from "./components/forms/form1";
import Refbro from "./components/refbro";
import Memobhai from "./components/memobhai";
import { RealContext } from "./context/appcontext";

const App = () => {
  return (
    <div>
      <RealContext>
        <Memobhai />
      </RealContext>
      <h1 className="text-red-500">
        Hello Davood bhai its been long to see you
      </h1>
      {/* <One name1="Salar"/> */}
      {/* <One1 /> */}
      {/* <Parent /> */}
      {/* <Form1 >
        <h1>Hello bro I am new Here</h1>
        </Form1> */}
      {/* <Refbro /> */}
    </div>
  );
};

export default App;
