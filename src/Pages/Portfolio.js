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
    <section id='portfolio' className='container-fluid pt-lg-3 pt-5 ps-2 pe-2 ps-md-5 pe-md-5'>
      <Container className='ps-xl-3 pe-xl-3 pt-md-4'>
        <Row className='ps-xl-3 pe-xl-3'>
          <Col sm={12}>
            {
              loading 
                ? <h4>Loading....</h4> 
                : <h6 className='text-primary text-uppercase fw-bold text-center'>Portfolio</h6>
            }
          </Col>
          {
            !loading && <PortfolioList data={data} />
          }
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
