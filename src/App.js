import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout"; //used for layout
import Login from "./components/Login"; //used for login from layout
import Page1 from "./pages/Page1"; //{{*****WE CAN REMOVE IT}}display cards want to remove and include in years{{WE CAN REMOVE IT}}
import Signup from "./components/Signup"; //signup from layout
import University from "./components/University"; //university
import Search from "./components/Search";
import Page2 from "./pages/Page2"; //geeting output add in years is for input for year2
import Page3 from "./pages/Page3"; //getting output add in years is for input for year3

import Papers2 from "./papers/Papers2";

import Add from "./user/Add"; //adding from layout page {{TO ADD PDFS}}
import AddLinksForm from "./user/AddLinksForm";
import Addpapers from "./user/Addpapers";

import Year from "./year/Year"; //select year after lodin and signup page
import Year1 from "./year/Year1"; //select first year
import Year2 from "./year/Year2"; //select second year inouts in {{PAGE2}}
import Year3 from "./year/Year3"; //select third year
import Year4 from "./year/Year4"; //select fourth year

import Yeartea1 from "./teachers/Yeartea1";
import Yeartea2 from "./teachers/Yeartea2";
import Yeartea3 from "./teachers/Yeartea3";

import Link3 from "./links/Link3";

import Yearpull from "./pullareddy/Yearpull";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/University" element={<University />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Page2/:category" element={<Page2 />} />{" "}
        {/* Updated route , we can add category that changes */}
        <Route path="/Page3/:category" element={<Page3 />} />{" "}
        <Route path="/Papers2/:category" element={<Papers2 />} />{" "}
        <Route path="/Add" element={<Add />} />
        <Route path="/AddLinksForm" element={<AddLinksForm />} />
        <Route path="/Addpapers" element={<Addpapers />} />
        <Route path="/Year" element={<Year />} />
        <Route path="/Year1" element={<Year1 />} />
        <Route path="/Year2" element={<Year2 />} />
        <Route path="/Year3" element={<Year3 />} />
        <Route path="/Year4" element={<Year4 />} />
        <Route path="/Yeartea1" element={<Yeartea1 />} />
        <Route path="/Yeartea2/:category" element={<Yeartea2 />} />
        <Route path="/Yeartea3/:category" element={<Yeartea3 />} />
        <Route path="/Link3" element={<Link3 />} />
        <Route path="/Yearpull" element={<Yearpull />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
