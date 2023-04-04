import './huver.scss';

const Huver = () => {
  return (
    <div className="huver">
      <a href="facebook.com">facebook</a>
      <a href="google.com">google</a>
      <a href="twitter.com">twitter</a>
      <a>gmail</a>
      <div className="valid">
        <input minLength="4" type="text" required />

        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" id="name" />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input required type="email" name="email" id="email" />
          </li>
        </ul>
      </div>
      <br />
      <div className="animation">
        <div className="total">1</div>
        <div className="loading">
          <p>Loading...</p>
        </div>
      </div>
      <br />
      <abbr title="title">Huvers</abbr>
      <abbr className="test">Huvers</abbr>
      <abbr id="test">Huvers</abbr>
      <abbr>Huvers</abbr>
      <br /> <br /> <br />
    </div>
  );
};

export default Huver;
