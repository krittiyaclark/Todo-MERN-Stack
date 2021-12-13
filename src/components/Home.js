import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
	return (
		<Container className='d-flex'>
			<Row className='justify-content-center align-self-center align-items-center'>
				<Col>
					<h1>Todo App!</h1>
				</Col>
			</Row>
		</Container>
	)
}

export default Home
