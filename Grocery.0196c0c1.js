
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire73b1"];
var parcelRegister = parcelRequire.register;
parcelRegister("harIv", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $c7f8ded5185a6c76$export$2e2bcd8739ae039);

var $8CS36 = parcelRequire("8CS36");
var $c7f8ded5185a6c76$export$2e2bcd8739ae039 = Grocery = ()=>{
    /**
     * Full Screen
     */ const componentRef = useRef(null);
    // document.addEventListener(
    //   "keydown",
    //   (e) => {
    //     if (e.key === "Enter") {
    //       toggleFullScreen();
    //     } else if(e.key === "Escape"){
    //       exitFullScreen()
    //     }
    //   },
    //   false,
    // );
    useEffect(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === "Enter") toggleFullScreen();
            else if (e.key === "Escape") exitFullScreen();
        };
        document.addEventListener("keydown", handleKeyDown);
        // Cleanup event listener on unmount
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    const toggleFullScreen = ()=>{
        const element = componentRef.current;
        if (element) {
            // Request fullscreen for the specific component
            if (element.requestFullscreen) element.requestFullscreen();
            else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
            else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
            else if (element.msRequestFullscreen) element.msRequestFullscreen();
        } else console.error("Fullscreen API not supported");
    };
    const exitFullScreen = ()=>{
        const element = componentRef.current;
        if (element.exitFullscreen) element.exitFullscreen();
        else if (element.mozCancelFullScreen) element.mozCancelFullScreen();
        else if (element.webkitExitFullscreen) element.webkitExitFullscreen();
        else if (element.msExitFullscreen) element.msExitFullscreen();
        else console.error("Exit fullscreen API not supported");
    };
    return /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $8CS36.jsx)("h4", {
                children: "This is our brand new grocery section."
            }),
            /*#__PURE__*/ (0, $8CS36.jsx)("p", {
                children: "Product Lists"
            })
        ]
    });
};

});


//# sourceMappingURL=Grocery.0196c0c1.js.map
