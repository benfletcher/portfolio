import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './App.css';
import ShowCode from './show-code';
import Projects from './Projects';
import Annotations from './Annotations';

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
      annotations: [
        {
          x: 250,
          y: 250,
          content: 'Hello world!',
        },
        {
          x: 350,
          y: 310,
          content: 'Goodbye world!',
        },
      ],
    };

    this.keyPress = this.keyPress.bind(this);
    this.wheel = this.wheel.bind(this);
    this.click = this.click.bind(this);
    this.editAnnotation = this.editAnnotation.bind(this);
  }

  componentDidMount() {
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
    window.addEventListener('click', this.click);
  }

  keyPress({ key }) {
    if (key === 'z' || key === 'Z') {
      this.setState(prevState => ({ reveal: !prevState.reveal }));
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

  click(e) {
    e.preventDefault();
    console.log(e);
    this.setState(prevState => ({
      annotations: [
        ...prevState.annotations,
        {
          x: e.clientX,
          y: e.clientY,
          content: 'yohoho',
        },
      ],
    }));
  }

  editAnnotation(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('annotation', e.target);
  }

  render() {
    const half = this.state.floatSize / 2;

    const floatX = Math.min(Math.max(this.state.clientX - half, 0),
      this.state.viewX - this.state.floatSize);

    const floatY = Math.min(Math.max(this.state.clientY - half, 0),
      this.state.viewY - this.state.floatSize);

    const componentContent = (
      <div className="App">
        {
          this.state.reveal
            ? <div
              className="floater" style={{
                transform: `translateX(${floatX}px) translateY(${floatY}px)`,
                width: `${this.state.floatSize}px`,
                height: `${this.state.floatSize}px`,
              }}
            />
            : null}
        <Annotations onclick={this.editAnnotation}>
          {this.state.annotations}
        </Annotations>
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
        {this.state.reveal ? <ShowCode>
          {componentContent}
        </ShowCode> : null}
        {componentContent}
      </div>
    );
  }
}

export default App;
