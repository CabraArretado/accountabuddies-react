import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from 'react';

//Mods
import Login from "./auth/Login"
import Register from "./auth/Register"
import Home from "./Home/Home"
import Groups from "./Group/Groups"
import CreateGroup from "./Group/CreateGroup"
import GroupPage from "./Group/GroupPage"
import MyGroups from "./Group/MyGroups"
import ForumMain from "./Forum/ForumMain"
import PostDetails from "./Forum/PostDetails"
import NewPostForm from "./Forum/NewPostForm"
import TaskMain from "./Task/TaskMain"
import Profile from "./Profile/Profile"

const ApplicationViews = props => {
    const props_reference = props
    const myGroups = props.myGroups
    const myGroupsId = props.myGroupsId
    const isAuthenticated = props_reference.auth.isAuthenticated

    /*
    TODO:
    - Access the group member only area: Got the check if the groupId requested is present in the myGroupsId array else redirect to sorry page
    */

    return (
    <>
            {/* Router for: Create Group*/}
            <Route
                exact path="/" render={props => {
                    return <Home {...props}/>
                }} />

            {/* Router for: Register */}
            <Route
                exact path="/register" render={props => {
                    return <Register {...props_reference} />
                }}
            />

            {/* Router for: Login */}
            <Route
                exact path="/login" render={props => {
                    return <Login {...props_reference} />
                }}
            />

            {/* Router for: Search Groups */}
            <Route
                exact path="/my_profile" render={props => {
                    if(isAuthenticated())
                    {
                        return <Profile myGroups={props_reference.myGroups} {...props_reference} />
                    }
                    else
                    {
                        return <Redirect to="/" new_error={"Please log in to access groups"}/>
                    }
                }}
            />

            {/* Router for: Search Groups */}
            <Route
                exact path="/groups" render={props => {
                    if(isAuthenticated())
                    {
                        return <Groups getMyGroups={props_reference.getMyGroups} myGroups={props_reference.myGroups} {...props_reference} />
                    }
                    else
                    {
                        return <Redirect to="/" new_error={"Please log in to access groups"}/>
                    }
                }}
            />

            {/* Router for: My Groups*/}
            <Route
                exact path="/my_groups" render={props => {
                    if(isAuthenticated())
                    {
                        return <MyGroups {...props_reference} getMyGroups={props_reference.getMyGroups} myGroups={props_reference.myGroups} />
                    }
                    else
                    {
                        return <Redirect to="/" new_error={"Please log in to access groups"}/>
                    }
                }}
            />

            {/* Router for: Create Group*/}
            <Route
                exact path="/create_group" render={props => {
                    if(isAuthenticated())
                    {
                        return <CreateGroup getMyGroups={props_reference.getMyGroups} {...props_reference} />
                    }
                    else
                    {
                        return <Redirect to="/" new_error={"Please log in to access groups"}/>
                    }
                }}
            />

            {/* Router for: Group Main Page */}
            <Route
                exact path="/groups/:groupId(\d+)" render={props => {
                    if(isAuthenticated())
                    {
                        return <GroupPage getMyGroups={props_reference.getMyGroups} groupId={parseInt(props.match.params.groupId)} {...props} />
                    }
                    else
                    {
                        return <Redirect to="/" new_error={"Please log in to access groups"}/>
                    }
                }}
            />

            {/* Router for: Forum Main Page */}
            <Route
                exact path="/forum/:groupId(\d+)" render={props => {
                    let groupId = parseInt(props.match.params.groupId)
                    
                    if(myGroupsId.includes(groupId)){
                    return <ForumMain  {...props_reference} groupId={parseInt(props.match.params.groupId)}/>
                    }
                    else{ return <Redirect to="/" /> }
                }}
            />

            {/* Router for: Forum Post Details */}
            <Route
                exact path="/forum/:groupId(\d+)/:postId(\d+)" render={props => {
                    let groupId = parseInt(props.match.params.groupId)
                    
                    if(myGroupsId.includes(groupId)){
                    return <PostDetails  {...props_reference} groupId={parseInt(props.match.params.groupId)} postId={parseInt(props.match.params.postId) }/>
                    } else { return <Redirect to="/" /> } 
                }}
            />

            {/* Router for: Forum New Post */}
            <Route
                exact path="/forum/group=:groupId(\d+)/new_post" render={props => {
                    let groupId = parseInt(props.match.params.groupId)

                    if(myGroupsId.includes(groupId)){
                        return <NewPostForm  {...props_reference} groupId={parseInt(props.match.params.groupId)}/>
                    } else {
                        return <Redirect to="/" />
                    }
                }}
            />

            {/* Router for: Tasks */}
            <Route
                exact path="/tasks/group=:groupId(\d+)/" render={props => {
                    let groupId = parseInt(props.match.params.groupId)

                    if(myGroupsId.includes(groupId)){
                        return <TaskMain  {...props_reference} groupId={parseInt(props.match.params.groupId)}/>
                    } else {
                        return <Redirect to="/" />
                    }
                }}
            />
    </>
    )
}

export default ApplicationViews