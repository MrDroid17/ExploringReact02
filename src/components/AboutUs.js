import { Component } from "react";
import User from "./User";
import UserClass from "./class-based-components/UserClass";

// const AboutUs = () => {
//     return (
//         <div>
//             <h5>About Us page</h5>
//             <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus vitae praesentium quas est sed magni reiciendis repudiandae amet consequuntur optio, ut eaque doloremque itaque, veniam ducimus distinctio harum fugit eligendi quo aliquam mollitia sit culpa soluta autem. Sequi, ab doloremque possimus placeat eum, corporis aperiam modi ducimus, omnis consequatur vitae!</div>
//             <User name="Akshay Saini (Function)" location="Ambience Island" />
//             <UserClass name="Akshay Saini (Classes 01)" location="Aya  Nagar" />
//             <UserClass name="Akshay Saini (Classes 02)" location="Aya  Nagar" />
//         </div>
//     )
// }

class AboutUs extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h5>About Us page</h5>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus vitae praesentium quas est sed magni reiciendis repudiandae amet consequuntur optio, ut eaque doloremque itaque, veniam ducimus distinctio harum fugit eligendi quo aliquam mollitia sit culpa soluta autem. Sequi, ab doloremque possimus placeat eum
                    <User name="Akshay Saini (Function)" location="Ambience Island" />
                    <UserClass name="Akshay Saini (Classes 01)" location="Aya  Nagar" />
                    <UserClass name="Akshay Saini (Classes 02)" location="Aya  Nagar" />
                </div>
            </div>
        )
    }

}

export default AboutUs;