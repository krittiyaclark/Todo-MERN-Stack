import { Link } from 'react-router-dom'

import { Container, Navbar, Nav } from 'react-bootstrap'

const Navigationbar = () => {
	return (
		<section className='bg-dark'>
			<Container>
				<Navbar expand='lg'>
					<Navbar.Toggle
						aria-controls='basic-navbar-nav'
						className='custom-navbar'
					/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<ul className='mt-1'>
								<li className='nav-item nav-link px-1'>
									<Link to='/'>Home</Link>
								</li>
								<li className='nav-item nav-link px-1'>
									<Link to='/todos'>Create todo</Link>
								</li>
							</ul>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</section>
	)
}

export default Navigationbar
