
import React, { Component } from 'react';
import {Platform} from 'react-native';

// import components from react-native-router-flux
import {Router, Stack, Scene} from 'react-native-router-flux';

// import our screens as components 
import Home from './screens/Home';
import ViewNews from './screens/ViewNews';

export default class Routes extends Component<{}> {

    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="home" component={Home} title="Home" />
                    <Scene key="viewnews" component={ViewNews} title="View News"/>
                </Stack>
            </Router>
            )
    }
}