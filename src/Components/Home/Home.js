import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [redirect, setRedirect] = useState();

    // Database
    useEffect(() => {
        fetch("https://aqueous-sierra-54046.herokuapp.com/events")
            .then(res => res.json())
            .then(data => {
                setEvents(data)
                setRedirect(true)
            })
    }, [redirect]);



    return (
        <div className="row">
            {
                events.map(event => <div className="col-lg-3 col-md-4 col-sm-6 container my-4" event={event} key={event._id}>
                    <div align="center" >
                        <Link to={"/reg/" + event.eventName} style={{ textDecoration: "none" }}> <div className="card btn btn-light">
                            <div className="m-2 p-2"><img style={{ width: "100%", height: "240px" }} src={event.eventBanner} alt="" /></div>
                            <div className="m-2 btn btn-dark"> <h6>{event.eventName}</h6></div>
                        </div>
                        </Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Home;