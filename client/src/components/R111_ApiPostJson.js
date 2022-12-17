import React, {Component} from 'react';
import axios from 'axios';

class R111_ApiPostJson extends Component {
    componentDidMount(){
        axios.post('/users', {
        }).then(res =>{
            console.log("response.data.message : "+res.data.message)
        }).catch((error)=>{console.log(error)});
    }

    render(){
        return (
            <h1>Call Node Api Post</h1>
        )
    }
}
export default R111_ApiPostJson;