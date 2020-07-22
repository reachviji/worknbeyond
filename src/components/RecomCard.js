import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(0, 3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        backgroundColor: red[500],
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 16,
    },
    description: {
        fontSize: 12,
    },
    paper: {
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        maxWidth: 400,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    button: {
        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        justifyContent: 'center',
        spacing: theme.spacing(2),

    },
}));

function createData(AIcon, Name, Hobby, Desc) {
    return { AIcon, Name, Hobby, Desc };
}
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const cads = [
    createData('VG',
        'Vijayalakshmi',
        'Book Sharing',
        "Looking for someone who share similar taste as mine so that we can share our books."),
    createData('KP',
        'Karthik P',
        'Guitar',
        "Boared of learning Guitar alone? Let's parctice Guitar lessons together. Lets catch up online."),
    createData('NC',
        'Nagesh C',
        'Multiplayer online Game',
        "Are you also a gamer just like me? Compete with me in this online game"),
];

export default function RecomCard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {cads.map((cad) => (
                    <Paper className={classes.paper} key={cad.Name}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar aria-label="Name" className={classes.large}></Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography className={classes.title}>{cad.Name}</Typography>
                                <Typography className={classes.subtitle}>{cad.Hobby}</Typography>
                                <br />
                                <Typography className={classes.description}>{cad.Desc}</Typography>
                            </Grid>
                            <Grid item>
                                <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
                            </Grid>
                        </Grid>
                        <Grid>
                            <br />
                            <CardActions>
                                <Button variant="outlined" styles={classes.button} onClick={handleClickOpen}>Register</Button>
                                <Button size="small" color="primary"> Learn More</Button>
                            </CardActions>

                        </Grid>
                        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success">
                                You have been Successfully Registered!
                            </Alert>
                        </Snackbar>
                    </Paper>
                ))}
            </Grid>
        </div>
    );
}