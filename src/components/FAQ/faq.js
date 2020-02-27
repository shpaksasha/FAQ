import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme =>({
    root: {
        margin: '50px 10px',
        width: '100%',
        maxWidth: '700px',
        backgroundColor: theme.palette.background.paper,
    },
    links:{

    }
}));


const Questions = () =>{
   const classes = useStyles();
    return(
        <List component="div" className={classes.root} aria-label="mailbox folders">
            <Link className={classes.links} href='#' color='black' underline='none' >
            <ListItem  divider>
                <ListItemText primary="Лион помешал Роналду продлить голевую серию с начала 2020 года" />
            </ListItem>
            </Link>
            <ListItem divider>
                <ListItemText primary="УЕФА может остановить еврокубки из-за коронавируса. Известны подробности" />
            </ListItem>
            <ListItem button divider>
                <ListItemText primary="Зидан - после поражения от Ман Сити: «Нам не хватило 10 минут»" />
            </ListItem>
            <ListItem button divider>
                <ListItemText primary="Бенфика - Шахтер: онлайн трансляция матча 1/16 Лиги Европы" />
            </ListItem>
        </List>
    )
};

export default Questions;