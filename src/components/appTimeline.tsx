import { FiberManualRecord } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { withStyles, WithStyles } from "@mui/styles";
import { appStyles } from "../theme";
import { mergeStyles } from "../utils";

const styles = mergeStyles(appStyles);

interface Props extends WithStyles<typeof styles> {
    sectionIndex: number;
    onSectionNavigate: (index: number) => void;
}

export const AppTimeline = withStyles(styles)(function (props: Props) {
    const {
        classes,
        sectionIndex,
        onSectionNavigate,
    } = props;

    return (
        <div className={classes.navigator}>
            <IconButton onClick={() => onSectionNavigate(0)} className={`${sectionIndex === 0 && 'active'}`}>
                <FiberManualRecord />
            </IconButton>
            <IconButton onClick={() => onSectionNavigate(1)} className={`${sectionIndex === 1 && 'active'}`}>
                <FiberManualRecord />
            </IconButton>
            <IconButton onClick={() => onSectionNavigate(2)} className={`${sectionIndex === 2 && 'active'}`}>
                <FiberManualRecord />
            </IconButton>
            <IconButton onClick={() => onSectionNavigate(3)} className={`${sectionIndex === 3 && 'active'}`}>
                <FiberManualRecord />
            </IconButton>
        </div>
    );
});