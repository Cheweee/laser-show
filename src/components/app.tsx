import { useEffect, useRef, useState } from "react";

import { withStyles } from "@mui/styles";

import { appStyles } from "../theme";
import { mergeStyles, options } from "../utils";

import { IntroSection } from "./sections/introSection";
import { AboutUseSection } from "./sections/aboutUsSection";
import { ClientsSection } from "./sections/clientsSection";
import { PricesSection } from "./sections/pricesSection";
import { AppTimeline } from "./appTimeline";

const styles = mergeStyles(appStyles);

export const App = withStyles(styles)(function (props: any) {
    const { classes } = props;

    const introRef = useRef<HTMLDivElement>(null);
    const clientsRef = useRef<HTMLDivElement>(null);
    const pricesRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState<number>(0);
    const [scrollingDone, setScrollingDone] = useState<boolean>(true);

    useEffect(() => { document.title = "Art House Media Group" }, []);

    useEffect(() => {
        switch (index) {
            case 0:
                introRef && introRef.current?.scrollIntoView(options);
                break;
            case 1:
                aboutUsRef && aboutUsRef.current?.scrollIntoView(options);
                break;
            case 2:
                clientsRef && clientsRef.current?.scrollIntoView(options);
                break;
            case 3:
                pricesRef && pricesRef.current?.scrollIntoView(options);
                break;
        }
    }, [index]);

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
            <AppTimeline sectionIndex={index} onSectionNavigate={(index) => setIndex(index)} />
            <IntroSection sectionRef={introRef} sectionShown={index === 0} onScrollDown={() => setIndex(1)} />
            <AboutUseSection sectionRef={aboutUsRef} />
            <ClientsSection sectionRef={clientsRef} />
            <PricesSection sectionRef={pricesRef} sectionShown={index === 3} />
        </div>
    )
});