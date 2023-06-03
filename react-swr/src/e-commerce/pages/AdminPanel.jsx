import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div>
      {!user.logged ? (
        <button
          onClick={() => {
            navigate('/products');
            user.setLogged(true);
          }}
          className="bg-red-300 p-2 text-2xl text-center m-auto block rounded-xl "
        >
          Log in
        </button>
      ) : (
        <div className="text-center grid gap-4">
          <h2 className="text-4xl">You are now able to modify your products</h2>
          <button
            onClick={() => user.setLogged(false)}
            className="bg-red-300 p-2 text-2xl text-center m-auto block rounded-xl "
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
