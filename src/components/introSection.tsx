import { Grid, IconButton } from "@mui/material";

import { withStyles, WithStyles } from "@mui/styles";

import { ArrowDownward } from "@mui/icons-material";

import ReactPlayer from "react-player";

import bigLogo from '../assets/big_logo.svg'

import { appStyles } from "../theme";
import { mergeStyles } from "./utils";

const styles = mergeStyles(appStyles);

interface Props extends WithStyles<typeof styles> {
    playingVideo: boolean;
    sectionRef: React.RefObject<HTMLDivElement>;
    onScrollDown: () => void;
}

export const IntroSection = withStyles(styles)(function (props: Props) {
    const {
        classes,
        sectionRef: ref,
        playingVideo,
        onScrollDown,
    } = props;

    const introVideo: string = '../assets/intro.mp4';
    const logoAlt: string = 'art house media group';

    return (<Grid ref={ref}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={`${classes.body} ${classes.intro}`}>
        <img width={640} src={bigLogo} alt={logoAlt} />
        <Grid
            alignItems="center"
            justifyContent="center">
            <Grid item className={classes.h100}></Grid>
            <IconButton size="large" className={classes.closeIntro} onClick={() => onScrollDown()}>
                <ArrowDownward fontSize="inherit" />
            </IconButton>
        </Grid>
        <ReactPlayer playing={playingVideo} loop muted className={classes.introVideo} url={introVideo} />
    </Grid>);
});