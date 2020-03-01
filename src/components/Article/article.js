import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Tab, Tabs} from "react-bootstrap";
import {Container, Typography} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px 10px',
        width: '100%',
        minWidth: 'auto',
        maxWidth: '800px',
        backgroundColor: theme.palette.background.paper,
    }

}));


const Article = (props) => {

    const classes = useStyles();
    const [key, setKey] = useState('view');
    const [article, setArticle] = useState();

    function downloadArticle(id) {
        return "**Hello**. This is article " + id;
    }

    function fetchArticle() {
        const id = props.match.params.id;
        const article = downloadArticle(id);
        setArticle(article)
    }

    useEffect(() => {
        fetchArticle()
    }, []);

    function onTextChange(event) {
        setArticle(event.target.value);
    }

    return (
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
            <Tab eventKey="view" title="View">
                <Container maxWidth='md' component='div' fixed className={classes.block}>
                    {article}
                </Container>
            </Tab>
            <Tab eventKey="edit" title="Edit">
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Empty"
                    value={article}
                    onChange={event => onTextChange(event)}
                />
            </Tab>
        </Tabs>
    );

};

export default Article
