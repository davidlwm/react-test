// src/components/UserModal.js
import React, { useState, useEffect } from 'react';

const UserModal = ({ isOpen, user, onSave, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(user ? user.name : '');
    setEmail(user ? user.email : '');
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ name, email });
  };

  return (
    isOpen ? (
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    ) : null
  );
};

export default UserModal;

