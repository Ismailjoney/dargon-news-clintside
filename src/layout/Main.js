import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                       <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col  lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>

        //    <Container>
        //         <Row>
        //             <Col lg="2">
        //                 <h2>navation</h2>
        //             </Col>
        //             <Col lg="5">
        //                 <Outlet></Outlet>
        //             </Col>
        //             <Col lg="3">
        //                 <h2>Right nav</h2>
        //             </Col>
        //         </Row>
        //    </Container>

    );
};

export default Main;