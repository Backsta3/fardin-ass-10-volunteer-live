import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const UserEvents = () => {
    const [userEvents, setUserEvents] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [reload, setReload] = useState();

    useEffect(() => {
        fetch(`https://aqueous-sierra-54046.herokuapp.com/userEvents?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setUserEvents(data)
                    setReload(true)
                }
            })
    }, [reload]);

    function handleDeleteEvent(id) {
        console.log("clicked")
        fetch(`https://aqueous-sierra-54046.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                setReload(result);
            })
    }

    return (
        <div>
            <h4 align="center"> { userEvents.length < 1 ? "You are not participating on any event" : "You are participating on " +userEvents.length+ " event(s)" } </h4>
            <h6 align="center">Please click twice on Cancel button to delete an event</h6>
            <div className="row mt-4">
                {
                    userEvents.map(userEvent => <div className="col-md-6 p-3" userEvent={userEvent} key={userEvent._id}>
                            <div className="border border-light p-2 bg-light text-dark">
                                <h5>Event Name: {userEvent.data.eName}</h5>
                                <h6>Date: {userEvent.data.date}</h6>
                                <button onClick={() => handleDeleteEvent(userEvent._id)} className="btn btn-secondary mx-auto w-50 mt-2">Cancel (Click me twice)</button>
                            </div>                       
                    </div>)
                }
            </div>
        </div>
    );
};

export default UserEvents;