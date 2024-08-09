import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Login,ApplicantDashboard,ValidatorDashboard,ApplicationForm,ValidatorsReport,About,Policy} from './pages'

import './App.css'
import LoginRoot from './components/LoginRoot/LoginRoot'
import ApplicantDashboardRoot from './components/ApplicantDashboardRoot/ApplicantDashboardRoot'

const router = createBrowserRouter([
  {path:'/',element: <LoginRoot/>, children:[
    {index:true,element: <Login/> },
    {path:'about',element: <About/> },
    {path:'policy',element: <Policy/>}
  ]},
  {path:'/applicant',element: <ApplicantDashboardRoot/>, children:[
    {path:'dashboard',element: <ApplicantDashboard/>, children:[
      {path:':status',element: <ApplicantDashboard/> }
    ]},
    {path:'form',element: <ApplicationForm/> },
    {path:'faqs',element: <h1>FAQs</h1> },
    {path:'contact-us',element: <h1>contact-us</h1> },
  ]},
    
  {path:'/validator',element: <ValidatorDashboard/>},
  {path:'/validator/report',element: <ValidatorsReport/>}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
