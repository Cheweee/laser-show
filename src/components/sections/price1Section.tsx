import { Grid, Typography } from "@mui/material";
import { withStyles, WithStyles } from "@mui/styles";
import { appStyles, pricesStyles } from "../../theme";
import { mergeStyles } from "../../utils";

const styles = mergeStyles(appStyles, pricesStyles);

interface Props extends WithStyles<typeof styles> {
    sectionRef: React.RefObject<HTMLDivElement>;
}

export const Price1Section = withStyles(styles)(function (props: Props) {
    const { classes, sectionRef } = props;

    return (
        <Grid ref={sectionRef} className={classes.cardRed}
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
    );
});