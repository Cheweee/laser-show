import { useEffect, useRef, useState } from "react";

import { withStyles } from "@mui/styles";
import { Grid, IconButton, Typography } from "@mui/material";
import {
    ArrowBack,
    ArrowDownward,
    ArrowForward,
    Instagram,
    Phone,
    FiberManualRecord
} from "@mui/icons-material";

import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';

import ReactPlayer from "react-player";

import { appStyles } from "../../theme";
import { mergeStyles } from "../utils";

//#region images
import bigLogo from '../../assets/Big Logo.svg'
import mvideo from '../../assets/clients/mvideo.svg';
import danone from '../../assets/clients/danone.png';
import porsche from '../../assets/clients/porsche.png';
import renault from '../../assets/clients/renault.png';
import rosbank from '../../assets/clients/rosbank.png';
import s7 from '../../assets/clients/s7.png';
import gedon from '../../assets/clients/gedon.jpg';
import whiskas from '../../assets/clients/whiskas.jpg';
import laserShow3 from '../../assets/laser show 3.jpg';
import clientsBackground from '../../assets/laser show 2.jpg';
//#endregion

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
            case 1: aboutUsRef && aboutUsRef.current?.scrollIntoView(options);
                break;
            case 2: clientsRef && clientsRef.current?.scrollIntoView(options);
                break;
            case 3: pricesRef && pricesRef.current?.scrollIntoView(options);
                break;
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
            <Grid ref={introRef}
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                className={`${classes.body} ${classes.intro}`}>
                <img width={640} src={bigLogo} alt="art house media group" />
                <Grid
                    alignItems="center"
                    justifyContent="center">
                    <Grid item className={classes.h100}></Grid>
                    <IconButton size="large" className={classes.closeIntro} onClick={() => scrollToAboutUs()}>
                        <ArrowDownward fontSize="inherit" />
                    </IconButton>
                </Grid>
                <ReactPlayer playing={introPlaying} loop muted className={classes.introVideo} url={"../../assets/MVI_8358.mp4"} />
            </Grid>
            <Grid ref={aboutUsRef}
                container
                alignItems="center"
                justifyContent="center"
                className={`${classes.body} ${classes.intro} ${classes.p4}`}>
                <Grid direction="row" container>
                    <Grid></Grid>
                    <Grid item xs="auto" className={classes.mr4}><div className={classes.vl} /></Grid>
                    <Grid item xs={6} container direction="column">
                        <Typography variant="h4" component="h4" className={`${classes.text} ${classes.thinFont}`}>
                            Наша компания имеет успешный опыт работы на рынке event-услуг и зарекомендовала себя
                            как надежный партнер в организации любого события
                        </Typography>
                        <Typography variant="h6" component="h6" className={`${classes.text} ${classes.thinFont} ${classes.mt3}`}>
                            Уникальность, надёжность и качество
                            - наши принципы, и мы отвественно выполняем все требования и пожелаения клиентов.
                        </Typography>
                        <Typography variant="h6" component="h6" className={`${classes.text} ${classes.thinFont} ${classes.mt3}`}>
                            С помощью создаваемых на нашем оборудовании спецэффектов, которые действительно завораживают
                            и удивляют, наши специалисты создадут для Вас, Ваших сотрудников, гостей или клиентов чарующее, красочное
                            волшебное представление.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid ref={clientsRef}
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
                                <img className={classes.clientsItem} src={`${mvideo}?w=162&auto=format`} srcSet={`${mvideo}?w=162&auto=format&dpr=2 2x`} alt={"MVIDEO"} loading="lazy" />
                            </MasonryItem>
                            <MasonryItem>
                                <img className={classes.clientsItem} src={`${porsche}?w=162&auto=format`} srcSet={`${porsche}?w=162&auto=format&dpr=2 2x`} alt={"PORSCHE"} loading="lazy" />
                            </MasonryItem>
                            <MasonryItem>
                                <img className={classes.clientsItem} src={`${rosbank}?w=162&auto=format`} srcSet={`${rosbank}?w=162&auto=format&dpr=2 2x`} alt={"ROSBANK"} loading="lazy" />
                            </MasonryItem>
                            <MasonryItem>
                                <img className={classes.clientsItem} src={`${renault}?w=162&auto=format`} srcSet={`${renault}?w=162&auto=format&dpr=2 2x`} alt={"RENAULT"} loading="lazy" />
                            </MasonryItem>
                            <MasonryItem>
                                <img className={classes.clientsItem} src={`${danone}?w=162&auto=format`} srcSet={`${danone}?w=162&auto=format&dpr=2 2x`} alt={"DANONE"} loading="lazy" />
                            </MasonryItem>
                            <MasonryItem>
                                <img className={classes.clientsItem} src={`${whiskas}?w=162&auto=format`} srcSet={`${whiskas}?w=162&auto=format&dpr=2 2x`} alt={"WHISKAS"} loading="lazy" />
                            </MasonryItem>
                            <MasonryItem>
                                <img className={classes.clientsItem} src={`${s7}?w=162&auto=format`} srcSet={`${s7}?w=162&auto=format&dpr=2 2x`} alt={"S7"} loading="lazy" />
                            </MasonryItem>
                        </Masonry>
                    </Grid>
                </Grid>
                <img className={classes.aboutUsBackground} src={clientsBackground} alt="laser show" />
            </Grid>
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
                        url={"../../assets/WhatsApp Video 2021-10-11 at 19.37.35.mp4"}
                        playing loop muted />
                </Grid>
            </Grid >
        </div >
    )
});