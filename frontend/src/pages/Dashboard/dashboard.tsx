import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../store/Slices/CountrySlice';
import type { RootState } from '../../store/store';
import Header from '../Header/header';
import Slider from '../Slider/slider';
import CountryList from '../Country/countrylist';
import { Container, Alert, Row, Col, Card } from 'react-bootstrap';

import socaiicon from '../../assets/social-icons.png';
const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
    const { status, error, filteredCountries } = useSelector((state: RootState) => state.country);
    const [currentIndex, setCurrentIndex] = useState(0);
    const featuredCountries = filteredCountries.slice(0, 5); // Show first 5 countries

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCountries());
        }
    }, [status, dispatch]);

    return (
        <>
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
                    <Col md={8}>
                        <Card className="mb-4 bg-light text-center">
                            <Card.Body>
                                <Slider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        {featuredCountries.length > 0 && (
                            <Card className="text-center bg-light">
                                <Card.Body>
                                    <img
                                        src={featuredCountries[currentIndex].flag}
                                        alt={featuredCountries[currentIndex].name}
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                    <p>{featuredCountries[currentIndex].name}</p>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
                <CountryList />

            </Container>
            <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                <div className="mb-2">
                    
                    <img src={socaiicon} alt="Social Icon"  className='bg-white' />
                </div>
                
                <div className="text-center">
                    <small>ram@gmail.com</small>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="material-icons" style={{ fontSize: '16px', marginRight: '4px' }}>copyright</span>
                        <small>{new Date().getFullYear()}</small>
                    </div>
                </div>
                </div>
            
         
        </>
    );
};

export default Dashboard;