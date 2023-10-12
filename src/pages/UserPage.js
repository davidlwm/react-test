// src/pages/UserPage.js
import React, { useState } from 'react';
import UserTable from '../components/UserTable';
import UserModal from '../components/UserModal';
import { users as initialUsers } from '../data/users';

const UserPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSave = (user) => {
    if (selectedUser) {
      setUsers(users.map(u => (u.id === selectedUser.id ? { ...u, ...user } : u)));
    } else {
      setUsers([...users, { ...user, id: Math.max(...users.map(u => u.id), 0) + 1 }]);
    }
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>User Management</h2>
      <button onClick={handleAdd}>Add User</button>
      <UserTable
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <UserModal
        isOpen={isModalOpen}
        user={selectedUser}
        onSave={handleSave}
        onClose={handleClose}
      />
    </div>
  );
};

export default UserPage;

