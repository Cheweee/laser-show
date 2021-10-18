import { Grid, Typography } from "@mui/material";
import { withStyles, WithStyles } from "@mui/styles";
import { bootstrap, pricesStyles } from "../../theme";
import { mergeStyles } from "../../utils";

const styles = mergeStyles(bootstrap, pricesStyles);

interface Props extends WithStyles<typeof styles> {
    sectionRef: React.RefObject<HTMLDivElement>;
}

export const Price2Section = withStyles(styles)(function (props: Props) {
    const { classes, sectionRef } = props;

    return (
        <Grid ref={sectionRef} className={classes.cardLightBlue}
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
    );
});