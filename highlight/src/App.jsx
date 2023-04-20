function App() {
  function HighLighting({ children, match }) {
    const types = {
      hashtag: '(#[a-zçşıəğİ]+)',
      // # replaced character [a-z] between these letters also cover, + all combined letters for example #[a-z] #f #[a-z]+ #feature
      mention: '(@[a-zçşıəğİ\\-]+)',
    };

    let regexp = new RegExp(types[match] || `(${match}+)`, 'gi');

    let parts = children?.split(regexp);
    // it will split till by matched word

    return parts.map(part =>
      regexp.test(part)
        ? // if part is euqal to match in regex test method then return mark
          (match === 'hashtag' && (
            <mark onClick={() => alert(part)}>
              <b> {part} </b>
            </mark>
          )) ||
          (match === 'mention' && (
            <a href={`https://www.npmjs.com/package/${part}`} target="_blank">
              <b> {part} </b>
            </a>
          ))
        : part
    );
  }

  const text =
    'Today We are learning #feature @react- $highlight. we love learn new things and also this #features and #ŞİFreleme';

  return (
    <div>
      <HighLighting match="hashtag">{text}</HighLighting>
    </div>
  );
}

export default App;
