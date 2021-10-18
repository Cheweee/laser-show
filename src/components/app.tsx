import { useEffect, useRef, useState } from "react";

import { withStyles } from "@mui/styles";
import { Grid, IconButton, Typography } from "@mui/material";
import {
    ArrowBack,
    ArrowForward,
    Instagram,
    Phone,
    FiberManualRecord
} from "@mui/icons-material";


import ReactPlayer from "react-player";

import { appStyles } from "../theme";
import { mergeStyles } from "./utils";
import laserShow3 from '../assets/laser show 3.jpg';
import { IntroSection } from "./introSection";
import { AboutUseSection } from "./aboutUsSection";
import { ClientsSection } from "./clientsSection";

const styles = mergeStyles(appStyles);

export const App = withStyles(styles)(function (props: any) {
    const { classes } = props;

    const [options] = useState<ScrollIntoViewOptions>({
        block: "start",
        inline: "start",
        behavior: "smooth"
    });

    const introRef = useRef<HTMLDivElement>(null);
    const clientsRef = useRef<HTMLDivElement>(null);
    const pricesRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);

    const price1Ref = useRef<HTMLDivElement>(null);
    const price2Ref = useRef<HTMLDivElement>(null);
    const price3Ref = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState<number>(0);
    const [priceIndex, setPriceIndex] = useState<number>(0);
    const [scrollingDone, setScrollingDone] = useState<boolean>(true);
    const [introPlaying, setIntroPlaying] = useState<boolean>(true);

    useEffect(() => {
        document.title = "Art House Media Group"
    }, []);

    useEffect(() => {
        switch (index) {
            case 0: {
                introRef && introRef.current?.scrollIntoView(options);
                setIntroPlaying(true);
                break;
            }
            case 1: {
                aboutUsRef && aboutUsRef.current?.scrollIntoView(options);
                setIntroPlaying(false);
                break;
            }
            case 2: {
                clientsRef && clientsRef.current?.scrollIntoView(options);
                setIntroPlaying(false);
                break;
            }
            case 3: {
                pricesRef && pricesRef.current?.scrollIntoView(options);
                setIntroPlaying(false);
                break;
            }
        }
    }, [index, options]);

    useEffect(() => {
        if (index !== 3) return;

        switch (priceIndex) {
            case 0: price1Ref && price1Ref.current?.scrollIntoView(options);
                break;
            case 1: price2Ref && price2Ref.current?.scrollIntoView(options);
                break;
            case 2: price3Ref && price3Ref.current?.scrollIntoView(options);
                break;
        }
    }, [index, options, priceIndex]);

    function scrollToIntro() {
        setIndex(0);
    }

    function scrollToAboutUs() {
        setIndex(1);
    }

    function scrollToClients() {
        setIndex(2);
    }

    function scrollToPrices() {
        setIndex(3);
    }

    function priceBack() {
        priceIndex > 0 && setPriceIndex(priceIndex - 1);
    }

    function priceForward() {
        priceIndex < 2 && setPriceIndex(priceIndex + 1);
    }

    function handleScroll(event: any) {
        if (!scrollingDone) {
            event.stopPropagation();
            return;
        }
        setScrollingDone(false);
        event.deltaY < 0 ? index > 0 && setIndex(index - 1) : index < 3 && setIndex(index + 1);
        let timeout = setTimeout(function () {
            setScrollingDone(true);
            clearTimeout(timeout);
        }, 600);
    }

    return (
        <div className={classes.h100} onWheel={(event) => handleScroll(event)}>
            <div className={classes.navigator}>
                <IconButton onClick={() => scrollToIntro()} className={`${index === 0 && 'active'}`}>
                    <FiberManualRecord />
                </IconButton>
                <IconButton onClick={() => scrollToAboutUs()} className={`${index === 1 && 'active'}`}>
                    <FiberManualRecord />
                </IconButton>
                <IconButton onClick={() => scrollToClients()} className={`${index === 2 && 'active'}`}>
                    <FiberManualRecord />
                </IconButton>
                <IconButton onClick={() => scrollToPrices()} className={`${index === 3 && 'active'}`}>
                    <FiberManualRecord />
                </IconButton>
            </div>
            <IntroSection sectionRef={introRef} playingVideo={introPlaying} onScrollDown={scrollToAboutUs} />
            <AboutUseSection sectionRef={aboutUsRef} />
            <ClientsSection sectionRef={clientsRef}/>
            <Grid container ref={pricesRef} className={classes.h100} direction="row">
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
                            <img src={`${laserShow3}?w=162&auto=format`} srcSet={`${laserShow3}?w=162&auto=format&dpr=2 2x`} alt="show" loading="lazy" />
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
                        url={"../assets/WhatsApp Video 2021-10-11 at 19.37.35.mp4"}
                        playing loop muted />
                </Grid>
            </Grid >
        </div >
    )
});