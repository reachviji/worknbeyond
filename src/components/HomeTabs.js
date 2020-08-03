import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddIcon from '@material-ui/icons/Add';
import RecomCard from './RecomCard';
import HomeCard from './HomeCard';
import RecomBar from './RecomBar';
import HSearch from './HSearch';
import HobbyTable from './HobbyTable';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={1}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: theme.spacing(8),
    },
    medium: {
        fontSize: 12,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs className={classes.root} value={value} onChange={handleChange} textColor="primary" aria-label="Tabs">
                    <Tab className={classes.medium} icon={<HomeIcon fontSize="small" />} label="Work and beyond" {...a11yProps(0)} />
                    <Tab className={classes.medium} icon={<ExploreIcon fontSize="small" />} label="Explore Hobbies" {...a11yProps(1)} />
                    <Tab className={classes.medium} icon={<FavoriteIcon fontSize="small" />} label="Favourite" {...a11yProps(2)} />
                    <Tab className={classes.medium} icon={<SportsEsportsIcon fontSize="small" />} label="My Hobbies" {...a11yProps(3)} />
                    <Tab className={classes.medium} icon={<AddIcon fontSize="small" />} label="Add Hobbies" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <RecomBar />
                <br />
                <Grid container spacing={6}>
                    <Grid container item xs={12} spacing={3}>
                        <HomeCard />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <HSearch />
                <br />
                <TableContainer component={Paper}>
                    <HobbyTable />
                </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h3>Shows a list of hobbies that has been tagged as Favorite</h3>
                <h4> Table Format</h4>

            </TabPanel>
            <TabPanel value={value} index={3}>
                <h3>Shows all the hobbies and levels that you have chosen during registration</h3>
                <h4>In a Table format.</h4>
                <h5>Which you can edit</h5>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <h4>Shows all the hobbies that you can add to your hobbies list</h4>
                <h5> Again a table format</h5>
            </TabPanel>
        </div >
    );
}
