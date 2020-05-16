import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Tab, Tabs} from "react-bootstrap";
import {Container, TextareaAutosize} from "@material-ui/core";
import ReactMarkdown from "react-markdown";


const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px 10px',
        width: '100%',
        minWidth: 'auto',
        maxWidth: '800px',
        backgroundColor: 'theme.palette.background.paper'
    },
    area: {
        margin: '100px 500px'
    },
    loading: {
        display: 'flex',
        position: 'relative',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '350px',
    },
    submit: {
        border: 'none',
        backgroundColor: '#1e88e5',
        color: '#ffffff',
        padding: '8px',
        borderRadius: '4px',
        position: 'absolute',
        display: 'inline',
        top: '425px',
        right: '920px'
    }
}));


const Article = (props) => {

    const classes = useStyles();
    const [key, setKey] = useState('view');
    // const [article, setArticle] = useState();
    const [area, setArea] = useState('');
    const [text, setText] = useState('');
    setArea.value = '';

// const area = downloadArticle();
//
//     function downloadArticle() {
//             return <ReactMarkdown source={value} escapeHtml={false}/>
//
//         // return "**Hello**. This is article" + id;
//     }

    // function fetchArticle() {
    //     const id = props.match.params.id;
    //     const artice = downloadArticle(id);
    //     setArticle(article)
    // }

    useEffect(() => {
        localStorage.setItem('area', JSON.stringify(area))
    }, [area]);

    useEffect(() => {
        const raw = localStorage.getItem('area') || [];
        setArea(JSON.parse(raw))
    }, []);


    const addText = (event) => {
        setText([
            ...text,
            p.innerHTML += <ReactMarkdown source={event.target.value} escapeHtml={false}/>
            // setArea(<ReactMarkdown source={event.target.value} escapeHtml={false}/>)
        ])
    };

   let p = document.getElementById('block')
    return (
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
            <Tab eventKey="view" title="View">
                <Container maxWidth='md' component='div' fixed className={classes.root}>
                    <div id='block'>Привет{setText}</div>
                </Container>
            </Tab>

            <Tab eventKey="edit" title="Edit">
                <TextareaAutosize
                    cols='40'
                    rows='8'
                    aria-label="empty textarea"
                    placeholder="empty textarea"
                    value={area}
                    onChange={event => setArea(event.target.value)}
                    className={classes.area}
                />

                <input type='submit'
                       onClick={addText}
                       className={classes.submit}
                />
            </Tab>
        </Tabs>
);
};

export default Article;
