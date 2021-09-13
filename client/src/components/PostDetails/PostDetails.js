import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
    Paper,
    Typography,
    Divider,
    CircularProgress,
    Card,
    CardContent,
    CardMedia,
    Box,
} from "@material-ui/core";

import { getPost, getPostsBySearch } from "../../actions/posts";
import useStyles from "./styles";

const PostDetails = () => {
    const { id } = useParams();
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();

    const classes = useStyles();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    // useEffect(() => {
    //     dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    // }, [post]);

    if (!post) return null;

    if (isLoading) {
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        );
    }

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    return (
        <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
            <Card className={classes.card} elevation={0}>
                <Box style={{ flex: 0.6 }} className={classes.section}>
                    <CardContent style={{ flex: 1 }}>
                        <Typography variant="h3" component="h2">
                            {post.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" color="textSecondary" component="h2">
                            {post.tags.map((tag) => `#${tag} `)}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="p">
                            {post.message}
                        </Typography>
                        <Typography variant="h6">Created by: {post.name}</Typography>
                        <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                        <Divider style={{ margin: "20px 0" }} />
                    </CardContent>
                </Box>
                <Box style={{ flex: 0.4 }}>
                    <CardMedia
                        className={classes.media}
                        image={
                            post.selectedFile ||
                            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                        }
                        alt={post.title}
                    />
                </Box>
            </Card>
            {recommendedPosts.length ? (
                <div className={classes.section}>
                    <Typography gutterBottom variant="h5">
                        You might also like:
                    </Typography>
                    <Divider />
                    <div className={classes.recommendedPosts}>
                        {recommendedPosts.map(
                            ({ title, message, name, likes, selectedFile, _id }) => ({ title })
                        )}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </Paper>
    );
};

export default PostDetails;
