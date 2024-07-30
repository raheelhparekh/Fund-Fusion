import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Login,ApplicantDashboard,ValidatorDashboard,ApplicationForm,ValidatorsReport} from './pages'

import './App.css'

const router = createBrowserRouter([
  {path:'/',element: <Login/> },
  {path:'/applicant',element: <ApplicantDashboard/>},
  {path:'/applicant/form',element: <ApplicationForm/> },
    
  {path:'/validator',element: <ValidatorDashboard/>},
  {path:'/validator/report',element: <ValidatorsReport/>}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
