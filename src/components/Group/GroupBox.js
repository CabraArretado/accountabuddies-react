import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect, withRouter } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import JoinGroupButton from "./JoinGroupButton"
import LinkMUI from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 300,
  },
  bot: {
    bottom: 2,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function GroupBox(props) {

  const classes = useStyles();
  const { group, getMyGroups, my_link, history } = props


  const handleAccessGroup = (e) => {
    history.push(`groups/${group.id}`)
  }

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Grid container align={"center"}>
        <Card className={classes.root} variant="outlined">
          <Grid container alignContent={"center"}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Group
                  </Typography>
              <Typography variant="h5" component="h2" className={classes.mytitle}>
                {my_link ? <>
                  <LinkMUI onClick={handleAccessGroup} color="inherit">{group.title}</LinkMUI>
                </>
                  : <>
                    {group.title}
                  </>
                }
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Open
                </Typography>

              <Typography variant="body2" component="p">
                {group.description}
              </Typography>
            </CardContent>
            <CardActions className={classes.bot}>
              {props.is_my_group ? null : <JoinGroupButton getMyGroups={getMyGroups} groupId={group.id} history={history} {...props} />}
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </>
  );
}

export default withRouter(GroupBox)