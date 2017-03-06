import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ShowCode from './show-code';
import './App.css';
import Projects from './Projects';

class App extends Component {
  constructor() {
    super();

    this.state = {
      reveal: false,
      clientX: 0,
      clientY: 0,
      floatSize: 100,
      viewX: window.innerWidth,
      viewY: window.innerHeight,
    };

    this.keyPress = this.keyPress.bind(this);
    this.wheel = this.wheel.bind(this);
  }

  componentWillMount() {
    window.addEventListener('keypress', this.keyPress, { capture: true });
    window.addEventListener('pointermove', ({ clientX, clientY }) =>
      this.setState({
        clientX,
        clientY,
      }),
    );
    window.addEventListener('wheel', this.wheel);
    window.addEventListener('resize', () =>
      this.setState({
        viewX: window.innerWidth,
        viewY: window.innerHeight,
      }),
    );
  }

  keyPress({ key }) {
    if (key === 'z' || key === 'Z') {
      this.setState({ reveal: !this.state.reveal });
    }
  }

  wheel(e) {
    if (e.ctrlKey && e.deltaY) {
      e.preventDefault();

      let newSize = this.state.floatSize;
      newSize += (e.deltaY < 0) ? 6 : -6;
      newSize = Math.min(Math.max(newSize, 0), 500);

      this.setState({ floatSize: newSize });
    }
  }

  render() {
    const half = this.state.floatSize / 2;

    const floatX = Math.min(Math.max(this.state.clientX - half, 0),
        this.state.viewX - this.state.floatSize);

    const floatY = Math.min(Math.max(this.state.clientY - half, 0),
        this.state.viewY - this.state.floatSize);

    const componentContent = (
      <div className="App">
        <div
          className="floater" style={{
            left: floatX,
            top: floatY,
            width: `${this.state.floatSize}px`,
            height: `${this.state.floatSize}px`,
          }}
        />
        <div className="header">
          <h2>ben fletcher</h2>
          <h3>developer</h3>
        </div>
        <p className="about">
          Lawyer turned developer with an love and passion for clear code that
          elegantly solves hard problems.
        </p>
        <Projects />
      </div>
    );

    return (
      <div>
        <ShowCode>
          {componentContent}
        </ShowCode>
        {componentContent}
      </div>

    );
  }
}

export default App;
