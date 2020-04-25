import React from 'react';
import {Button, Card, CardDeck, Container} from 'react-bootstrap';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({



}));

const News = () => {
    const classes = useStyles();

    function readMore() {
        const points = document.getElementById('dotsO');
        const moreText = document.getElementById('moreO');
        const buttonText = document.getElementById('myButton_1');

        if (points.style.display === "none") {
            points.style.display = "inline";
            buttonText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            points.style.display = "none";
            buttonText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

    function readMoreTwo() {
        const points = document.getElementById('dotsT');
        const moreText = document.getElementById('moreT');
        const buttonText = document.getElementById('myButton_2');

        if (points.style.display === "none") {
            points.style.display = "inline";
            buttonText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            points.style.display = "none";
            buttonText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

    function readMoreThree() {
        let points = document.getElementById('dotsTh');
        let moreText = document.getElementById('moreTh');
        let buttonText = document.getElementById('myButton_3');

        if (points.style.display === "none") {
            points.style.display = "inline";
            buttonText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            points.style.display = "none";
            buttonText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

    return (
        <Container>
            <h2 className='text-center mt-4'>Football news 24 chanel</h2>
            <CardDeck className='mt-5'>
                <Card bg='info' border='warning'>
                    <Card.Img variant='top'
                              src='https://img.championat.com/s/735x490/news/big/d/h/rashford-trebuet-ot-mju-zarplatu-vyshe-chem-u-pogba_1560698990492807713.jpg'/>
                    <Card.Body>
                        <Card.Title>Manchester United to begin</Card.Title>
                        <Card.Text>«С учетом переноса Евро-2020 мы можем начать до 10-12 мая чемпионат, доиграть<span
                            id='dotsO'>...</span><span id='moreO' style={{display: 'none'}}> его в
                            ускоренной форме. Формат соревнований будет тот же, но можно играть не раз в неделю, а через
                            три дня на четвертый или еще больше ускориться. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span></Card.Text>
                        <Button variant='primary' onClick={readMore} id='myButton_1'>Read more</Button>
                    </Card.Body>
                </Card>
                <Card bg='light' text='muted'>
                    <Card.Img variant='top'
                              src='https://s.ill.in.ua/i/news/630x373/419/419952.png'/>
                    <Card.Body>
                        <Card.Title>АПЛ вряд ли возобновится до 8 июня — Sky Sports</Card.Title>
                        <Card.Text>Клубы английской Премьер-лиги по-прежнему намерены завершить нынешний сезон, который
                            взял бессрочную паузу из-за пандемии коронавируса,<span id='dotsT'>...</span><span id='moreT'
                                                                                                             style={{display: 'none'}}> но предложение о завершении кампании к 30 июня даже не рассматривалось на их встрече 17 апреля. Об этом сообщает Sky Sports.
                            По информации источника, представители всех клубов высшего английского дивизиона и руководство лиги провели совместную беседу по видеосвязи, во время которой рассмотрели различные варианты решения данной проблемы.</span></Card.Text>
                        <Button variant='primary' onClick={readMoreTwo} id='myButton_2'>Read more</Button>
                    </Card.Body>
                </Card>
                <Card bg='warning' border='primary'>
                    <Card.Img variant='top'
                              src='https://img.championat.com/news/big/m/l/kto-skinet-s-trona-juventus-glavnye-intrigi-chempionata-italii_1440235598356310837.jpg'/>
                    <Card.Body>
                        <Card.Title>В Италии разработали протокол возрождения футбола</Card.Title>
                        <Card.Text>Федерация футбола Италии под руководством ее президента Габриэле Гравины и
                            медицинская комиссия, входящая в нее, <span id='dotsTh'>...</span><span id='moreTh' style={{display:'none'}}> вместе со специально приглашенными специалистами в
                            области эпидемиологии, разработали поэтапный протокол, представленный министру спорта
                            Винченцо Спадафоре, согласно которому должно проходить возрождение футбола в стране, за
                            который (или против которого) в среду, 22 апреля, проголосуют в режиме видеоконференции
                                представители всех лиг Италии — сообщает <a href='https://www.campionando.it/fixture-detail.php?id=859552'>Campionando.it</a></span></Card.Text>
                        <Button variant='primary' onClick={readMoreThree} id='myButton_3'>Read more</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    )
};

export default News;