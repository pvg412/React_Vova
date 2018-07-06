import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Header from './component/Header/Header';
// import Team from './component/Team/Team';
// import Gallery from './component/Gallery/Gallery';
import Routers from './rout';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            gallery: [],
        }
    }

    componentDidMount() {
        const endPoint = 'https://pixabay.com/api/?key=';
        const apiKey = '5018958-ed49ccd90878e6614abdf24a6';
        fetch(`${endPoint}${apiKey}&category=food&order=popular&per_page=9`)
            .then((response) => response.json())
            .then((data) => this.setState({...this.state, gallery: data.hits}))
            .then(() => console.log(this.state))
    }

    render() {
        const {gallery} = this.state;
        return (
            <div className="App">
                <h2>Simple Routing and subrouting</h2>
                <Header/>
                <div className="content">
                    <Switch>
                        <Routers gallery={gallery}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
