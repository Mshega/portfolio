import React from 'react';
import Typed from 'typed.js';

class Header extends React.Component {
  componentDidMount() {
    const options = {
      strings: ['Full Stack Developer', 'Software Engineer', 'Tech Enthusiast'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <header className="header">
        <h1>Viwe Mrayise</h1>
        <span
          ref={(el) => { this.el = el; }}
          className="typed-text"
        />
      </header>
    );
  }
}

export default Header;
