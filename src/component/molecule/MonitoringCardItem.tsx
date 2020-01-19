import React from 'react';
import './MonitoringCardItem.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MonitoringCardModel from '../../model/MonitoringCardModel';

export interface IAttributeCardProps {
    attributeCardModel: MonitoringCardModel

}
export default class MonitoringCardItem extends React.Component<IAttributeCardProps> {

    public render() {
        return (
            <Card className="MonitoringCardItem">
                <CardContent>
                    <Grid container spacing={3} >
                        <Grid item xs={6}>
                            <Typography style={{ textAlign: "left" }} variant="h4" component="h4">
                                {this.props.attributeCardModel.firstLineFirstText}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography style={{ textAlign: "right" }} variant="h4" component="h4">
                                {this.props.attributeCardModel.firstLineSecondText}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {this.props.attributeCardModel.value.split("\n").map((i: any, key: any) => {
                                return <Typography key={key} style={{ textAlign: "center" }} variant="h3" component="h3">
                                    {i}
                                </Typography>;
                            })}
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{ textAlign: "left" }} variant="h6" component="h6">
                                {this.props.attributeCardModel.lastLineText}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        );
    }
}