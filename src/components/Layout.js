import { Container, Row, Col } from 'react-bootstrap'

import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<>
			<main className='text-dark'>
				<Container className='vh-100'>
					<Row>
						<Col md={{ span: 6, offset: 3 }} className='vh-100 background'>
							{children}
						</Col>
					</Row>
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default Layout
