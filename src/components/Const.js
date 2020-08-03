import { createMuiTheme, makeStyles } from '@material-ui/core/styles';



export const styles = {
    button: {
        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
    },
};

export const FlippyStyles = {
    BackCard: {
        backgroundColor: '#81d4fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    FrontCard: {
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 14,

    },
    ImageSize: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    FlipCardSize: {
        width: '280px',
        height: '220px',
    },
    Margin: {
        marginLeft: '50px',
    },
    Description: {
        fontSize: 12,
        alignItems: 'left',
        justifyContent: 'left',
        color: '#ffffff',

    },
};

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export const textStyle = {
    padding: 10,
    margin: 10,
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
    color: "dark",
};


function createData(Image, EventDate, Hobby, Desc) {
    return { Image, EventDate, Hobby, Desc };
}

export const Datas = [
    createData(
        require('../img/Books.jpg'),
        'September 10th, 2020',
        'Book Sharing',
        "Looking for someone who share similar taste as mine so that we can share our books."),
    createData(require('../img/Guitar.jpg'),
        'September 15th, 2020',
        'Guitar',
        "Boared of learning Guitar alone? Let's parctice Guitar lessons together. Lets catch up online."),
    createData(require('../img/OnlineGame.jpg'),
        'October 16th, 2020',
        'Multiplayer online Game',
        "Are you also a gamer just like me? Compete with me in this online game"),
    createData(require('../img/Gardening.jpg'),
        'September 10th, 2020',
        'Gardening',
        "Love to Plant? Join me and lets share tips and trics for effective gardening"),
    createData(require('../img/Biking.jpg'),
        'October 15th, 2020',
        'Biking',
        "Lets Bike for 150 KMs on 15th of Oct. We are a group of 4 people who cycle on every weekend. Join us for a fun activity"),
    createData(require('../img/Photography.jpg'),
        'October 16th, 2020',
        'Photography',
        "I am good at Photography, have any doubts? Catch me on 16th Oct and I will be happy to answer your questions"),
    createData(require('../img/Hiking.jpg'),
        'September 10th, 2020',
        'Trecking',
        "Love to Trek? Lets go for a short Treck on September 10th"),
    createData(require('../img/Baking.jpg'),
        'October 16th, 2020',
        'Baking',
        "Lets bake cookies together!! This activity is for beginners. We will be discussing simple baking techniques"),
];

