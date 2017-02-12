import React from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';

class FullPageSecs extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        current: 0,
      }
    }

    render() {
        const options = {
            sectionClassName: 'section-wrapper',
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],
            scrollBar: false,
            navigation: false,            // no dot-navigation
            verticalAlign: false,
            // sectionPaddingTop: '50px',
            // sectionPaddingBottom: '50px',
            // arrowNavigation: true,
            // lockAnchors: false,
            delay: 700,
            scrollCallback: (states) => this.setState({current: states.activeSection})
        };

        const {current} = this.state

        return (
            <div>
                <SectionsContainer {...options}>
                    <Section>
                      <Section1 />
                    </Section>
                    <Section>
                      <Section2 />
                    </Section>
                    <Section>
                      <Section3 />
                    </Section>
                    <Section>
                      <Section4 />
                    </Section>
                    <Section>
                      <Section5 />
                    </Section>
                </SectionsContainer>
            </div>
        )
    }

}

export default FullPageSecs;