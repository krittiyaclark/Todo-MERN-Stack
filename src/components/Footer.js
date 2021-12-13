import { Container } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container className='text-center'>
				Built by{' '}
				<span>
					<a href='https://krittiya-clark.netlify.app' target='_blank'>
						Krittiy Clark
					</a>
				</span>
			</Container>
		</footer>
	)
}

export default Footer
