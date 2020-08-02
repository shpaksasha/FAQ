import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import so from './about.module.css'

const useStyles = makeStyles(theme=>({
root: {
fontSize: '2em'
}
}))

const About = () => {
    const classes = useStyles();
    return (
        <div className={so.bad}>
<p className={classes.root}>Hello</p>
        </div>
    )
}

export default About;