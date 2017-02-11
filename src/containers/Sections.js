import React from 'react';

import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';

class Sections extends React.Component {

  constructor() {
    super();

    this.state = {
      currentSection: 1,
      totalSection: 5,
      processing: false
    }
  }


  handleWheel(e) {
    // console.log('Wheel', e.deltaY);
    // console.log(this.state.processing)

    if (this.state.processing) return;
    if (e.deltaY >= 5) {
      this.nextSection();
    }
    if (e.deltaY <= -5) {
      this.prevSection();
    }
  }

  prevSection() {
    console.log('prevSection');
    const {currentSection} = this.state;
    if (currentSection === 1) return null;
    this.setState({
      currentSection: currentSection - 1,
      processing: true
    })
    this.clearProcessing();
  }

  nextSection() {
    console.log('nextSection');
    const {currentSection, totalSection} = this.state;
    if (currentSection === totalSection) return null;
    this.setState({
      currentSection: currentSection + 1,
      processing: true
    });
    this.clearProcessing();
  }

  clearProcessing() {
    setTimeout(() => this.setState({
      processing: false
    }), 1000);
  }

  renderSection() {
    const { currentSection } = this.state;
    switch (currentSection) {
      case 1:
        return <Section1 />
      case 2:
        return <Section2 />
      case 3:
        return <Section3 />
      case 4:
        return <Section4 /> 
      case 5:
        return <Section5 />
      default:
        return <Section1 />
    }
 
  }

  render() {
    return ( 
      <div
        className="section-wrapper"
        onWheel={(e) =>  this.handleWheel(e)}
      > 
      {this.renderSection()}
      </div>
    );
  }
}

export default Sections;