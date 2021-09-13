import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Auth from './components/Auth/Auth';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Switch>
                    <Route path='/' exact component={() => <Redirect to="/posts?page=1" />} />
                    <Route path="/posts" exact component={Home} />
                    <Route path="/posts/search" exact component={Home} />
                    <Route path="/post/:id" exact component={PostDetails} />
                    <Route path='/auth' exact component={() => (!(user?.result) ? <Auth /> : <Redirect to="/posts" />)} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;