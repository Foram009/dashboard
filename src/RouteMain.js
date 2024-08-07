import React, { Suspense } from "react";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";

function RouteMain() {
  const CheckAuthorization = () => {
    // check authorization
    // let token = "";
    // return token && token !== "" ? <Outlet /> : <Navigate to="/" />;
    return <Outlet />;
  };
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<CheckAuthorization />}>
            <Route path="/" exact element={<DashboardLayout />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RouteMain;
