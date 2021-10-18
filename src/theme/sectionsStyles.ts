export const sectionsStyles = () => ({
    body: {
        height: '100%',
        width: '100%',
        paddingLeft: '15%',
        paddingRight: '15%'
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
    clientsItem: {
        padding: '1em',
        background: 'rgba(255,255,255,.5)',
        border: 'radial-gradient(circle at 0% 20%, #53275a 30%, #EB5757 80% ) 1px solid',
        borderRadius: '5px',
        color: '#fff',
        transition: 'transform ease .3s'
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
    cardImg: {
        width: '100%',
        height: '100%',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
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
});