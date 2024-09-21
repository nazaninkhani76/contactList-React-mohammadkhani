import React from "react";

const ContactList = ({
  submitFormHandler,
  name,
  phone,
  email,
  nameChangeHandler,
  phoneChangeHandler,
  emailChangeHandler,
  searchChangeHandler,
  students,
}) => {
  return (
    <div className="form__container">
      <form className="form" onSubmit={submitFormHandler}>
        <div className="form__search">
          <input placeholder="Search" onChange={searchChangeHandler} />{" "}
        </div>
        <div className="form__info">
          <input placeholder="Name" value={name} onChange={nameChangeHandler} />
          <input
            placeholder="Phone"
            value={phone}
            onChange={phoneChangeHandler}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler}
          />
          <button type="submit">+Add</button>
        </div>
      </form>

      {students.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>
                <div className="th__container">
                  <i className="material-symbols-outlined">person</i>Name
                </div>
              </th>

              <th>
                <div className="th__container">
                  <i className="material-symbols-outlined">call</i>Phone
                </div>
              </th>

              <th>
                <div className="th__container">
                  <i className="material-symbols-outlined">mail</i>Email
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map(({ id, name, phone, email }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactList;
