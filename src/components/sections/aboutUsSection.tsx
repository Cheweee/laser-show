import { Grid, Typography } from "@mui/material";

import { WithStyles, withStyles } from "@mui/styles";

import { appStyles, sectionsStyles } from "../../theme";
import { mergeStyles } from "../../utils";

const styles = mergeStyles(appStyles, sectionsStyles);

interface Props extends WithStyles<typeof styles> {
    sectionRef: React.RefObject<HTMLDivElement>;
}

export const AboutUseSection = withStyles(styles)(function (props: Props) {
    const {
        classes,
        sectionRef
    } = props;
    return (
        <Grid ref={sectionRef}
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
    );
});