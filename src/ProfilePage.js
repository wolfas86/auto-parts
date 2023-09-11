import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfilePage() {
  const [user, setUser] = useState({});
  const [editedUser, setEditedUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/user/profile'); // Pakeiskite URL į tinkamą
      setUser(response.data);
      setEditedUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put('/api/user/profile', editedUser); // Pakeiskite URL į tinkamą
      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Profilis</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedUser.firstName}
            onChange={(e) =>
              setEditedUser({ ...editedUser, firstName: e.target.value })
            }
          />
          {/* Kiti redaguojami laukai */}
          <button onClick={handleSaveClick}>Išsaugoti</button>
        </div>
      ) : (
        <div>
          <p>Vardas: {user.firstName}</p>
          {/* Kitos išskirtinės savybės */}
          <button onClick={handleEditClick}>Redaguoti</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
