import React from 'react'
import { Outlet } from 'react-router-dom'
import routes from '../pages'
import SideBars from '../components/SideBar'


const DashboardLayout = (): any => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false)
	return (
		<div className='flex'>
           <SideBars routes={routes} />
        <div className='p-7 w-full'>
		   <Outlet />
        </div>

    </div>

	)
}


export default DashboardLayout
