import { useEffect, useRef, useState } from "react";

import { Grid, Typography, IconButton } from "@mui/material";
import { withStyles, WithStyles } from "@mui/styles";
import { ArrowBack, ArrowForward, Phone, Instagram } from "@mui/icons-material";

import ReactPlayer from "react-player";

import { appStyles, pricesStyles, sectionsStyles } from "../../theme";
import { mergeStyles, options } from "../../utils";

import pricesBackground from '../../assets/prices_background.jpg';
import { Price1Section } from "./price1Section";
import { Price2Section } from "./price2Section";
import { Price3Section } from "./price3Section";

const styles = mergeStyles(appStyles, sectionsStyles, pricesStyles);

interface Props extends WithStyles<typeof styles> {
    sectionRef: React.RefObject<HTMLDivElement>;
    sectionShown: boolean;
}

export const PricesSection = withStyles(styles)(function (props: Props) {
    const {
        classes,
        sectionRef,
        sectionShown
    } = props;

    const [priceIndex, setPriceIndex] = useState<number>(0);

    const price1Ref = useRef<HTMLDivElement>(null);
    const price2Ref = useRef<HTMLDivElement>(null);
    const price3Ref = useRef<HTMLDivElement>(null);

    const videoUrl: string = '../../assets/prices_video.mp4';

    useEffect(() => {
        if (!sectionShown) return;

        switch (priceIndex) {
            case 0: price1Ref && price1Ref.current?.scrollIntoView(options);
                break;
            case 1: price2Ref && price2Ref.current?.scrollIntoView(options);
                break;
            case 2: price3Ref && price3Ref.current?.scrollIntoView(options);
                break;
        }
    }, [sectionShown, priceIndex]);

    function priceBack() {
        priceIndex > 0 && setPriceIndex(priceIndex - 1);
    }

    function priceForward() {
        priceIndex < 2 && setPriceIndex(priceIndex + 1);
    }

    return (
        <Grid container ref={sectionRef} className={classes.h100} direction="row">
            <Grid xs item
                container
                direction="column"
                alignItems="start"
                justifyContent="start"
            >
                <Grid xs={6} item container direction="row" className={classes.cardsContainer}>
                    <div className={classes.cardsWrapper}>
                        <Price1Section sectionRef={price1Ref} />
                        <Price2Section sectionRef={price2Ref} />
                        <Price3Section sectionRef={price3Ref} />
                    </div>
                    <Grid direction="row" container className={classes.cardsControls}>
                        <Grid item xs={1}>
                            {priceIndex > 0 &&
                                <IconButton className={classes.text} onClick={() => priceBack()} size="large">
                                    <ArrowBack fontSize="inherit" />
                                </IconButton>
                            }
                        </Grid>
                        <Grid item xs={1}></Grid>

                        <Grid item xs={1}>
                            {priceIndex < 2 &&
                                <IconButton className={classes.text} onClick={() => priceForward()} size="large">
                                    <ArrowForward fontSize="inherit" />
                                </IconButton>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={6} item container direction="row">
                    <Grid xs={6} item className={classes.cardImg}>
                        <img src={pricesBackground} alt="show" loading="lazy" />
                    </Grid>
                    <Grid xs={6} item className={classes.cardPurple}
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center">
                        <Grid>
                            <Typography variant="h4" component="h4">
                                Наши контакты:
                            </Typography>
                            <Grid item xs="auto" container direction="row" className={classes.mt2}
                                alignItems="center">
                                <Phone className={classes.mr1} />
                                <Typography variant="h6" component="h6">+7(###)###-##-##</Typography>
                            </Grid>
                            <Grid item xs="auto" container direction="row" className={classes.mt2}
                                alignItems="center">
                                <Instagram className={classes.mr1} />
                                <Typography variant="h6" component="h6">arthousemediagroup</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs item>
                <ReactPlayer
                    className={classes.contactsVideo}
                    url={videoUrl}
                    playing={sectionShown} loop muted />
            </Grid>
        </Grid >
    );
});