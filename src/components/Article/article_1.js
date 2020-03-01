import React, {useState, useEffect} from 'react';
import {Container, FormControl, TextareaAutosize} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Tab, Tabs} from 'react-bootstrap';
import firebase from '../Firebase/firebase';
import Ron from "../NewsBlock/news_1";

const db = firebase.firestore();


const useStyles = makeStyles(theme => ({}));

const One = () => {
    const classes = useStyles();
    const [key, setKey] = useState('article');

    const [item, setItem] = useState();

    async function fetchData() {
        await db.collection('content').get().then(snapshot => {
            const items = snapshot.docs.map(doc => {
                return doc.data().input
            });
            setItem(items)
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
            <Tab eventKey="article" title="Article">
                <Ron/>
            </Tab>

            <Tab eventKey="formatting" title="Formatting">
                <Container maxWidth='md' component='div' fixed>
                    <FormControl>
                        <TextareaAutosize aria-label="minimum height" rowsMin={15} placeholder="description"/>
                    </FormControl>
                </Container>
            </Tab>
        </Tabs>
    );
};

export default One;