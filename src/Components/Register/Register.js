import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Reg = () => {
    const { eventLink } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // Sending to Database:
    const history = useHistory();
    const onSubmit = (data, eventLink) => {
        const userEventDetails = { ...loggedInUser, data };
        // console.log(userEventDetails)
        fetch("https://aqueous-sierra-54046.herokuapp.com/addUserEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userEventDetails)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    result.redirect("/")
                }
            })
        history.push("/userEvents");
    };

    return (
        <form id="regForm" className="container text-center col-md-6 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control" defaultValue={loggedInUser.name} type="text" name="name" ref={register({ required: true })} placeholder="Type your Name" required />
            {errors.name && <span className="error">Event Name is required</span>}<br />
            <input className="form-control" type="text" name="userName" ref={register({ required: true })} placeholder="Type your User Name" required />
            {errors.userName && <span className="error">Event Name is required</span>}<br />
            <input className="form-control" defaultValue={loggedInUser.email} type="text" name="email" ref={register({ required: true })} placeholder="Type your Email address" required />
            {errors.email && <span className="error">Event Name is required</span>}<br />
            <input className="form-control" ref={register({ required: true })} type="date" name="date" required />
            {errors.date && <span className="error">Event Name is required</span>}<br />
            <input className="form-control" type="text" name="desc" ref={register({ required: true })} placeholder="Why you want to join the event?" required />
            {errors.desc && <span className="error">Event Name is required</span>}<br />
            <input className="form-control" defaultValue={eventLink} type="text" name="eName" ref={register({ required: true })} placeholder="Type the event you want to join" required />
            {errors.eName && <span className="error">Event Name is required</span>}<br />
            <button type="submit" className="btn btn-secondary mx-auto w-100 mt-2">Complete Registration</button>
        </form>
    );
};

export default Reg;