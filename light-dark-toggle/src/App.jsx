import { useState } from 'react';
import './style.scss';

function App() {
  const [light, setLight] = useState(true);

  const switchTheme = () => {
    setLight(!light);
  };

  return (
    <div className={light ? 'app' : 'app dark'}>
      <div className="login">
        <h1> Login</h1>
        <div className="container">
          <div className="top">
            <i class="fab fa-google"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-apple"></i>
          </div>
          <p className="divider">
            <span>Or</span>
          </p>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="remember">
              <input type="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="bottom">
            <p>Forget your password?</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          <h2>Light Theme</h2>
          <button onClick={switchTheme} class="fas fa-toggle-on">
            turn into dark
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
