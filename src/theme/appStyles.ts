export const appStyles = () => ({
    body: {
        height: '100%',
        width: '100%',
        paddingLeft: '15%',
        paddingRight: '15%'
    },
    text: {
        color: '#fff !important'
    },
    h100: {
        height: '100%'
    },
    w100: {
        width: '100%'
    },
    pt3: {
        paddingTop: '8em'
    },
    p1: {
        padding: '1em'
    },
    p4: {
        padding: '4em'
    },
    py3: {
        padding: '3em ',
    },
    mr1: {
        marginRight: '1em !important'
    },
    mr2: {
        marginRight: '2em !important'
    },
    mr3: {
        marginRight: '3em !important'
    },
    mr4: {
        marginRight: '4em !important'
    },
    mt2: {
        marginTop: '8px !important'
    },
    mt3: {
        marginTop: '3em !important'
    },
    mt4: {
        marginTop: '4em !important'
    },
    clientsItem: {
        padding: '1em',
        background: 'rgba(255,255,255,.5)',
        border: 'radial-gradient(circle at 0% 20%, #53275a 30%, #EB5757 80% ) 1px solid',
        borderRadius: '5px',
        color: '#fff',
        transition: 'transform ease .3s',
        // '&:hover': {
        //     transform: 'scale(1.03)'
        // }
    },
    navigator: {
        position: 'absolute',
        top: '50%',
        right: '40px',
        display: 'flex',
        flexDirection: 'column',
        '& button': {
            color: '#fff',
            transition: 'color ease .5s',
            marginTop: '10px',
            marginBottom: '10px'
        },
        '& button:hover': {
            color: '#c8c8c8'
        },
        '& button.active': {
            color: '#6A4C93'
        },
        transform: 'translateY(-50%)',
        zIndex: 100
    },
    intro: {
        position: 'relative',
        overflow: 'hidden',
    },
    introVideo: {
        background: 'rgba(255,255,255, .2)',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100% !important',
        height: '100% !important',
        '& video': {
            objectFit: 'cover',
            overflow: 'hidden'
        },
        zIndex: -1
    },
    closeIntro: {
        color: '#fff !important',
        width: '64px',
        height: '64px',
        fontSize: '56px !important'
    },
    aboutUsBackground: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100% !important',
        height: '100% !important',
        zIndex: -1,
        filter: 'blur(5px)',
        objectFit: 'cover'
    },
    borderedImage: {
        borderRadius: '5px'
    },
    cardRed: {
        flex: '0 0 100% !important',
        background: '#EB5757',
        color: '#FFF',
        padding: '1em'
    },
    cardPurple: {       
        flex: '0 0 100% !important',
        background: '#896BB3',
        color: '#FFF',
        padding: '1em'
    },
    cardLightBlue: {
        flex: '0 0 100% !important',
        background: '#2D9CDB',
        color: '#FFF',
        padding: '1em 8em'
    },
    contactsVideo: {
        background: 'rgba(255,255,255, .2)',
        width: '100% !important',
        height: '100% !important',
        '& video': {
            width: '100% !important',
            height: '100% !important',
            overflow: 'hidden',
            objectFit: 'cover'
        }
    },
    cardsContainer: {
        position: 'relative'
    },
    cardsWrapper: {
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'nowrap !important'
    },
    cardsControls: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        padding: '1em'
    },
    cardImg: {
        width: '100%',
        height: '100%',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    },
    vl: {
        borderLeft: '6px solid #fff',
        height: '130px'
    },
    hl: {
        borderBottom: '6px solid #fff',
        width: '100%'
    },
    thinFont: {
        fontWeight: '300 !important'
    }
});