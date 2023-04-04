import './afterbefore.scss';

const AfterBefore = () => {
  return (
    <div className="container">
      <div className="only-child">
        <button>focus</button>
        <ul>
          <li>1</li>
        </ul>
        <ul>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
        </ul>
      </div> <br />

      <div className="focus">
        <button>focus</button>
        <input type="text" />
        <ul>
          <li tabIndex="1">1</li>
          <li tabIndex="2">1</li>
          <li tabIndex="3">1</li>
          <li tabIndex="4">1</li>
          <li tabIndex="5">1</li>
        </ul>
      </div>
      <br />
      <br />

      <div className="form">
        <label>
          <input type="radio" name="sex" value="woman" />
          <span>Woman</span>
        </label>
        <label>
          <input type="radio" name="sex" value="man" />
          <span>man</span>
        </label>
        <hr />

        <input id="cb" type="checkbox" className="checkbox" />
        <label
          className="button"
          htmlFor="cb"
          data-show="show"
          data-hide="hide"
        >
          ntn
        </label>

        <div className="box">Okay it seems</div>
      </div>
      <br />
      <div className="hover">
        <button>on hover hide list</button>
        <ul>
          <li>hover</li>
          <li>hover</li>
          <li>hover</li>
          <li>hover</li>
          <li>hover</li>
          <li>hover</li>
        </ul>
      </div>
      <div className="nth-container">
        <ol>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
        </ol>

        <div>div</div>
        <div>div</div>
        <p>paragraph</p>
        <div>div</div>
      </div>
      <br />
      <div className="list-container">
        <ul className="list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <br />
        <ul className="list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <br />
      </div>
      <br />
      <br />
      <div className="after-before" title="testing" data-first="src">
        AfterBefore
      </div>
      <a href="facebook.com" target="_blank">
        facebook
      </a>
      <br />
      <a href="twitter.com">twitter</a>
      <p>selection</p>
      <p>selection</p>
      <p>selection</p>
      <p>selection</p>
      <span>selection</span>
      <br />
      <span>selection</span>
      <br />
      <span>selection</span>
      <br />
    </div>
  );
};

export default AfterBefore;
