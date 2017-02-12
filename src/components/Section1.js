import React from 'react';

class Section1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentCarousel: 1,
            totalCarousels: 3
        }


        this.leftCarousel = this.leftCarousel.bind(this);     
        this.rightCarousel = this.rightCarousel.bind(this);     
    }

    componentDidMount() {
        this.carouselInterval = setInterval(this.rightCarousel, 6000);
    }

    leftCarousel() {
        let prev;

        const {currentCarousel, totalCarousels} = this.state;
        if (currentCarousel === 1) {
        prev = totalCarousels
        } else {
        prev = currentCarousel - 1
        }

        this.setState({
          currentCarousel: prev
        });
        // console.log('prev', prev);
    }

  rightCarousel () {
    let next = this.state.currentCarousel;

    const {currentCarousel, totalCarousels} = this.state;
    if (currentCarousel === totalCarousels) {
      next = 1;
    } else {
      next = currentCarousel + 1;
    }

    this.setState({
        currentCarousel: next
    })
    // console.log('next', next);
  }

  handleMouseOver() {
      clearInterval(this.carouselInterval);
  }

  handleMouseLeave() {
      this.carouselInterval = setInterval(this.rightCarousel, 6000);
  }

  renderCarousel() {
      const { currentCarousel } = this.state;
      return [1, 2, 3].map((item, index) => {
        //   console.log('item', item);
        //   console.log('currentCarousel', currentCarousel)
          if (item == currentCarousel) {
            return (
                <div
                    key={index}
                    className={`carousels carousel-${item} animate-carousel`}
                    onMouseOver={this.handleMouseOver.bind(this)}
                    onMouseLeave={this.handleMouseLeave.bind(this)}
                >
                    <span className="ps-prev" onClick={this.leftCarousel}>
                        <span className="ps-prevIcon"></span>
                    </span>
                    <span className="ps-next" onClick={this.rightCarousel}>
                        <span className="ps-nextIcon"></span>
                    </span>

                    <div className="use-rightnow">立即使用</div>
                </div>
            )
          } else {
            return (
                <div key={index} className={`carousels carousel-${item} carousel-inactive`}>
                    <span className="ps-prev" onClick={this.leftCarousel}>
                        <span className="ps-prevIcon"></span>
                    </span>
                    <span className="ps-next" onClick={this.rightCarousel}>
                        <span className="ps-nextIcon"></span>
                    </span>

                    <div className="use-rightnow">立即使用</div>
                </div>
            )
          }
      })
  }

    render() {
        const { currentCarousel } = this.state;
        return (
            <div className="section first-page">
                {this.renderCarousel()}
                <div className="notice-row">
                    <div className="notice-row-container">
                        <a href="/notice/detail9" target="_blank">360网站卫士中转域名（CNAME值）变更通知</a>
                        <a href="/notice/index" target="_blank">More</a>
                    </div>
                </div>
                <div className="icon-list">
                    <ul>
                        <li><span>DDos防护</span></li>
                        <li><span>500%加速</span></li>
                        <li><span>“补天”联动防火墙</span></li>
                        <li><span>秒级识别</span></li>
                        <li><span>数据分析</span></li>
                        <li><span>高防DNS</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Section1;