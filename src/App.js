import React, {Component} from 'react';

/// components ///
// import Header from './components/Header'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // currentView: 'toGet',
            // purchasedItems: [],
            // itemsToGet: [],
            apiResponse: ""
        }
        // this.fetchItems = this.fetchItems.bind(this)
    }
    //
    // handleView(view) {
    //     console.log('Inside App:handleView: ', view)
    //     this.setState({
    //         currentView: view,
    //     })
    // }

    callAPI() {
        fetch("https://mymusic-backend.herokuapp.com/users")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        // fetch('/users')
        // .then(res => res.json())
        // .then(users => this.setState({ users }));
        this.callAPI();
    }

    render() {
        return(
            <div className="main-container">
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
