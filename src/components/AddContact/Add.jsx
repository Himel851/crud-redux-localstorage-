import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { useNavigate} from 'react-router-dom'

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate  = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    // const checkContactPhoneExists = contacts.filter((contact) =>
    //   contact.phone === phone ? contact : null
    // );

    if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    // if (checkContactPhoneExists.length > 0) {
    //   return toast.error("This phone number already exists!!");
    // }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
      phone,
    };

    dispatch({type: "ADD_CONTACT", payload:data})
    toast.success("Contact added successfully!!");
    navigate("/");

  }
  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            
            <div className="form-group text-center">
              <input
                className="btn  btn-dark"
                type="submit"
                value="Add Student"
              />
              <button
                type="button"
                className="btn btn-danger ml-2"
                onClick={() => navigate("/")}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add