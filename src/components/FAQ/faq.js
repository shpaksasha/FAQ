import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px 10px',
        width: '100%',
        minWidth: 'auto',
        maxWidth: '800px',
        backgroundColor: theme.palette.background.paper,
    }

}));


const Questions = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='md' component='div' fixed>
            <List component="div" className={classes.root} aria-label="mailbox folders">

                <Link href='/faq/article_1' style={{textDecoration: 'none', color: 'inherit'}}>
                    <ListItem button divider>
                        <ListItemText primary="Лион помешал Роналду продлить голевую серию с начала 2020 года"/>
                    </ListItem></Link>

                <Link href='/faq/article_2' style={{textDecoration: 'none', color: 'inherit'}}>
                    <ListItem button divider>
                        <ListItemText
                            primary="УЕФА может остановить еврокубки из-за коронавируса. Известны подробности"/>
                    </ListItem></Link>

                <ListItem button divider>
                    <ListItemText primary="Зидан - после поражения от Ман Сити: «Нам не хватило 10 минут»"/>
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Бенфика - Шахтер: онлайн трансляция матча 1/16 Лиги Европы"/>
                </ListItem>
            </List>
        </Container>
    )
};

export default Questions;