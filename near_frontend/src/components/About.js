import People from '../resources/people.png'
import Question from '../resources/chat.png'
import Upvote from '../resources/up-arrow.png'
import Token from '../resources/tokens.png'

const About = () => {
    return (
        <section className="about-parent">
            <div className="about-child">
                <h2>
                    <span className="sidepnl-header"> About </span>
                </h2>
                <div className="about-contents">
                    <div className="about-row">
                        <img src={People} className="about-image" alt="People"/>
                        <span className="about-txt"> 246 Experts </span>
                    </div>
                    <div className="about-row">
                        <img src={Question} className="about-image" alt="Questions"/>
                        <span className="about-txt"> 100k Questions and Answers </span>
                    </div>
                    <div className="about-row">
                        <img src={Upvote} className="about-image" alt="Upvotes"/>
                        <span className="about-txt"> 50k Upvotes </span>
                    </div>
                    <div className="about-row">
                        <img src={Token} className="about-image" alt="Tokens"/>
                        <span className="about-txt"> 145 Tokens Awarded </span>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default About;