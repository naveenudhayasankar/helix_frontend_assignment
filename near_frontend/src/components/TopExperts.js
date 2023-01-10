import Avatar from '../resources/avatar.png'
import UpvoteArrow from '../resources/upvote.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

const TopExperts = () => {
    const [topExperts, setTopExperts] = useState([])

    useEffect(() => {
        const fetchTopExperts = async () => {
            try{
                const res = await axios.get("http://localhost:8080/users")
                console.log(res.data)
                setTopExperts(res.data)
            } catch (err) {
                console.log(err);
            }
        };
        fetchTopExperts();
    }, []);

    return (
        <section className="experts-parent">
            <div className="experts-child">
                <h2>
                    <span className="sidepnl-header"> Top Experts </span>
                </h2>
                <div className="experts-content">
                    {topExperts.map(expert => (
                    <div className="experts-row" key={expert.id}>
                      <img className="experts-image" alt="Avatar" src={Avatar}/>
                      <div className="experts-info" key={expert.id}>
                          <span className="profile-name"> {expert.username} </span>
                          <div className="expert-stats" key={expert.id}>
                              <div className="upvotes-imgtxt" key={expert.id}>
                                  <span className="upvotes-count"> {expert.upvotes} </span>
                                  <img src={UpvoteArrow} alt="Upvotes" className="upvotes-img"/>
                                  <span className="collected"> collected </span>
                              </div>
                          </div>
                      </div>
                    </div>  
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopExperts;

                    
            