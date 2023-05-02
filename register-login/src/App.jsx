import { useEffect, useState } from 'react';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

function App() {
  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matches, setMatches] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(user);
  }, [user]);

  return (
    <div>
      <h1>Register form</h1>

      <form onSubmit={''}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          autoFocus
          autoComplete="off"
          required
          value={user}
          onChange={e => setUser(e.target.value)}
          onFocus={() => setUser(true)}
          onBlur={() => setUser(false)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
