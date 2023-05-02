import './grid2.scss';

const data = [
  {
    name: '1 Daniel Clifford',
    job: 'Verified Graduate',
    info: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
  },
  {
    name: '2 Daniel Clifford',
    job: 'Verified Graduate',
    info: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
  },
  {
    name: '3 Daniel Clifford',
    job: 'Verified Graduate',
    info: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
  },
  {
    name: '4 Daniel Clifford',
    job: 'Verified Graduate',
    info: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
  },
  {
    name: '5 Daniel Clifford',
    job: 'Verified Graduate',
    info: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
  },
  {
    name: '6 Daniel Clifford',
    job: 'Verified Graduate',
    info: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
  },
  {
    name: '7 Daniel Clifford',
    job: 'Verified Graduate',
    info: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
  },
  {
    name: '8 Daniel Clifford',
    job: 'Verified Graduate',
    info: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
  },
  {
    name: '9 Daniel Clifford',
    job: 'Verified Graduate',
    info: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
  },
];

const Grid2 = () => {
  return (
    <>
    <div className="container">
      {data.map((d, i) => {
        return (
          <div key={i} className="card">
            <h3>{d.name}</h3>
            <p>{d.job}</p>
            <span>{d.info}</span>
          </div>
        );
      })}
    </div>
    <div className="test">
      {data.map((d, i) => {
        return (
          <div key={i} className="card">
            <h3>{d.name}</h3>
            <p>{d.job}</p>
            <span>{d.info}</span>
          </div>
        );
      })}
    </div>
      </>
  );
};

export default Grid2;
