import Avatar from '../resources/avatar.png'
import UpvoteArrow from '../resources/upvote.png'
const TopExpert = (props) => {
     return (<div className="experts-row">
        <img className="experts-image" alt="Avatar" src={Avatar} />
        <div className="experts-info">
            <span className="profile-name"> {props.expert.username} </span>
            <div className="expert-stats">
                <div className="upvotes-imgtxt">
                    <span className="upvotes-count"> {props.expert.upvotes} </span>
                    <img src={UpvoteArrow} alt="Upvotes" className="upvotes-img" />
                    <span className="collected"> collected </span>
                </div>
            </div>
        </div>
    </div>);
};

export default TopExpert;