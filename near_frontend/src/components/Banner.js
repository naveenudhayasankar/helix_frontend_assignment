import logo from "../resources/image_3.png"
const Banner = () => {
    return (
        <div className="banner">
            <div className="logo-and-text">
                <img className="logo" src={logo} alt="Near Protocol"></img>
                <h1 className="banner-txt"> Near Protocol </h1>
            </div>
            
        </div>
    )
}

export default Banner;