import React, {useEffect, useState} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Link} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {dark} from "@material-ui/core/styles/createPalette";

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px 10px',
        width: '100%',
        minWidth: 'auto',
        maxWidth: '800px',
        backgroundColor: theme.palette.background.paper,
    },
    loading: {
        display: 'flex',
        position: 'relative',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '350px',
    }

}));


const Questions = () => {
    const classes = useStyles();

    const [items, setItems] = useState();

    useEffect(() => {
        fetchData()
    }, []);


    if (items) {
        return renderList(items);
    } else {
        return renderLoading();
    }


    async function getData() {
        const list = [
            {
                header: 'Лион помешал Роналду продлить голевую серию с начала 2020 года',
                date: '13/1/2011',
                id: "some-id-1"
            },
            {
                header: 'УЕФА может остановить еврокубки из-за коронавируса. Известны подробности',
                date: '14/1/2011',
                id: "some-id-2"
            },
            {
                header: 'Зидан - после поражения от Ман Сити: «Нам не хватило 10 минут»',
                date: '15/1/2011',
                id: "some-id-3"
            },
            {
                header: 'Бенфика - Шахтер: онлайн трансляция матча 1/16 Лиги Европы',
                date: '16/1/2011',
                id: "some-id-4"
            },
        ];

        return delay(1000).then(() => Promise.resolve(list))
    }

    async function delay(delayInms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    }

    async function fetchData() {

        console.log("Hello!!!");

        const data = await getData();

        console.log(data);

        setItems(data);


        // await db.collection('content').get().then(snapshot => {
        //     const items = snapshot.docs.map(doc => {
        //         return doc.data().input
        //     });
        //     setItem(items)
        // })
    }


    function renderList(data) {

        const listItems = data.map((item) =>
            <Link href={'/faq/article/' + item.id} key={item.id} style={{textDecoration: 'none', color: 'inherit'}}>
                <ListItem button divider>
                    <ListItemText
                        primary={item.header}/>
                </ListItem></Link>);

        return (
            <Container maxWidth='md' component='div' fixed>
                {listItems}
            </Container>
        )
    }

    function renderLoading() {
        return (
            <Container maxWidth='md' component='div' fixed className={classes.loading}>
                <CircularProgress size={57}/>
            </Container>
        )
    }

};

export default Questions;