import React, { useRef, useState } from 'react';

const Copied = () => {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  const textRef = useRef(null);

  const handleCopy = async () => {
    const copiedText = textRef.current.value;

    navigator.clipboard.writeText(copiedText).then(() => {
      setCopied(true);
      return copiedText;
    });
  };

  return (
    <div className="p-10">
      <button
        className=""
        onClick={() => {
          let utterance = new SpeechSynthesisVoice(value);
          speechSynthesis.speak(utterance);
        }}
      >
        Hear
      </button>
      <button className="" onClick={handleCopy}>
        {copied ? 'Copied' : 'Copy'}
      </button>
      <br />
      <label className="inline-block" htmlFor="">
        Search
      </label>
      <input
        type="text"
        ref={textRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default Copied;
