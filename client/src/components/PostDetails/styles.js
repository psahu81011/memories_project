import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    media: {
        height: 250,
        borderRadius: 5,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "300px",
        },
    },
    card: {
        // borderRadius: "20px",
        // width: "100%",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    section: {
        // borderRadius: "20px",
        // margin: "10px",
    },
    recommendedPosts: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    loadingPaper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        borderRadius: "15px",
        height: "39vh",
    },
}));
