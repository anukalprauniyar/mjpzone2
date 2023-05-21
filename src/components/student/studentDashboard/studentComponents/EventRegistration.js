import React, { useState } from 'react';
import './studentComponentCss/EventRegistration.css';

function EventRegistration() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [branch, setBranch] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('ID:', id);
    console.log('Branch:', branch);
    console.log('Mobile:', mobile);
    console.log('Email:', email);
    // Add your logic for submitting the form data here
  };

  return (
    <div class="event_registration">
      <h1>Event Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="id">Student ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(event) => setId(event.target.value)}
          required
        />

        <label htmlFor="branch">Branch:</label>
        <input
          type="text"
          id="branch"
          name="branch"
          value={branch}
          onChange={(event) => setBranch(event.target.value)}
          required
        />

        <label htmlFor="mobile">Mobile No.:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default EventRegistration;
