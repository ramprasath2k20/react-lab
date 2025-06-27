import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../store/Slices/CountrySlice';
import type { RootState ,AppDispatch} from '../../store/store';
import Header from '../Header/header';
import Slider from '../Slider/slider';
import CountryList from '../Country/countrylist';
import { Container, Alert, Row, Col, Card } from 'react-bootstrap';
import FooterImage from '../../assets/social-icons.png'
const Dashboard: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.country);
  
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchCountries());
      }
    }, [status, dispatch]);
  
    return (
      <Container>
        <Header />
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <Alert variant="danger">{error}</Alert>}
        <Row className="text-center my-3">
          <Col>
            <div className="d-flex align-items-center justify-content-center">
              <hr className="flex-grow-1 mx-2" />
              <h2>WELCOME</h2>
              <hr className="flex-grow-1 mx-2" />
            </div>
          </Col>
        </Row>
        <Row className="text-center mb-4">
          <Col md={10}>
            <Card className="mb-4 bg-light text-center h-100">
              <Card.Body>
                <Slider />
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="mb-4 bg-light text-center h-100">
              <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                <h3>Featured Countries</h3>
                <p>Discover the most popular countries around the world.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <CountryList />
        <Row className="text-center mt-5 mb-3">
          <Col>
            <img src={FooterImage} alt="Footer"  />
            
          </Col>
         
          <small>ramprasathraj.nec@gmail.com</small>
          <small>{new Date().getFullYear()}</small>
         
         
        </Row>
      </Container>
    );
  };

export default Dashboard;