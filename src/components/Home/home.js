import React from 'react';
import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';
import {formatMs, makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    block: {
        fontFamily: 'Roboto',
        paddingTop: '15px',
        backgroundColor: '#f5f5f5',
        height: '100vh',
        padding: '30px'
    },

    link: {
        fontFamily: 'Roboto',
        color: 'black',
        '&: active': {
            color: 'white'
        },
        '&: hover': {
            color: '#ba68c8'
        }
    }
}));

const Home = () => {
    const classes = useStyles();

    // const hours =new Date("2020-05-31 14:46:30").getHours() - new Date().getHours();
    // const min = new Date("2015-05-31 14:46:30").getMinutes() - new Date().getMinutes();
    return (
        <Container>
            <Tab.Container defaultActiveKey='first'>
                <Row>
                    <Col sm={4}>
                        <h2>Актуальные новости</h2>
                        <Nav variant='pills' className='flex-column mt-4 justify-content-center'>
                            <Nav.Item>
                                {/*<div>{`${hours}:${min}`}</div>*/}
                                <Nav.Link className={classes.link} eventKey='first'>Лион - Ювентус: букмекеры ожидают
                                    победу гостей и голы от Роналду</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={classes.link} eventKey='second'>Легендарный Анри признался, какой
                                    клуб он мечтает возглавить</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={classes.link} eventKey='third'>Лион - Ювентус: где смотреть матч
                                    Лиги чемпионов</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={classes.link} eventKey='fourth'>Официально: УЕФА дисквалифицировал
                                    форварда сборной Украины на 1 год за употребление допинга</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={classes.link} eventKey='fifth'>Гвардиола стал рекордсменом Лиги
                                    чемпионов. Тренер Ман Сити превзошел Фергюсона и Моуриньо</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content className={classes.block}>
                            <Tab.Pane eventKey='first'>
                                <h3>Лион - Ювентус: букмекеры ожидают победу гостей и голы от Роналду</h3>
                                <img
                                    src='https://cdn.footballua.tv/i/image_650x360/uploads/football-media/image/5e3/6d4/22d/5e36d422d5a1f_ronaldu.png'
                                    alt='Криштиану Роналду'/>
                                <p>В среду, 26 февраля, на стадионе «Парк Олимпик Лион» во французском Лионе состоится
                                    первый матч 1/8 финала Лиги чемпионов, в котором встретятся Лион и Ювентус. Время
                                    начала встречи - 22:00. Стали известны котировки букмекеров.</p>
                                <p>По прогнозам букмекеров, фаворитом матча являются гости. Коэффициент на победу Юве
                                    составляет 2.02. Успех «ткачей» оценивается в 4.05, а на ничью можно поставить с
                                    коэффициентом 3.45. В матче ожидается много голов. Если вы считаете, что обе команды
                                    забьют, то можете поставить на данное событие с коэффициентом 1.86. Наиболее
                                    вероятным автором гола является Криштиану Роналду (1.75). Также можете поставить на
                                    хет-трик португальца, если верите в него. Коэффициент - 16.00.</p>
                                <p>Команды по-разному провели групповой раунд Лиги чемпионов. Ювентус уверенно выиграл
                                    группу с Атлетико, Байером и Локомотивом, лишь раз потеряв очки (в Мадриде). Что
                                    касается французов, то лишь в последнем матче команда Руди Гарсии вырвала путевку в
                                    плей-офф благодаря ничьей в домашней игре с Лейпцигом (2:2). Этот балл позволил
                                    оставить позади Бенфику и Зенит. Причем, французы были на грани вылета, поскольку
                                    проигрывали «быкам» после первого тайма 0:2.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <h3>Легендарный Анри признался, какой клуб он мечтает возглавить</h3>
                                <img
                                    src='https://cdn.footballua.tv/i/image_650x360/uploads/football-www/novosti/15331144153477.jpg'/>
                                <p>Бывший форвард лондонского Арсенала Тьерри Анри признался, что вершиной в его
                                    тренерской карьере стала бы работа во главе «канониров». Об этом он в шутливой
                                    манере рассказал в эфире Canal+</p>
                                <i><b>«Да, я мечтаю возглавить Арсенал. Но я также мечтаю о том, чтобы подняться на корт
                                    и сделать слэм-данк. Возможно, этоо никогда не произойдет. Пока я жив, хотел бы
                                    возглавить лондонский Арсенал. Это уже было трудно сделать даже до ухода Арсена
                                    Венгера».</b></i><br/><br/>
                                <p>После завершения игровой карьеры в 2014 году Анри работал с одной из юношеских команд
                                    Арсенала, затем несколько лет помогал сборной Бельгии во главе с Роберто Мартинесом,
                                    после чего отправился в самостоятельное плавание, потерпев неудачу в родном для себя
                                    Монако.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <h3>Лион - Ювентус: где смотреть матч Лиги чемпионов</h3>
                                <img
                                    src='https://cdn.footballua.tv/i/image_650x360/uploads/football-media/image/5e2/7ec/5c4/5e27ec5c4db76_.png'/>
                                <p>В среду, 26 февраля, на стадионе «Парк Олимпик Лион во французском Лионе состоится
                                    первый матч 1/8 финала Лиги чемпионов, в котором встретятся Лион и Ювентус. Время
                                    начала встречи - 22:00. Обращаем ваше внимание, что на нашем сайте будет доступна <a
                                        style={{color: '#7c4dff'}}
                                        href='https://footballua.tv/news/80636-lion-yuventus-onlayn-translyaciya-matcha-1-8-finala-ligi-chempionov'>онлайн-трансляция
                                        матча Лион - Ювентус.</a></p>
                                <p><b>Где смотреть поединок между Лионом и Ювентусом?</b> В прямом эфире матч будет
                                    показан на телеканале <b>Футбол 1.</b> Также посмотреть игру в прямой трансляции
                                    можно будет на <b><a style={{color: '#7c4dff'}}
                                                         href='https://oll.tv/uk/football/66233/483906'>OLL.TV.</a></b>
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fourth'>
                                <h3>Официально: УЕФА дисквалифицировал форварда сборной Украины на 1 год за употребление
                                    допинга</h3>
                                <img
                                    src='https://cdn.footballua.tv/i/image_650x360/uploads/football-media/image/5df/dbd/642/5dfdbd6422886_besedin.png'/>
                                <p>В декабре прошлого года форвард Динамо Артем Беседин был пойман на употреблении
                                    допинга. Футболисту грозила дисквалификация сроком на 4 года.</p>
                                <p>Тем не менее, вчера УЕФА рассмотрел дело форварда сборной Украины и принял решение
                                    отстранить игрока от футбола сроком на 1 год. Об этом Динамо сообщило на своем
                                    официальном сайте. Дело рассматривалось в Апелляционном органе УЕФА по ускоренной
                                    процедуре без предварительного рассмотрения Контрольным, этическим и дисциплинарным
                                    органом по ходатайству самого Беседина.</p>
                                <p>Киевляне отмечают, что изучат возможность подачи апелляции на решение органа после
                                    получения соответствующих документов. Учитывая, что с 19 декабря прошлого года Артем
                                    был уже временно отстранен от игры, срок дисквалификации завершится 19 декабря 2020
                                    года. Таким образом, участие Беседина на Евро-2020 исключено.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fifth'>
                                <h3>Гвардиола стал рекордсменом Лиги чемпионов. Тренер Ман Сити превзошел Фергюсона и
                                    Моуриньо</h3>
                                <img
                                    src='https://cdn.footballua.tv/i/image_650x360/uploads/football-media/image/5e3/82e/e9e/5e382ee9e6e61_ep257yswaae4au5.jpeg'/>
                                <p>Накануне Манчестер Сити обыграл Реал Мадрид в первом матче 1/8 лиги чемпионов.
                                    Финальный свисток арбитра зафиксировал счет 2:1.</p>
                                <p>Данная победа стала для наставника Ман Сити Хосепа Гвардолы 28-й в рамках плей-офф
                                    Лиги чемпионов. По данному показателю специалист стал рекордсменом турнира. Испанец
                                    превзошел Жозе Моуриньо, Карло Анчелотти и Алекса Фергюсона, на счету которых – по
                                    27 побед.</p>
                                <p>Добавим, ответный матч Ман Сити и Реала состоится 17 марта. Предлагаем вам
                                    ознакомиться со всеми результатами первых матчей 1/8 финала Лиги чемпионов.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
};

export default Home;