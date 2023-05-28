import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
        <Container>
            
                <Row >

                <Col><a href="https://www.instagram.com/anubhavpal222/" target="_blank">instagram</a></Col>
            <Col><a href="https://www.linkedin.com/in/anubhav-pal-179b80234/" target="_blank">Linkedin</a></Col>
            <Col><a href="https://twitter.com/Anubhav41407541" target="_blank">Twitter</a></Col>
                </Row>
          
        </Container>
        </div>






    );
}