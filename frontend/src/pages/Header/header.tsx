import { useDispatch } from 'react-redux';
import { filterByRegion } from '../../store/Slices/CountrySlice';
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [activeRegion, setActiveRegion] = useState<string>('All');

  const handleFilter = (region: string) => {
    setActiveRegion(region);
    dispatch(filterByRegion(region));
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Navbar.Brand>Countries</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link
          onClick={() => handleFilter('All')}
          className={activeRegion === 'All' ? 'active' : ''}
        >
          All
        </Nav.Link>
        <Nav.Link
          onClick={() => handleFilter('Asia')}
          className={activeRegion === 'Asia' ? 'active' : ''}
        >
          Asia
        </Nav.Link>
        <Nav.Link
          onClick={() => handleFilter('Europe')}
          className={activeRegion === 'Europe' ? 'active' : ''}
        >
          Europe
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;