import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
  return (
    <div>
      <h1>About Me</h1>
      <Row xs={1} md={2} className="g-4">
        <Col>
             <Image 
      rounded={true}
      width="300"
      padding="20px"
      src={require('../../assets/img/profile_img.png')}/>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text
              style={{
                fontSize: "20px"
              }}>
                   While working as a healthcare provider at major hospitals in Seattle, I saw great potential in using technology to improve healthcare access and outcomes for underserved communities.  Whether it's building a platform to connect patients with healthcare providers, developing a mobile app to promote health literacy, or conducting research to better understand the social determinants of health, I am committed to making a positive impact in the world through my work.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>

    </div>
  );
}
