import React from "react";
import router from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className=" bg-gray-800 h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
