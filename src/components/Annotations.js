import React from 'react';

import './Annotations.css';

const Annotations = ({ children, onclick }) => (
  <div>
    {children.map(({ content: text, x, y }, i) => (
      <div
        onClick={onclick}
        className="annotation"
        contentEditable="true"
        key={i}
        style={{
          transform: `translateX(${x}px) translateY(${y}px)`,
        }}
      >
        {`${i + 1}: ${text}`}
      </div>
    ))}
  </div>
);

Annotations.defaultProps = {
  children: [],
  onclick: React.PropTypes.func.isRequired,
};

Annotations.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Annotations;
