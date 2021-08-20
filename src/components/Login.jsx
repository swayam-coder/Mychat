import React from 'react';
import "firebase/app";
import { Paper } from '@material-ui/core';
import { auth } from '../firebase';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import firebase from 'firebase/app';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        margin: 'auto',
        position: 'relative',
        top: 150,
        padding: '120px 0px 120px 0px',
        borderRadius: '25px'
    },
    btn1: {
        padding: "0px 50px"
    },
    btn2: {
        padding: "0px 60px"
    },
    button1: {
        margin: 20,
        backgroundColor: "#DD4D3F",
        color: "white"
    },
    button2: {
        margin: 20,
    }
}));

export default function Login() {
    const classes = useStyles();
    return (
        <div style={{backgroundColor: "#FFC107", height: 720}}>
            <h1 className="heading">Sudan Tech Project by Swayam Nayak</h1>
            <Paper elevation={3} className={classes.root}>
                <h2 className="welcome">Login With</h2>
                <div style={{textAlign: "center"}}>
                    <Button 
                        variant="contained" 
                        className={classes.button1} 
                        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                        <span className={classes.btn2}><i class="fab fa-google"></i>&nbsp;Google</span> 
                    </Button>
                    <h4>or</h4>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button2}
                        onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                    >
                        <span className={classes.btn1}><i class="fab fa-facebook"></i>&nbsp;Facebook</span>
                    </Button>
                </div>
            </Paper>
        </div>
    )
}
