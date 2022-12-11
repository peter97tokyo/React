import React, {Component} from 'react';


class R109_reactProxy extends Component {

    // componentDidMount, async, await, fetch
    componentDidMount = async ()=> {
        const response = await fetch('/users');
        // 실무109
        // const body = await response.text();
        // 실무110
        const body = await response.json();
        console.log("body.message : "+ body.message);

    }
    render(){
        return (
            <h1>Hello Proxy!!</h1>

        )
    }
}

export default R109_reactProxy;