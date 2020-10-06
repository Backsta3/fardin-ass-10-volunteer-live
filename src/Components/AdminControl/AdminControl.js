import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';

const AdminControl = () => {
    const [userEvents, setUserEvents] = useState([]);
    const [reload, setReload] = useState();
    useEffect(() => {
        fetch("https://aqueous-sierra-54046.herokuapp.com/userEventsAll")
            .then(res => res.json())
            .then(data => {
                setUserEvents(data)
                setReload(true);
            })
    }, [reload]);
    function handleDeleteEvent(id) {
        console.log("clicked")
        fetch(`https://aqueous-sierra-54046.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // history.replace(from);
                setReload(result);
            })
    }
    
    return (
        <div className="row">
            <div className="col-md-3">
                <Admin></Admin>
            </div>
            <div className="col-md-9">
                <h6 align="center">To remove an user please double click on Delete</h6>
                {
                    userEvents.map(userEvent => <div className="border border-light m-2" userEvent={userEvent}>

                        <div className="m-4 card-body p-2 bg-light text-dark">
                            <h6>Event: {userEvent.data.eName}</h6>
                            <p>Reg Date: {userEvent.data.date}</p>
                            <p>User Name: {userEvent.name}</p>
                            <p>User Email: <b> {userEvent.email}</b></p>
                            <small>User Id: {userEvent._id}</small>
                            <button onClick={() => handleDeleteEvent(userEvent._id)} className="btn btn-secondary mx-auto w-100 mt-1"> <img style={{ width: "20px" }} src="https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/logos/trash-2%209.png" alt="" /> Delete User (Click me twice)</button>
                        </div>

                    </div>)
                }
            </div>
        </div>

    );
};

export default AdminControl;