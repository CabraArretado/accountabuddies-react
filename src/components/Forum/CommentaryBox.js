import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import DeleteCommentaryButton from "./DeleteCommentaryButton"
import API from "../../modules/data_module"
import EditCommentaryForm from "./EditCommentaryForm"
import EditCommentaryButton from "./EditCommentaryButton"

// moods

const CommentaryBox = (props) => {
    let groupId = props.groupId
    let id = props.id
    let profile = props.profile
    let getCommentaries = props.getCommentaries
    const commentary = props.commentary

    const [ editing, setEditing ] = useState(false)

    const triggerForm = () => {
        setEditing(!editing)
    }

    return <>
    { 
        editing
        ?  
        <EditCommentaryForm getCommentaries={getCommentaries} triggerForm={triggerForm} groupId={groupId} postId={id} commentary={commentary} />
        : 
        <div className="">
            <h1>{commentary.title}</h1>
            <h5>{commentary.user.first_name} at {commentary.created_at} </h5>
            <h4>{commentary.content}</h4>
            { commentary.user.id == profile.id ? <> <EditCommentaryButton triggerForm={triggerForm} /> <DeleteCommentaryButton groupId={groupId} commentaryId={commentary.id} getCommentaries={getCommentaries} table={"forum_post"} postId={id} /> </>: null }
        </div>
    }
    </>
};

export default CommentaryBox;

// import React, { useState, useEffect, useRef } from 'react';
// import { Link, Redirect } from "react-router-dom";
// import { Button, Form, Input, FormGroup } from 'react-bootstrap';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Paper from '@material-ui/core/Paper';
// import Fab from '@material-ui/core/Fab';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import Avatar from '@material-ui/core/Avatar';
// import MenuIcon from '@material-ui/icons/Menu';
// import AddIcon from '@material-ui/icons/Add';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';

// import API from "../../modules/data_module"

// // moods

// const CommentaryBox = (props) => {
//     const classes = useStyles();

//     const useStyles = makeStyles((theme) => ({
//         text: {
//           padding: theme.spacing(2, 2, 0),
//         },
//         paper: {
//           paddingBottom: 50,
//         },
//         list: {
//           marginBottom: theme.spacing(2),
//         },
//         subheader: {
//           backgroundColor: theme.palette.background.paper,
//         },
//         appBar: {
//           top: 'auto',
//           bottom: 0,
//         },
//         grow: {
//           flexGrow: 1,
//         },
//         fabButton: {
//           position: 'absolute',
//           zIndex: 1,
//           top: -30,
//           left: 0,
//           right: 0,
//           margin: '0 auto',
//         },
//       }));

//     let post = props.post
//     const commentary = props.commentary
//     //TODO: formate the date

// //     <List className={classes.list}>
// //     {messages.map(({ id, primary, secondary, person }) => (
// //       <React.Fragment key={id}>
// //         <ListItem button>
// //           <ListItemAvatar>
// //             <Avatar alt="Profile Picture" src={person} />
// //           </ListItemAvatar>
// //           <ListItemText primary={commentary.title} secondary={commentary.content} />
// //         </ListItem>
// //       </React.Fragment>
// //     ))}
// //   </List>
//     return <>
//         <ListItem button>
//           <ListItemAvatar>
//             <Avatar alt="Profile Picture" src={null} />
//           </ListItemAvatar>
//           <ListItemText primary={commentary.title} secondary={commentary.content} />
//         </ListItem>
//     </>
// };

// export default CommentaryBox;