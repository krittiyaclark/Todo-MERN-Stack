import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Navigationbar from './components/Navbar'
import Todos from './components/Todos'

function App() {
	return (
		<Layout>
			<Router>
				<Navigationbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/todos' element={<Todos />} />
				</Routes>
			</Router>
		</Layout>
	)
}

export default App
