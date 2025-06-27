import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../store/Slices/CountrySlice';
import type { RootState ,AppDispatch} from '../../store/store';
import Header from '../Header/header';
import Slider from '../Slider/slider';
import CountryList from '../Country/countrylist';
import { Container, Alert, Row, Col, Card } from 'react-bootstrap';
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
          <Col md={12}>
            <Card className="mb-4 bg-light text-center">
              <Card.Body>
                <Slider />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <CountryList />
      </Container>
    );
  };

export default Dashboard;