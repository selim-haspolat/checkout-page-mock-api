import { useState } from "react";
import Product from "./Product";
import Profile from "./Profile";

const Admin = () => {

  const [panel, setPanel] = useState('Profile')

  return (
    <div className="h-[calc(100vh-72px)] p-5 grid grid-rows-5 grid-cols-12 gap-7 bg-slate-700">
      <div className="row-span-2 col-span-3 lg:col-span-2 flex flex-col gap-3 p-2 text-center bg-slate-800 text-white rounded-md overflow-auto">
        <button onClick={(e) => setPanel(e.target.innerText)} className="hover:bg-gray-700 transition py-1 rounded-lg">Profile</button>
        <button onClick={(e) => setPanel(e.target.innerText)} className="hover:bg-gray-700 transition py-1 rounded-lg">Product</button>
        <button onClick={(e) => setPanel(e.target.innerText)} className="hover:bg-gray-700 transition py-1 rounded-lg cursor-not-allowed">Users</button>
        <button onClick={(e) => setPanel(e.target.innerText)} className="hover:bg-gray-700 transition py-1 rounded-lg cursor-not-allowed">Theme</button>
        <button onClick={(e) => setPanel(e.target.innerText)} className="hover:bg-gray-700 transition py-1 rounded-lg cursor-not-allowed">Settings</button>
      </div>
      <div className="row-span-5 col-span-9 lg:col-span-10 bg-slate-800 text-white rounded-md overflow-auto">
        {panel === 'Profile' ? <Profile/> : <Product/>}
      </div>
    </div>
  );
};

export default Admin;
