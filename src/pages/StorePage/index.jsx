import React from 'react';
import {SideBar2} from '../../components/SideBar2/sidebar2';
import {CardLojas} from '../../components/Card-lojas/card-lojas';
import './style.scss';
import {Header} from '../../components/Header/header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';








export function StorePage() {



  


    return (

        <React.Fragment>

            <SideBar2/>
            
                <section className='main-container store-container'>
                 <Header />

                 <Container>
      <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
                 

                    
                    

                </section>

        </React.Fragment>
        
        

          
            
    )
  }

  export default StorePage;

