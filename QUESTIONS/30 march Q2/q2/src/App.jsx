import React, { useState } from "react";

const UserForm = () => {
  // 1) State hooks for name, email, and the final submitted object
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  // b) Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Store the entered data in state
    setSubmittedData({ name, email });

    // Optional: Clear the input fields after submission
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h1>User Form</h1>

      {/* 2) Create the form with controlled inputs */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* c & d) Conditional Rendering */}
      {submittedData ? (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      ) : (
        <p>No data submitted</p>
      )}
    </div>
  );
};

export default UserForm;