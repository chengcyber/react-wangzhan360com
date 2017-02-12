import React, { Component, Proptypes } from 'react';
import ScrollPage from './ScrollPage';
import Section from './Section';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';

class ScrollPageSecs extends Component {
  static propTypes = {};
  constructor(props, context) {
    super(props, context);
    this.state = {
      curPage: 1
    };
  }

  onPageChange(curPage) {
    this.setState({
      curPage
    })
  }

  render() {
    
    return (
      <ScrollPage
        curPage={1}
        totalPage={5}
        onPageChange={this.onPageChange.bind(this)}
      >
        <Section>
          <Section1 />
        </Section>
        <Section>
          <Section2 
            active={this.state.curPage === 2} 
          />
        </Section>
        <Section>
          <Section3 />
        </Section>
        <Section>
          <Section4 />
        </Section>
        <Section>
          <Section5 
            active={this.state.curPage === 5}
          />
        </Section>
      </ScrollPage>
    )
  }
}

export default ScrollPageSecs;