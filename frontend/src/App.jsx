import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Login,Dashboard,ApplicationForm,About,Policy, ApplicationDisplay} from './pages'

import './App.css'
import LoginRoot from './components/LoginRoot/LoginRoot'
import ErrorComponent from '../src/components/ErrorComponent';
import DashboardRoot from './components/DashboardRoot/DashboardRoot'
import userDataLoader from './services/userDataLoader';
import { createApplicationAction } from './services/createApplicationAction';
import { applicationStatusAction } from './services/applicationStatusAction';

const router = createBrowserRouter([
  {path:'/',element: <LoginRoot/>, children:[
    {index:true,element: <Login/> },
    {path:'about',element: <About/> },
    {path:'policy',element: <Policy/>}
  ]},
  {path:'/applicant',element: <DashboardRoot role="Applicant"/>, id: "Applicant-Root", loader: userDataLoader, /*errorElement: <ErrorComponent/>,*/
    children:[
    {path:'dashboard',element: <Dashboard role="Applicant"/>,
      children:[
      {path:':status',element: <Dashboard role="Applicant"/> }
    ]},
    {path:'form',element: <ApplicationForm/>, action: createApplicationAction },
    {path:'display', element: <ApplicationDisplay/>},
    {path:'faqs',element: <h1>FAQs</h1> },
    {path:'contact-us',element: <h1>contact-us</h1> },
  ]},
    
  {path:'/validator',element: <DashboardRoot role="Validator"/>, id: "Validator-Root", loader: userDataLoader, errorElement: <ErrorComponent/>,
    children:[
    {path:'dashboard',element: <Dashboard role="Validator"/>, action: applicationStatusAction,
      children:[
      {path:':status',element: <Dashboard role="Validator"/> }
    ]},
    {path:'display', element: <ApplicationDisplay/>},
  ]},
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
