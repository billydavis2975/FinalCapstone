import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Reservations() {
  const history = useHistory();
  const [reservation, setReservation] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 1,
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };
  const submitHandler = () => {
    //e.preventDefault();
    axios.post("", reservation);
    history.push("/dashboard");
  };
  const canceller = () => {
    history.push("/dashboard");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="first_name"
          value={reservation.first_name}
          onChange={changeHandler}
          placeholder="First Name"
          required
        ></input>
        <input
          type="text"
          name="last_name"
          value={reservation.last_name}
          onChange={changeHandler}
          placeholder="Last Name"
          required
        ></input>
        <input
          type="text"
          name="mobile_number"
          value={reservation.mobile_number}
          onChange={changeHandler}
          required
        ></input>
        <input
          type="date"
          name="reservation_date"
          value={reservation.reservation_date}
          onChange={changeHandler}
          required
        ></input>
        <input
          type="time"
          name="reservation_time"
          value={reservation.reservation_time}
          onChange={changeHandler}
          required
        ></input>
        <input
          type="number"
          name="people"
          value={reservation.people}
          onChange={changeHandler}
          required
        ></input>
        <button type="submit">Submit</button>
        <button type="button" onClick={canceller}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Reservations;
