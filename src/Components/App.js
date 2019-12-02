import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Redirect from="/about-page" to="/about" />
                <Route path="/course/:slug" component={ManageCoursePage} /> 
                {/* the route with the slug is on top so that the slug is called, o/wse, it would never match */}
                <Route path="/course" component={ManageCoursePage} />
                <Route component={NotFoundPage} />
            </Switch>

        </div>
    );
}

export default App;