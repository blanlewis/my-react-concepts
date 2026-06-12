import { CircularProgress } from "@mui/material";

const CustomSpinnerLoader = () => {
    return (
        <CircularProgress
            variant="determinate"
            value={50}
            aria-label="Loading"
        />
    );
};

export default CustomSpinnerLoader;