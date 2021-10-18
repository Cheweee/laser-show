import { Grid, IconButton } from "@mui/material";

import { withStyles, WithStyles } from "@mui/styles";

import { ArrowDownward } from "@mui/icons-material";

import ReactPlayer from "react-player";

import bigLogo from '../../assets/big_logo.svg'

import { appStyles, sectionsStyles } from "../../theme";
import { mergeStyles } from "../../utils";

const styles = mergeStyles(appStyles, sectionsStyles);

interface Props extends WithStyles<typeof styles> {
    sectionShown: boolean;
    sectionRef: React.RefObject<HTMLDivElement>;
    onScrollDown: () => void;
}

export const IntroSection = withStyles(styles)(function (props: Props) {
    const {
        classes,
        sectionRef: ref,
        sectionShown,
        onScrollDown,
    } = props;

    const introVideo: string = '../../assets/intro.mp4';
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
            <Grid className={classes.h100} />
            <IconButton size="large" className={classes.closeIntro} onClick={() => onScrollDown()}>
                <ArrowDownward fontSize="inherit" />
            </IconButton>
        </Grid>
        <ReactPlayer playing={sectionShown} loop muted className={classes.introVideo} url={introVideo} />
    </Grid>);
});