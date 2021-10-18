export const appTimelineStyles = () => ({
    appTimeline: {
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
});