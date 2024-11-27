import './shimmer.css';
const Shimmer = () => {
    return (
        <div className="shimmer-card" >
            <div className="sres-img shimmer-anime" />
            <h3 className="scard-title shimmer-anime" ></h3>
            <div className="scard-body" >
                <p className='cuisine shimmer-anime'></p>
                <p className="rating shimmer-anime"></p>
            </div>
            <div className="scard-footer">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Shimmer;