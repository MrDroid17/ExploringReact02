import User from "./User";
import UserClass from "./class-based-components/UserClass";

const AboutUs = () => {
    return (
        <div>
            <h5>About Us page</h5>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus vitae praesentium quas est sed magni reiciendis repudiandae amet consequuntur optio, ut eaque doloremque itaque, veniam ducimus distinctio harum fugit eligendi quo aliquam mollitia sit culpa soluta autem. Sequi, ab doloremque possimus placeat eum, corporis aperiam modi ducimus, omnis consequatur vitae!</div>
            <User name="Akshay Saini (Function)" location="Ambience Island" />
            <UserClass name="Akshay Saini (Classes)" location="Aya  Nagar" />
        </div>
    )
}

export default AboutUs;