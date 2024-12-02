import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Dashboard, Form, About, Policy, Applications, Report } from "./pages";
import "./App.css";
import LoginRoot from "./components/LoginRoot/LoginRoot";
import userDataLoader from "./services/userDataLoader";
import { createApplicationAction } from "./services/createApplicationAction";
import { applicationStatusAction } from "./services/applicationStatusAction";
import Root from "./components/DashboardRoot/Root";

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
      { path: "form", element: <Form />, action: createApplicationAction },
      { path: "faqs", element: <h1>FAQs</h1> },
      { path: "contact-us", element: <h1>Contact Us</h1> },
    ],
  },
  {
    path: "/validator",
    element: <Root />,
    id: "Validator-Root",
    loader: userDataLoader,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "dashboard/:status",
        element: <Applications />,
        action: applicationStatusAction,
      },
      {
        path: "report",
        element: <Report />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
