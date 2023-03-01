import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  RouteProps,
  Routes,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Pages from "./pages";
import { DashboardLayout } from "./layouts";
import SignUp from "./pages/SignUp";

function App() {
  // const PrivateRoute = (({ children }: any) => {
  //     const { isLoggedIn, currentUser } = UserStore

  //     if (!isLoggedIn || currentUser.token === null) {
  //         return <Navigate to='/' />
  //     }

  //     return children
  // })

  const getRoutes = (defaultRoutes: RouteProps[]): any =>
    defaultRoutes.map((prop: any, key: number | string) => {
      return (
        <Route
          path={prop.layout + prop.path}
          element={prop.component}
          key={key + prop.layout}
        />
      );
    });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signUp/" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          {getRoutes(Pages)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
