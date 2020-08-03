import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import * as Constants from './Const';

export default class HomeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
    }
    render() {
        return (
            <div style={Constants.FlippyStyles.Margin}>
                <Grid container spacing={2}>
                    {Constants.Datas.map((data) => (
                        <Grid item key={data}>
                            <Flippy
                                flipOnHover={true}
                                flipOnClick={false} // default false
                                flipDirection="horizontal"
                                style={Constants.FlippyStyles.FlipCardSize}
                            >
                                <FrontSide style={Constants.FlippyStyles.FrontCard}>
                                    <img src={data.Image} style={Constants.FlippyStyles.ImageSize} />
                                    {data.Hobby}
                                </FrontSide>
                                <BackSide style={Constants.FlippyStyles.BackCard}>
                                    <Typography align='left' color='textSecondary' variant='caption' gutterBottom='true'>
                                        When: {data.EventDate}
                                    </Typography>
                                    <Typography align='left' variant='caption' gutterBottom='true'>
                                        {data.Desc}
                                    </Typography>
                                    <Button size="small" color="primary"> Learn More</Button>
                                </BackSide>
                            </Flippy >
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}
