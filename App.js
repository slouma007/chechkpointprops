import React from 'react';
import Profile from './profile/profile.js';
import './App.css';

const App = () => {
  const handleName = () => {
    alert('abdesslem attia');
  };

  return (
    <div className="App">
      <Profile
        fullName="abdesslem attia"
        bio="nothing in bio "
        profession="React Developer"
        image={<img src="profile-image.jpg" alt="Profile" />}
        handleName={handleName}
      />
    </div>
  );
};

export default App;
