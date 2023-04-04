import React from "react";
import Searchinput from './SearchInput';
import axios from "axios";
import ImageList from "./imagelist";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { images : []}
        this.onSearchSubmit =this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit(entry){
        const response = await axios.get(`https://pixabay.com/api/?key=31108819-68a452dbe439af046ed0aa503&q=${entry}&image_type=photo`)
        this.setState({iamges: response.data.hits})
    }
    render(){
        return(
        <div className="ui container" style={{marginTop:'30px'}}>
            <Searchinput  onSearchSubmit={this.onSearchSubmit}/>
            <ImageList 
            images = {this.state.images}/>
        </div>
        )
    }
}

export default App;