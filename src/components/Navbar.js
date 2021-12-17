import { Link } from 'react-router-dom'

import { Container, Navbar, Nav } from 'react-bootstrap'

const Navigationbar = () => {
	return (
		<section className='bg-dark'>
			<Container>
				<Navbar expand='lg'>
					<Nav className='me-auto'>
						<ul className='mt-1 d-flex'>
							<li className='nav-item nav-link px-1'>
								<Link to='/'>Home</Link>
							</li>
							<li className='nav-item nav-link px-1 mx-2'>
								<Link to='/todos'>Create todo</Link>
							</li>
						</ul>
					</Nav>
				</Navbar>
			</Container>
		</section>
	)
}

export default Navigationbar
