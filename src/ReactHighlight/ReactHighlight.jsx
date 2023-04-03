import React from 'react';

const ReactHighlight = () => {
  const HighLight = ({ children, match, render }) => {
   
    const types = {
      hashtag: '(#[a-zçşıəğİ]+)',
      // # replaced character [a-z] between these letters also cover, + all combined letters for example #[a-z] #f #[a-z]+ #feature
      mention: '(@[a-zçşıəğİ\\-]+)',
    };

    let regex = new RegExp(types[match] || `(${match}+)`, 'gi');

    let parts = children?.split(regex);
    // it will split till by matched word

    console.log(parts);
    // global insensitivecase⤴
    return parts.map((part, i) => (regex.test(part) ? render(part) : part));
    // if part is euqal to match in regex test method then return mark
  };

  const text =
    'Today we are learning  #feature @react-$highlight. we love learn new things and also this #features and #ŞİFreleme';

  return (
    <div>
      <HighLight
        match="mention"
        render={mention => (
          <mark href={`https://www.npmjs.com/package/${mention}`} target="_blank">
            <b> {mention} </b>
          </mark>
        )}
      >
        {text}
      </HighLight>
    </div>
  );
};

export default ReactHighlight;
