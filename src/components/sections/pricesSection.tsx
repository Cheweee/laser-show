import { useEffect, useRef, useState } from "react";

import { Grid, Typography, IconButton } from "@mui/material";
import { withStyles, WithStyles } from "@mui/styles";
import { ArrowBack, ArrowForward, Phone, Instagram } from "@mui/icons-material";

import ReactPlayer from "react-player";

import { appStyles } from "../../theme";
import { mergeStyles, options } from "../../utils";

import pricesBackground from '../../assets/prices_background.jpg';

const styles = mergeStyles(appStyles);

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
        if (sectionShown) return;

        switch (priceIndex) {
            case 0: price1Ref && price1Ref.current?.scrollIntoView(options);
                break;
            case 1: price2Ref && price2Ref.current?.scrollIntoView(options);
                break;
            case 2: price3Ref && price3Ref.current?.scrollIntoView(options);
                break;
        }
    }, [priceIndex]);

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
                        <Grid ref={price1Ref} className={classes.cardRed}
                            container
                            direction="column"
                            alignItems="center"
                            justifyContent="center">
                            <Grid>
                                <Typography variant="h4" component="h4">
                                    Стоимость лазерного шоу
                                </Typography>
                                <Grid container direction="row">
                                    <Grid item xs="auto" container direction="column" className={`${classes.mt2} ${classes.mr1}`}>
                                        <Typography variant="h6" component="h6">Лучевое лазерное шоу 5-6 мин.</Typography>
                                        <Typography variant="h6" component="h6">Анимационное лазерное шоу 5-6 мин.</Typography>
                                    </Grid>
                                    <Grid item xs="auto" container direction="column" className={`${classes.mt2} ${classes.mr1}`}>
                                        <Typography variant="h6" component="h6">25 000 &#8381;</Typography>
                                        <Typography variant="h6" component="h6">40 000 &#8381;</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid ref={price2Ref} className={classes.cardLightBlue}
                            container
                            direction="column"
                            alignItems="center"
                            justifyContent="center">
                            <Grid>
                                <Typography variant="h4" component="h4">
                                    Изготовление  лазерного шоу эксклюзивно для заказчика
                                </Typography>
                                <Typography className={classes.mt2} variant="h6" component="h6">Прорисовка 1 минуты шоу</Typography>
                                <Grid container direction="row">
                                    <Grid item xs="auto" container direction="column" className={`${classes.mt2} ${classes.mr1}`}>
                                        <Typography variant="h6" component="h6">Лучевое лазерное шоу </Typography>
                                        <Typography variant="h6" component="h6">Анимационное лазерное шоу (прорисовка 1 минуты шоу)</Typography>
                                    </Grid>
                                    <Grid item xs="auto" container direction="column" className={`${classes.mt2} ${classes.mr1}`}>
                                        <Typography variant="h6" component="h6">2 500 &#8381;</Typography>
                                        <Typography variant="h6" component="h6">5 000 &#8381;</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid ref={price3Ref} className={classes.cardRed}
                            container
                            direction="column"
                            alignItems="center"
                            justifyContent="center">
                            <Grid>
                                <Typography variant="h4" component="h4">
                                    Поверхности для лазерного проецирования
                                </Typography>
                                <Grid container direction="row" justifyContent="center">
                                    <Grid item xs="auto" container direction="column" className={`${classes.mt2} ${classes.mr1}`}>
                                        <Typography variant="h6" component="h6">Водный занавес</Typography>
                                        <Typography variant="h6" component="h6">Водный веерный экран</Typography>
                                        <Typography variant="h6" component="h6">Водное облако</Typography>
                                        <Typography variant="h6" component="h6">Проекционная сетка</Typography>
                                    </Grid>
                                    <Grid item xs="auto" container direction="column" className={`${classes.mt2} ${classes.mr1}`}>
                                        <Typography variant="h6" component="h6">от 40 000 &#8381;</Typography>
                                        <Typography variant="h6" component="h6">от 40 000 &#8381;</Typography>
                                        <Typography variant="h6" component="h6">от 20 000 &#8381;</Typography>
                                        <Typography variant="h6" component="h6">от 10 000 &#8381;</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
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
                        <img src={`${pricesBackground}?w=162&auto=format`} srcSet={`${pricesBackground}?w=162&auto=format&dpr=2 2x`} alt="show" loading="lazy" />
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