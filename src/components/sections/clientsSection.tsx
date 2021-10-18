import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import { Grid, Typography } from "@mui/material";
import { withStyles, WithStyles } from "@mui/styles";
import { appStyles } from "../../theme";
import { mergeStyles } from "../../utils";

//#region images
import mvideo from '../../assets/clients/mvideo.svg';
import danone from '../../assets/clients/danone.png';
import porsche from '../../assets/clients/porsche.png';
import renault from '../../assets/clients/renault.png';
import rosbank from '../../assets/clients/rosbank.png';
import s7 from '../../assets/clients/s7.png';
import gedon from '../../assets/clients/gedon.jpg';
import whiskas from '../../assets/clients/whiskas.jpg';

import clientsBackground from '../../assets/clients_background.jpg';
//#endregion

const styles = mergeStyles(appStyles)

interface Props extends WithStyles<typeof styles> {
    sectionRef: React.RefObject<HTMLDivElement>;
}

export const ClientsSection = withStyles(styles)(function (props: Props) {
    const {
        classes,
        sectionRef
    } = props;

    return (
        <Grid ref={sectionRef}
            container
            alignItems="center"
            className={`${classes.body} ${classes.intro}`}>
            <Grid container>
                <Grid item className={classes.mr3}>
                    <Typography variant="h4" component="h4" className={classes.text}>Наши клиенты</Typography>
                    <div className={`${classes.hl} ${classes.mt3}`} />
                </Grid>
                <Grid item xs>
                    <Masonry columns={3} spacing={5}>
                        <MasonryItem>
                            <img className={classes.clientsItem} src={gedon} alt={"GEDON"} loading="lazy" />
                        </MasonryItem>
                        <MasonryItem>
                            <img className={classes.clientsItem} src={mvideo} alt={"MVIDEO"} loading="lazy" />
                        </MasonryItem>
                        <MasonryItem>
                            <img className={classes.clientsItem} src={porsche} alt={"PORSCHE"} loading="lazy" />
                        </MasonryItem>
                        <MasonryItem>
                            <img className={classes.clientsItem} src={rosbank} alt={"ROSBANK"} loading="lazy" />
                        </MasonryItem>
                        <MasonryItem>
                            <img className={classes.clientsItem} src={renault} alt={"RENAULT"} loading="lazy" />
                        </MasonryItem>
                        <MasonryItem>
                            <img className={classes.clientsItem} src={danone} alt={"DANONE"} loading="lazy" />
                        </MasonryItem>
                        <MasonryItem>
                            <img className={classes.clientsItem} src={whiskas} alt={"WHISKAS"} loading="lazy" />
                        </MasonryItem>
                        <MasonryItem>
                            <img className={classes.clientsItem} src={s7} alt={"S7"} loading="lazy" />
                        </MasonryItem>
                    </Masonry>
                </Grid>
            </Grid>
            <img className={classes.aboutUsBackground} src={clientsBackground} alt="laser show" />
        </Grid>
    )
})