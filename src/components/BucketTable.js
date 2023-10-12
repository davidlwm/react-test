// src/components/BucketTable.js
import React from 'react';

const BucketTable = ({ buckets, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Capacity</th>
          <th>Expiration</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {buckets.map(bucket => (
          <tr key={bucket.id}>
            <td>{bucket.name}</td>
            <td>{bucket.capacity}</td>
            <td>{bucket.expiration}</td>
            <td>
              <button onClick={() => onEdit(bucket)}>Edit</button>
              <button onClick={() => onDelete(bucket.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BucketTable;

