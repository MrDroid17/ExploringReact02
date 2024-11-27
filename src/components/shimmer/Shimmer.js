import './shimmer.css';
const Shimmer = () => {
    return (
        <div className="shimmer-card" >
            <div className="sres-img" />
            <h3 className="scard-title" ></h3>
            <div className="scard-body" >
                <p className='cuisine'></p>
                <p className="rating"></p>
            </div>
            <div className="scard-footer">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Shimmer;