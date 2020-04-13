import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Tab, Tabs} from "react-bootstrap";
import {Container, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    block: {
        flexGrow: 1,
        backgroundColor: '#eeeeee',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    title: {
        padding: '10px 20px',
        fontWeight: 'bold',
        fontSize: '1.6em'
    },
    text: {
        paddingLeft: '20px'
    },
    one: {
        paddingTop: '35px'
    }
}));

const Two = () => {
    const classes = useStyles();
    const [key, setKey] = useState('home');
    return (
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
            <Tab eventKey="home" title="Article">
                <Container maxWidth='md' component='div' fixed className={classes.block}>
                    <Typography className={classes.title}>УЕФА может остановить еврокубки из-за коронавируса. Известны
                        подробности</Typography>
                    <img width='960px'
                         src='https://img.uefa.com/imgml/uefacom/ucl/social/og-default.jpg'
                         alt='UEFA'/>
                    <Typography className={classes.text}>
                        <p className={classes.one}>Проведение турниров под эгидой УЕФА будет приостановлено в случае
                            ухудшения ситуации с эпидемией коронавируса. Об этом сообщил вице-президент союза Мишель
                            Ува:</p>
                        <p><i>- Мы находимся в стадии ожидания и отслеживаем ситуацию. Футбол должен подстраиваться под
                            законодательство стран. Мы стараемся не останавливаться, но если ситуация будет ухудшаться,
                            турниры придется отменить.</i></p>
                        <p>Отметим, среди европейских стран больше всего от коронавируса страдает Италия. Ранее были
                            перенесены несколько матчей 25 тура Серии А, в частности – свой поединок не сыграла Аталанта
                            Руслана Малиновского. В свою очередь, в 26 туре шесть игр пройдут при пустых трибунах.</p>
                    </Typography>
                </Container>
            </Tab>
            <Tab eventKey="profile" title="Formatting">

            </Tab>
        </Tabs>
    )
};

export default Two;