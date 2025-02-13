export default Grocery =() =>{
    /**
     * Full Screen
     */
    const componentRef = useRef(null);
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
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          toggleFullScreen();
        } else if (e.key === "Escape") {
          exitFullScreen();
        }
      };
  
      document.addEventListener("keydown", handleKeyDown);
  
      // Cleanup event listener on unmount
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
  
    const toggleFullScreen =() =>{
      const element = componentRef.current;
  
      if (element) {
        // Request fullscreen for the specific component
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // Internet Explorer/Edge
          element.msRequestFullscreen();
        }
      } else {
        console.error('Fullscreen API not supported');
      }
    }
  
  
    const exitFullScreen = () => {
      const element = componentRef.current;
      if (element.exitFullscreen) {
        element.exitFullscreen();
      } else if (element.mozCancelFullScreen) { // Firefox
        element.mozCancelFullScreen();
      } else if (element.webkitExitFullscreen) { // Chrome, Safari, Opera
        element.webkitExitFullscreen();
      } else if (element.msExitFullscreen) { // Internet Explorer/Edge
        element.msExitFullscreen();
      } else {
        console.error('Exit fullscreen API not supported');
      }
    };
    return(
        <div>
            <h4>This is our brand new grocery section.</h4>
            <p>Product Lists</p>
        </div>
    )

}