import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
	return (
		<Container>
			<Row className='vh-100 justify-content-center align-self-center align-items-center text-center'>
				<Col>
					<h1>Todo App!</h1>
				</Col>
			</Row>
		</Container>
	)
}

export default Home
