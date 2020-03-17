import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Tab, Tabs} from "react-bootstrap";
import {Container, TextareaAutosize, CircularProgress} from "@material-ui/core";
import Markdown from 'react-textarea-markdown';
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
        margin: '300px auto'
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


const Article = (props) => {

    const classes = useStyles();
    const [key, setKey] = useState('view');
    const [article, setArticle] = useState();


    function downloadArticle(id) {
        // const newItem = setArticle.map((value)=>{
        //     return <ReactMarkdown source={value} escapeHtml={false}/>
        // });
        return "**Hello**. This is article " + id;
    }

    function fetchArticle() {
        const id = props.match.params.id;
        const article = downloadArticle(id);
        setArticle(article)
    }

    useEffect(() => {
        fetchArticle()
    }, [setArticle]);


    function onTextChange(event) {
        setArticle(event.target.value);
    }

        return (
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="view" title="View">
                    <Container maxWidth='md' component='div' fixed className={classes.root}>
                        {article}
                    </Container>
                </Tab>
                <Tab eventKey="edit" title="Edit">
                    <TextareaAutosize
                        cols='30'
                        rows='10'
                        aria-label="empty textarea"
                        placeholder="Empty"
                        value={article}
                        onChange={event => onTextChange(event)}
                        className={classes.area}
                    />
                    {/*<Markdown textarea={true} Width={[0,100]} value={article} placeholder="Empty" onChange={event => onTextChange(event)} className={classes.area}/>*/}
                </Tab>
            </Tabs>
        );
};

export default Article;
