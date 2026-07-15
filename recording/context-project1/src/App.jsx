// import React from 'react'
// import MainRoutes from './routes/MainRoutes'
// import Navbar from './components/Navbar'

// const App = () => {
//   return (
//     <div className="bg-gray-800 text-white min-h-screen font-thin py-10 px-[10%]">
//       <Navbar/>
//       <MainRoutes/>
//     </div>
//   )
// }

// export default App

import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-6">

        <Navbar />

        <MainRoutes />

      </div>

    </div>
  );
};

export default App;