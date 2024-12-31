import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";

// Lazy loading the pages and components
const Login = React.lazy(() => import("./pages/Login/Login"));
const Root = React.lazy(() => import("./components/DashboardRoot/Root"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Form = React.lazy(() => import("./pages/ApplicationForm/Form"));
const About = React.lazy(() => import("./pages/About/About"));
const Policy = React.lazy(() => import("./pages/Policy/Policy"));
const Applications = React.lazy(() => import("./pages/Applications/Applications"));
const Report = React.lazy(() => import("./pages/Report/Report"));
const LoginRoot = React.lazy(() => import("./components/LoginRoot/LoginRoot"));
const ContactUs = React.lazy(() => import("./pages/ContactUs/ContactUs"));
const ApplicationView = React.lazy(() => import("./pages/ApplicationView/ApplicationView"));

import userDataLoader from "./services/userDataLoader";
import { createApplicationAction } from "./services/createApplicationAction";
import { applicationStatusAction } from "./services/applicationStatusAction";
import Loading from "./components/Loading";

// Define the router with lazy-loaded components
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoot />,
    children: [
      { index: true, element: <Login /> },
      { path: "about", element: <About /> },
      { path: "policy", element: <Policy /> },
    ],
  },
  {
    path: "/applicant",
    element: <Root />,
    id: "Applicant-Root",
    loader: userDataLoader,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboard/:status", element: <Applications /> },
      { path: "dashboard/:status/:applicationId", element: <ApplicationView /> },
      { path: "form", element: <Form />, action: createApplicationAction },
      { path: "contact-us", element: <ContactUs /> },
      { path: "policy", element: <Policy /> },
    ],
  },
  {
    path: "/validator",
    element: <Root />,
    id: "Validator-Root",
    loader: userDataLoader,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboard/:status", element: <Applications /> },
      { path: "dashboard/:status/:applicationId", element: <ApplicationView />, action: applicationStatusAction },
      { path: "report", element: <Report /> },
      { path: "policy", element: <Policy /> },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
