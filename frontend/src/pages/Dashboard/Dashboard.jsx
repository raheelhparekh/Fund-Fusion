import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'

function Dashboard() {
  const { role } = useRouteLoaderData("Applicant-Root")?.data || useRouteLoaderData("Validator-Root")?.data 
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard