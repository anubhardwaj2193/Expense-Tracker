import React from "react";
import {
  Routes,
  redirect,
  Router,
  Route,
  createRoutesFromChildren,
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Login from "./Component/Pages/Login";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HeaderSite from "./Component/UI/HeaderSite";
import ExpenseTracker from "./Component/Pages/ExpenseTracker";
import Error from "./Component/Pages/Error";
import UpdateProfile from "./Component/Pages/UpdateProfile";
import VerifyEmail from "./Component/Pages/VerifyEmail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderSite />}>
          <Route index element={<Login/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/expensetracker" element={<ExpenseTracker />} />
          <Route path="updateprofile" element={<UpdateProfile/>}/>
          <Route path="verifyemail" element={<VerifyEmail/>}/>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
