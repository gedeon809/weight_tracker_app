import Dashboard from './Dashboard'
import Weight from './Weight'

import { FaUsers, FaWallet } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { AiOutlineFileSync } from 'react-icons/ai'

const Pages = [
	{
		path: '/main',
		name: 'Dashboard',
		icon: <AiOutlineFileSync size={14} />,
		component: <Dashboard />,
		layout: '/dashboard',
	},
	{
		path: '/weights',
		name: 'Weights',
		icon: <GiReceiveMoney size={14} />,
		component: <Weight />,
		layout: '/dashboard',
	}
]

export default Pages
