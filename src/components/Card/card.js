import React from 'react';
import {Button, Card, CardDeck, Container} from 'react-bootstrap';
import {makeStyles} from "@material-ui/core/styles";

const useStyles =makeStyles(theme=>({

}));


const News = () => {
    const classes =useStyles();

    return (
        <Container>
            <h2 className='text-center mt-4'>Football news 24 chanel</h2>
            <CardDeck className='mt-5'>
                <Card bg='info' border='warning'>
                    <Card.Img variant='top'
                              src='https://img.championat.com/s/735x490/news/big/d/h/rashford-trebuet-ot-mju-zarplatu-vyshe-chem-u-pogba_1560698990492807713.jpg'/>
                    <Card.Body>
                        <Card.Title>Manchester United to begin</Card.Title>
                        <Card.Text>«С учетом переноса Евро-2020 мы можем начать до 10-12 мая чемпионат, доиграть его в
                            ускоренной форме. Формат соревнований будет тот же, но можно играть не раз в неделю, а через
                            три дня на четвертый или еще больше ускориться.</Card.Text>
                        <Button variant='primary'>About</Button>
                    </Card.Body>
                </Card>
                <Card bg='light' text='muted'>
                    <Card.Img variant='top'
                              src='https://i2.wp.com/bookmaker-ratings.ru/wp-content/uploads/2019/11/manchester-united-team-2-2.jpg?fit=2464%2C1642&ssl=1'/>
                    <Card.Body>
                        <Card.Title>Красный Манчестер празднует</Card.Title>
                        <Card.Text>«С учетом переноса Евро-2020 мы можем начать до 10-12 мая чемпионат, доиграть его в
                            ускоренной форме. Формат соревнований будет тот же, но можно играть не раз в неделю, а через
                            три дня на четвертый или еще больше ускориться.</Card.Text>
                        <Button variant='primary'>About</Button>
                    </Card.Body>
                </Card>
                <Card bg='warning' border='primary'>
                    <Card.Img variant='top'
                              src='https://ss.sport-express.ru/userfiles/materials/142/1421749/large.jpg'/>
                    <Card.Body>
                        <Card.Title>МЮ подписал Бекхема</Card.Title>
                        <Card.Text>«С учетом переноса Евро-2020 мы можем начать до 10-12 мая чемпионат, доиграть его в
                            ускоренной форме. Формат соревнований будет тот же, но можно играть не раз в неделю, а через
                            три дня на четвертый или еще больше ускориться.</Card.Text>
                        <Button variant='primary'>About</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    )
};

export default News;