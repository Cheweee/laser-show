export const sectionsStyles = () => ({
    body: {
        height: '100%',
        paddingLeft: '15%',
        paddingRight: '15%',
        position: 'relative',
        overflow: 'hidden',
    },
    background: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100% !important',
        height: '100% !important',
        zIndex: -1
    },
    closeIntroButton: {
        color: '#fff !important',
        width: '64px',
        height: '64px',
        fontSize: '56px !important'
    },
    clientImg: {
        padding: '1em',
        background: 'rgba(255,255,255,.5)',
        borderRadius: '5px'
    },
    introVideo: {
        '& video': {
            objectFit: 'cover',
            overflow: 'hidden'
        }
    },
    contactsVideo: {
        width: '100% !important',
        height: '100% !important',
        '& video': {
            width: '100% !important',
            height: '100% !important',
            overflow: 'hidden',
            objectFit: 'cover'
        }
    },
    coverImg: {
        width: '100%',
        height: '100%',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    },
    aboutUsBackground: {
        filter: 'blur(5px)',
        objectFit: 'cover'
    },
});