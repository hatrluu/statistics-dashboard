import React, { Component } from 'react';
import '../styles/RefBarChart.css';
class RefBarChart extends Component {

    numberWithCommas(n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    render() {
        var percentage = this.props.valueProp/this.props.max*100;
        return (
            <div className="ref-bar">
                <span className="ref-bar-text text-success">{this.numberWithCommas(this.props.min)}</span>
                <div className="progress bar-height">
                    {/* <span className="med-size" style={{left: (this.props.mid/this.props.max*100)+'%'}}></span> */}
                    <span className="progress-bar-text">{this.props.valueProp} ({percentage.toFixed(2)}%)</span>
                    <div className="progress-bar bar-height bg-info" style={{ width: (percentage.toFixed(2))+'%' }}>
                    </div>
                </div>
                <span className="ref-bar-text text-danger">{this.numberWithCommas(this.props.max)}</span>
            </div>
        )
    }
}

export default RefBarChart;