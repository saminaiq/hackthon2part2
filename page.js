
'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Users from Neon Database</h1>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
