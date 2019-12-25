import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Experience extends Component {
    render() {
        return (
            // <div>
            //     <h1>Experience</h1>
            //     <h4>{this.props.startYear}</h4>
            // </div>
            <Grid>
                <Cell col={4}>
                    <p>
                        {this.props.startYear} - {this.props.endYear}
                    </p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;