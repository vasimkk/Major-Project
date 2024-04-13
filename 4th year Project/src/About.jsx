/*
            <Row className="mt-5">
             <img src="https://thebridgeteencenter.org/uploads/_1200x630_crop_center-center_82_none/Thrift-Store-Header-lo-res.jpg?mtime=1635974539" alt="About Us" className="img-fluid" style={{ height: '250px', objectFit: 'cover' }} />
            </Row>
            */
            
            import React from 'react';
            import { Container, Row, Col } from 'react-bootstrap';
            
            const AboutPage = () => {
                return (
                    <section className="bg-light">
                        <Container>
                        <Row className="mt-5">
                <img src="https://thebridgeteencenter.org/uploads/_1200x630_crop_center-center_82_none/Thrift-Store-Header-lo-res.jpg?mtime=1635974539" alt="About Us" className="img-fluid" style={{ height: '250px', objectFit: 'cover' }} />
                </Row>
                <hr></hr>
                 <Row className="mt-5">
                 <Col md={12}>
                <h2>About Us</h2>
                <h4>Welcome to our second-hand marketplace! We believe in the value of buying and selling pre-loved items, and here's why:</h4>
                </Col>
                </Row>
                <hr></hr>
                            <Row className="mt-4">
                                <Col md={6}>
                                    <h3>Benefits for Buyers:</h3>
                                    <ul>
                                        <li>Cost Savings: Second-hand products are typically sold at a fraction of the original retail price.</li>
                                        <li>Quality and Variety: Thrift stores often carry a diverse range of products, including vintage items and designer clothing.</li>
                                        <li>Environmental Impact: Buying second-hand helps to conserve natural resources and reduce waste.</li>
                                        <li>Supporting Local Communities: Purchasing from thrift stores supports local businesses and non-profit organizations.</li>
                                        <li>Opportunity for DIY and Upcycling: Second-hand items can be repurposed and customized for creative projects.</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h3>Benefits for Sellers:</h3>
                                    <ul>
                                        <li>Decluttering and Simplifying: Selling second-hand products allows individuals to declutter their homes.</li>
                                        <li>Earn Extra Income: Selling unwanted items provides an additional source of income.</li>
                                        <li>Environmental Responsibility: Selling items instead of throwing them away contributes to waste reduction.</li>
                                        <li>Social and Community Engagement: Participating in resale markets fosters connections within the community.</li>
                                        <li>Preserving History and Tradition: Selling vintage or antique items preserves cultural heritage.</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                );
            };
            
            export default AboutPage;
            