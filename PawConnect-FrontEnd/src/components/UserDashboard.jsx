import React, { useState } from 'react';
import ChatBox from './ChatBox';

function UserDashboard() {
  const [petDetails, setPetDetails] = useState({
    name: '',
    breed: '',
    photo: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pet details submitted!');
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pet Name"
          value={petDetails.name}
          onChange={(e) => setPetDetails({ ...petDetails, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Breed"
          value={petDetails.breed}
          onChange={(e) => setPetDetails({ ...petDetails, breed: e.target.value })}
        />
        <input
          type="file"
          onChange={(e) => setPetDetails({ ...petDetails, photo: e.target.files[0] })}
        />
        <textarea
          placeholder="Description"
          value={petDetails.description}
          onChange={(e) => setPetDetails({ ...petDetails, description: e.target.value })}
        ></textarea>
        <button type="submit">Submit Announcement</button>
      </form>

      <h3>Chat with Agencies</h3>
      <ChatBox />
    </div>
  );
}

export default UserDashboard;