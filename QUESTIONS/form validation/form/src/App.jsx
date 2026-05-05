import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  // Validate function
  const validate = () => {
    let newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Enter a valid email";
    }

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <br /><br />

        {/* Email */}
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;