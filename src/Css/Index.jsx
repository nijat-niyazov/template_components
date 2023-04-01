import React from 'react';
// import './style.scss';

const Index = () => {
  return (
    <div className="container">
      <h3 className="header color-blue">Header</h3>
      <p>
        <span>random </span>
      </p>
      <p>
        <span> random</span>
      </p>
      <p>random</p>
      <p className="color-blue text-bold">paragaph</p>
      <div className="daxili-div">
        <span>
          <p className="color-blue">paragaph</p>
        </span>
        <p className="color-blue">paragaph</p>
        <p className="color-blue">paragaph</p>
      </div>
      <div className="color-blue">It is a div</div> <br />
      <ul>
        <li>list 1 </li>
        <li className="list-2">list 2 </li>
        <li>list 3 </li>
        <li>list 4 </li>
        <li>list 5 </li>
        <li>list 6 </li>
        <li>list 7 </li>
      </ul>{' '}
      <br />
      <p className="paragraph">paragraph</p>
      <h3 className="h3">Header</h3>
      <p className="another paragraph">another paragraph</p>
      <p className="another paragraph">another paragraph</p>
      <p className="another paragraph">another paragraph</p> <br />
      <span className="box">
        <abbr title="learning">Learning</abbr> <br />
      </span>
      <span className="box">
        <abbr>Wrong abbr</abbr> <br />
      </span>
      <span>
        <abbr title="learning">Learning</abbr> <br />
      </span>
      <span>
        <abbr>Wrong abbr</abbr>
      </span>
      <br /> <br />
      <nav>
        <a href="#" target="_blank" style={{ width: '40px' }}>
          Home
        </a>
        <br />
        <a href="#" target="alt" style={{ width: '240px' }}>
          About
        </a>
        <br />
        <a href="#" target="_blank" style={{ width: '140px' }}>
          Contact
        </a>
      </nav>
      <br />
      <aside>
        <img
          src="https://user-images.githubusercontent.com/34153986/110039484-5615ed80-7d52-11eb-9e68-d7cc4246f0cf.png"
          style={{ width: '200px' }}
          alt="scss"
        />
        <img
          src="https://user-images.githubusercontent.com/34153986/110039484-5615ed80-7d52-11eb-9e68-d7cc4246f0cf.png"
          style={{ width: '200px' }}
          alt="scss css"
        />
        <img
          src="https://user-images.githubusercontent.com/34153986/110039484-5615ed80-7d52-11eb-9e68-d7cc4246f0cf.png"
          style={{ width: '200px' }}
          alt="css"
        />
        <img
          src="https://user-images.githubusercontent.com/34153986/110039484-5615ed80-7d52-11eb-9e68-d7cc4246f0cf.png"
          style={{ width: '200px' }}
          alt="css scss"
        />
      </aside> <br />
      <div>
        <div className="bo">box</div>
        <div className="bo-small">box</div>
        <div className="bocontent">box</div>
        <div className="content-box">box</div>
        <div className="box test">box</div>
        <div className="test">box</div>
      </div> <br />
     
      <div>
        <div className="car">card</div>
        <div className="small-card">card</div>
        <div className="small_card">card</div>
        <div className="contentcard">card</div>
        <div className="co test">card</div>
      </div> <br />
      
      <div>
        <div className="spider">spider</div>
        <div className="small-spider">spider</div>
        <div className="small_spider">spider</div>
        <div className="contentSPIDER">spider</div>
        <div className="cospidertest">spider</div>
      </div> <br />
    </div>
  );
};

export default Index;
