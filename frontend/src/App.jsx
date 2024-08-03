import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Login,ApplicantDashboard,ValidatorDashboard,ApplicationForm,ValidatorsReport,About,Policy} from './pages'

import './App.css'
import Navbar from './pages/login/components/navbar/Navbar'

const router = createBrowserRouter([
  {path:'/',element: <Navbar/>, children:[
    {path:'',element: <Login/> },
    {path:'about',element: <About/> },
    {path:'policy',element: <Policy/>}
  ]},
  {path:'/applicant',element: <ApplicantDashboard/>},
  {path:'/applicant/form',element: <ApplicationForm/> },
    
  {path:'/validator',element: <ValidatorDashboard/>},
  {path:'/validator/report',element: <ValidatorsReport/>}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
