import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2
        }
    }
    render() {
        return (
            <div className="user-card">
                <p>Count : {this.state.count}</p>
                <p>Count : {this.state.count2}</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    })

                }}>Update Count</button>
                <p>Name : {this.props.name}</p>
                <p>Contact No: 7XXXXXXXXX9</p>
                <p>Address: {this.props.location}</p>
            </div>
        )
    }
}

export default UserClass;