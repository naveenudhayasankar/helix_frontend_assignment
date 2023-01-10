import { useState, useEffect } from 'react';
import axios from 'axios';
import TopExpert from './TopExpert';

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
                <section className="experts-content">
                    {topExperts.map((expert) => (
                        <TopExpert key={expert.id} expert={expert} />
                    ))}
                </section>
            </div>
        </section>
    );
};

export default TopExperts;

                    
            