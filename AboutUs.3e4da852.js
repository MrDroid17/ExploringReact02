
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire73b1"];
var parcelRegister = parcelRequire.register;
parcelRegister("jx6BD", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $e3863932a81e558e$export$2e2bcd8739ae039);

var $8CS36 = parcelRequire("8CS36");

var $7Pt7X = parcelRequire("7Pt7X");

var $fWO8Y = parcelRequire("fWO8Y");

var $4gy2C = parcelRequire("4gy2C");
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
class $e3863932a81e558e$var$AboutUs extends (0, $7Pt7X.Component) {
    constructor(props){
        super(props);
    }
    render() {
        return /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, $8CS36.jsx)("h5", {
                    children: "About Us page"
                }),
                /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
                    children: [
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus vitae praesentium quas est sed magni reiciendis repudiandae amet consequuntur optio, ut eaque doloremque itaque, veniam ducimus distinctio harum fugit eligendi quo aliquam mollitia sit culpa soluta autem. Sequi, ab doloremque possimus placeat eum",
                        /*#__PURE__*/ (0, $8CS36.jsx)((0, $fWO8Y.default), {
                            name: "Akshay Saini (Function)",
                            location: "Ambience Island"
                        }),
                        /*#__PURE__*/ (0, $8CS36.jsx)((0, $4gy2C.default), {
                            name: "Akshay Saini (Classes 01)",
                            location: "Aya  Nagar"
                        }),
                        /*#__PURE__*/ (0, $8CS36.jsx)((0, $4gy2C.default), {
                            name: "Akshay Saini (Classes 02)",
                            location: "Aya  Nagar"
                        })
                    ]
                })
            ]
        });
    }
}
var $e3863932a81e558e$export$2e2bcd8739ae039 = $e3863932a81e558e$var$AboutUs;

});
parcelRegister("fWO8Y", function(module, exports) {

$parcel$export(module.exports, "default", () => $b9c32b474d5c3778$export$2e2bcd8739ae039);

var $8CS36 = parcelRequire("8CS36");

var $7Pt7X = parcelRequire("7Pt7X");
const $b9c32b474d5c3778$var$User = (props)=>{
    const [count, setCount] = (0, $7Pt7X.useState)(0);
    const [count2, setCount2] = (0, $7Pt7X.useState)(2);
    return /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
        className: "user-card",
        children: [
            /*#__PURE__*/ (0, $8CS36.jsxs)("p", {
                children: [
                    "Count : ",
                    count
                ]
            }),
            /*#__PURE__*/ (0, $8CS36.jsxs)("p", {
                children: [
                    "Count : ",
                    count2
                ]
            }),
            /*#__PURE__*/ (0, $8CS36.jsxs)("p", {
                children: [
                    "Name : ",
                    props.name
                ]
            }),
            /*#__PURE__*/ (0, $8CS36.jsx)("p", {
                children: "Contact No: 98XXXXXXXX01"
            }),
            /*#__PURE__*/ (0, $8CS36.jsxs)("p", {
                children: [
                    "Address: ",
                    props.location
                ]
            })
        ]
    });
};
var $b9c32b474d5c3778$export$2e2bcd8739ae039 = $b9c32b474d5c3778$var$User;

});

parcelRegister("4gy2C", function(module, exports) {

$parcel$export(module.exports, "default", () => $31b30ff3f8aec6b1$export$2e2bcd8739ae039);

var $8CS36 = parcelRequire("8CS36");

var $7Pt7X = parcelRequire("7Pt7X");

var $acsLv = parcelRequire("acsLv");
class $31b30ff3f8aec6b1$var$UserClass extends (0, $7Pt7X.Component) {
    constructor(props){
        super(props);
        console.log(this.props.name, "      constructor");
        this.state = {
            userInfo: {
                name: "sobhit",
                location: "default"
            }
        };
    }
    async componentDidMount() {
        console.log(this.props.name, "      component did mount");
        const data = await fetch("https://api.github.com/users/mrdroid17");
        const json = await data.json();
        this.setState({
            userInfo: json
        });
        console.log(json);
    // api call
    }
    render() {
        const { name: name, location: location, avatar_url: avatar_url } = this.state.userInfo;
        console.log(this.props.name, "      render");
        return /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
            className: "user-card",
            children: [
                /*#__PURE__*/ (0, $8CS36.jsx)("img", {
                    src: avatar_url,
                    width: "100px"
                }),
                /*#__PURE__*/ (0, $8CS36.jsxs)("p", {
                    children: [
                        "Name : ",
                        name
                    ]
                }),
                /*#__PURE__*/ (0, $8CS36.jsx)("p", {
                    children: "Contact No: 7XXXXXXXXX9"
                }),
                /*#__PURE__*/ (0, $8CS36.jsxs)("p", {
                    children: [
                        "Address: ",
                        location
                    ]
                }),
                /*#__PURE__*/ (0, $8CS36.jsx)((0, $acsLv.default).Consumer, {
                    children: ({ loggedInUser: loggedInUser })=>/*#__PURE__*/ (0, $8CS36.jsxs)("p", {
                            children: [
                                "LoggedIn: ",
                                /*#__PURE__*/ (0, $8CS36.jsx)("b", {
                                    children: loggedInUser
                                })
                            ]
                        })
                })
            ]
        });
    }
}
var /**
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
 */ $31b30ff3f8aec6b1$export$2e2bcd8739ae039 = $31b30ff3f8aec6b1$var$UserClass;

});



//# sourceMappingURL=AboutUs.3e4da852.js.map
