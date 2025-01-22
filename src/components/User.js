import { useEffect, useState } from "react";
const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);

    return (
        <div className="user-card">
            <p>Count : {count}</p>
            <p>Count : {count2}</p>
            <p>Name : {props.name}</p>
            <p>Contact No: 98XXXXXXXX01</p>
            <p>Address: {props.location}</p>
        </div>
    )

}

export default User;