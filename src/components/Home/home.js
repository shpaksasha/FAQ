import React from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

const Home = () => {
  return(
      <Container>
          <Tab.Container defaultActiveKey='first'>
              <Row>
                  <Col sm={8}>
                      <h3>Актуальные новости</h3>
                      <Nav variant='pills' className='flex-column mt-4 justify-content-center'>
                          <Nav.Item>
                              <Nav.Link eventKey='first'>Лион - Ювентус: букмекеры ожидают победу гостей и голы от Роналду</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='second'>Легендарный Анри признался, какой клуб он мечтает возглавить</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='third'>Лион - Ювентус: где смотреть матч Лиги чемпионов</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='fourth'>Официально: УЕФА дисквалифицировал форварда сборной Украины на 1 год за употребление допинга</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='fifth'>Наполи - Барселона Онлайн трансляция</Nav.Link>
                          </Nav.Item>
                      </Nav>
                  </Col>
              </Row>
          </Tab.Container>
      </Container>
  )
};

export default Home;