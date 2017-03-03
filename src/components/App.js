import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ShowCode from './show-code';
import './App.css';
import Projects from './Projects';

class App extends Component {
  constructor() {
    super();

    this.state = {
      key: null,
      reveal: false,
      clientX: null,
      clientY: null,
    };

    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keypress', this.keyPress, { capture: true });
    document.addEventListener('keydown', this.keyDown, { capture: true });
    document.addEventListener('keyup', this.keyUp, { capture: true });
    document.addEventListener('mousemove', this.mouseMove);
  }

  keyDown({ key }) {
    if (key === 'Control') {
      this.setState({ key, reveal: true });
    }
  }

  keyUp({ key }) {
    if (key === 'Control') {
      this.setState({ key: null, reveal: false });
    }
  }

  keyPress({ key }) {
    if (key === 'z' || key === 'Z') {
      this.setState({ key, reveal: !this.state.reveal });
    }
  }

  mouseMove({ clientX, clientY }) {
    this.setState({
      clientX,
      clientY,
    });
  }

  render() {
    const componentContent = (
      <div className="App">
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
        <ReactCSSTransitionGroup
          component="div"
          className="showcode"
          transitionName="showcode"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.reveal ? <ShowCode jsx={componentContent} /> : null}
        </ReactCSSTransitionGroup>
        {componentContent}
      </div>

    );
  }
}

export default App;
