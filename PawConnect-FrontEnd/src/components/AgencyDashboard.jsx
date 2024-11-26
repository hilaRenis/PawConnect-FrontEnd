import React from 'react';
import ChatBox from './ChatBox';

function AgencyDashboard() {
  return (
    <div>
      <h2>Agency Dashboard</h2>
      <button>Post Animal for Adoption</button>
      <button>View Lost Pets</button>
      <button>Save Found Animal</button>

      <h3>Chat with Users</h3>
      <ChatBox />
    </div>
  );
}

export default AgencyDashboard;