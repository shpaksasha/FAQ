import React from 'react';
import {Card, Container} from "react-bootstrap";

const State = () =>{
  return(
      <Container>
          <Card bg='info' border='warning'>
              <Card.Img variant='top'
                        src='https://img.championat.com/s/735x490/news/big/d/h/rashford-trebuet-ot-mju-zarplatu-vyshe-chem-u-pogba_1560698990492807713.jpg'/>
              <Card.Body>
                  <Card.Title>Manchester United to begin</Card.Title>
                  <Card.Text>«С учетом переноса Евро-2020 мы можем начать до 10-12 мая чемпионат, доиграть его в
                      ускоренной форме. Формат соревнований будет тот же, но можно играть не раз в неделю, а через
                      три дня на четвертый или еще больше ускориться.</Card.Text>
              </Card.Body>
          </Card>
      </Container>
  )
};

export default State;