import React from 'react';

const Tag = ({ color, text }) => (
  <span style={{ backgroundColor: color, padding: '0.3em 0.6em', borderRadius: '1.2em', color: 'white', fontSize: '0.8em', marginRight: '0.5em' }}>
    {text}
  </span>
);

export default function Tags() {
  return (
    <div>
      <p>Tags</p>
      <Tag color="#f50" text="Hard" />
      <Tag color="#2db7f5" text="Intermediate" />
      <Tag color="#87d068" text="Easy" />
    </div>
  );
}
