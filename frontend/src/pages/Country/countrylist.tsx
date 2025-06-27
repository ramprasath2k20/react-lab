import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { loadMore } from '../../store/Slices/CountrySlice';
import { Card, Button, Row, Col } from 'react-bootstrap';

const CountryList: React.FC = () => {
  const { filteredCountries, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.country
  );
  const dispatch = useDispatch();

  const displayedCountries = filteredCountries.slice(0, currentPage * itemsPerPage);

  return (
    <div>
       
      <Row>
        {displayedCountries.map((country) => (
          <Col md={6} key={country.name} className="mb-4">
            <Card className="country-card" >
             
            <Card.Body className="d-flex align-items-center">
                <Card.Img
                    variant="top"
                    src={country.flag}
                    style={{ width: '100px', height: 'auto', marginRight: '15px' }}
                />
                <div>
                    <Card.Title>{country.name}</Card.Title>
                    <Card.Text>Region: {country.region}</Card.Text>
                </div>
            </Card.Body>
            </Card>
          </Col>
        ))}
        {displayedCountries.length < filteredCountries.length && (
        <div className="text-center mt-4 mb-3">
        <Button variant="dark" onClick={() => dispatch(loadMore())}>
          Load More

        </Button>
        </div>
      )}
      </Row>
      
    </div>
  );
};

export default CountryList;