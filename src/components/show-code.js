import React from 'react';
import jsxToString from 'jsx-to-string';

import './show-code.css';

const ShowCode = ({ jsx }) => (
  <pre className="codeblock" onLoad={() => { document.body.style.opacity = '1'; }}>
    {jsxToString(jsx, { showCode: true })}
  </pre>
);

ShowCode.defaultProps = {
  jsx: null,
};

ShowCode.propTypes = {
  jsx: React.PropTypes.element,
};

export default ShowCode;
