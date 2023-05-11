import  { Component } from 'react'
import App from './App.jsx'
import logo1 from './assets/logo1.png'

class FetchAPI extends Component{

    constructor(props) {
        super(props);
        this.state = { apiResponse: '' };
    }
    
    callAPI() {
        fetch('http://localhost:9000/testAPI')
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }
    
    componentDidMount() {
        this.callAPI();
    }

    render(){
        return(
            <div>
                <header className="header">
                    <img src={logo1}  className= "logo" alt="logo"></img>
                    <h1>Claudia Lisboa </h1>
                </header>
                <p className="">{this.state.apiResponse}</p>
                <App />
            </div>
        )
    }

}
export default FetchAPI;