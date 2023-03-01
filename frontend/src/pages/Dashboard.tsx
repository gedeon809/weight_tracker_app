import React, { useState } from 'react'
import {BsArrowLeftShort, BsSearch} from 'react-icons/bs'
import {AiFillEnvironment} from 'react-icons/ai'
import {RiDashboardFill} from 'react-icons/ri'

function Dashboard() {

  return (
    <div className='w-full'>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16 w-full">
        <div className="rounded bg-slate-50 h-40 shadow-sm"></div>
        <div className="rounded bg-slate-50 h-40 shadow-sm"></div>
        <div className="rounded bg-slate-50 h-40 shadow-sm"></div>
      </div>
      <div className="grid col-1 bg-slate-50 h-96 shadow-sm"></div>
    </div>
  )
}

export default Dashboard