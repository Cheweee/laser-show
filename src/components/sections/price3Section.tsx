import { Grid, Typography } from "@mui/material";
import { withStyles, WithStyles } from "@mui/styles";
import { appStyles, pricesStyles } from "../../theme";
import { mergeStyles } from "../../utils";

const styles = mergeStyles(appStyles, pricesStyles);

interface Props extends WithStyles<typeof styles> {
    sectionRef: React.RefObject<HTMLDivElement>;
}

export const Price3Section = withStyles(styles)(function (props: Props) {
    const { classes, sectionRef } = props;

    return (
        <Grid ref={sectionRef} className={classes.cardRed}
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
    );
});