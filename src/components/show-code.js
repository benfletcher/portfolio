import React from 'react';
import jsxToString from 'jsx-to-string';

import './show-code.css';

const ShowCode = ({ children }) => (
  <pre className="codeblock">
    {jsxToString(children, { showCode: true })}
  </pre>
);

ShowCode.defaultProps = {
  children: null,
};

ShowCode.propTypes = {
  children: React.PropTypes.element,
  // children: React.PropTypes.node.isRequired,
};

export default ShowCode;
