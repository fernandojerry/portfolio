import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PortfolioList from '../Components/PortfolioList';
import useGetData from '../useGetData';

function Portfolio() {
  const { data: projects, loading } = useGetData('projects');
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredprojects = projects.filter((item) => item.display === 'project');
    setData(filteredprojects);
  }, [projects]);

  return (
    <section id='portfolio' >
      <Container>
          {
            loading 
              ? <h4>Loading....</h4> 
              : <h6 className='text-primary text-uppercase fw-bold text-center'>Portfolio</h6>
          }
        
          {
            !loading && <PortfolioList data={data} />
          }

      </Container>
    </section>
  );
}

export default Portfolio;
