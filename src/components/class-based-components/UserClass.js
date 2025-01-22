import { Component } from "react";

class UserClass extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.name, "      constructor")
        this.state = {
            userInfo: {
                name: "sobhit",
                location: "default",
            }
        }
    }

    async componentDidMount() {
        console.log(this.props.name, "      component did mount")
        const data = await fetch("https://api.github.com/users/mrdroid17");
        const json = await data.json();
        this.setState({
            userInfo:json
        })

        console.log(json);
        // api call
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        console.log(this.props.name, "      render")
        return (
            <div className="user-card">
                <img src={avatar_url} width="100px"/>
                <p>Name : {name}</p>
                <p>Contact No: 7XXXXXXXXX9</p>
                <p>Address: {location}</p>
            </div>
        )
    }
}

/**
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * 
 * **** flow ****
 * Mounting
 *      constructor called
 *      render ui
 *      componnetDidMount(called)
 *              api call
 *      
 * Update
 *      setState
 *      render Ui - reconcilicailation
 *      componentUpdate
 * 
 * Unmount
 *      componentDidUnmount
 * 
 * 
 */

export default UserClass;