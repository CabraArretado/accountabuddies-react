import React, { useRef } from "react"
import { useHistory, Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const Home = props => {

    const useStyles = makeStyles((theme) => ({
        questions: {
            "color": "green"
        }
    }));
    const classes = useStyles();

    return (
        <main className={"main"} style={{textAlign:"center"}}>
                <Typography component="h1" variant="h3">
                    Welcome to Account-a-buddies!
            </Typography>
            <br />
            <br />
            <Typography className={classes.questions} component="h1" variant="h4">
                    What is Account-a-buddies? 
            </Typography>
            <Typography component="h1" variant="h6">
            Account-a-buddies is an app to help people change unwanted behaviors and habits using accountability.
            </Typography>
            <br />
            <br />
            <Typography className={classes.questions}  component="h1" variant="h4">
            Accountability?
            </Typography>
            <Typography component="h1" variant="h6">
            Yes! By explicating and monitoring some bad habit to other people we become more self-aware and start to eliminate them by ourselves! 
            </Typography>
            <Typography className={classes.questions}  component="h1" variant="h4">
            How can I do that?
            </Typography>
            <Typography component="h1" variant="h6">
            Join in a group or create one!
            </Typography>
        </main>
    )
}
 export default Home