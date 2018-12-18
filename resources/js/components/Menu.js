import React, {Component} from 'react';
import { Router, Route, Link,browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import MenuList from '@material-ui/core/MenuList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Lock from '@material-ui/icons/Lock';
import Settings from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Home from '@material-ui/icons/Home';
import WebAsset from '@material-ui/icons/WebAsset';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
    typography: {
      padding: theme.spacing.unit * 2,
    },
      root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  p:{
  	color:'white'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
   menuItem: {
    '&:focus': {
      backgroundColor:'primary',
      '& $primary, & $icon': {
        color: 'primary',
      },
    },
  },
  primary: {},
  icon: {},
   avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  profiletext:{
  	marginTop: 16
  },
  });

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   p:{
//   	color:'white'
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
//    menuItem: {
//     '&:focus': {
//       backgroundColor:'primary',
//       '& $primary, & $icon': {
//         color: 'primary',
//       },
//     },
//   },
//   primary: {},
//   icon: {},
//    avatar: {
//     margin: 10,
//   },
//   bigAvatar: {
//     margin: 10,
//     width: 60,
//     height: 60,
//   },
//   profiletext:{
//   	marginTop: 16
//   },

// };

class Menu extends React.Component {
    constructor(state) {
        super(state);
      this.state = {
            open: false,
            anchorEl: null,
          };
    }
    handleClick (value) {
        if(this.state.open ==false){
            value = true
        }
        this.setState({ open:value });
      };
      handleClose() {
        this.setState({ anchorEl: null });
      };
      handleClick2 () {
        this.setState({ anchorEl: false });
      };
      handleClickMessage (event) {
        const { currentTarget } = event;
        console.log(event.currentTarget);

        this.setState(state => ({
          anchorEl: currentTarget,
          open: !state.open,
        }));
      };
  render(){
    // var { anchorEl } = this.state;
       const { classes } = this.props;
       const { anchorEl, open } = this.state;
       const id = open ? 'simple-popper' : null;
    const contextTypes = {
        router: PropTypes.object
        }
    return (
      <div className="container-fluid">
       <div className={classes.root}>
		      <AppBar position="static">
		        <Toolbar>
		          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
		          </IconButton>
		          <Typography variant="h6" color="inherit" className={classes.grow}>
		            React | Laravel | Admin
		          </Typography>
		         <MenuItem aria-describedby={id} variant="contained" onClick={(e) => this.handleClickMessage(e)}>
			          <IconButton color="default">
			            <Badge badgeContent={4} color="secondary" className={classes.p}>
			              <MailIcon />
			            </Badge>
			          </IconButton>
			          <p  className={classes.p}>Messages</p>
                      <Popper id={id} open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Typography className={classes.typography}>The content of the Popper.</Typography>
                            </Paper>
                            </Fade>
                        )}
                        </Popper>
			        </MenuItem>
			        <MenuItem>
			          <IconButton color="default">
			            <Badge badgeContent={11} color="secondary" className={classes.p}>
			              <NotificationsIcon />
			            </Badge>
			          </IconButton>
			          <p  className={classes.p}>Notifications</p>
			        </MenuItem>
			        <MenuItem>
			          <IconButton color="inherit" className={classes.p}>
			            <AccountCircle />
			          </IconButton>
			          <p className={classes.p} >Profile</p>
			        </MenuItem>
		        </Toolbar>
		      </AppBar>
		    </div>
		     <Grid container className={classes.root} spacing={16}>
		        <Grid item xs={2}>
		          <Grid container className={classes.grow}>
		            <Grid container justify="center" alignItems="center">
				    {/*  <Avatar alt="Remy Sharp" src="public/static/anonymous-online.jpg" className={classes.avatar} />*/}
				      <Avatar alt="Remy Sharp" src="public/static/anonymous-online.jpg" className={classes.bigAvatar} />
				      <h6 className={classes.profiletext}> John Deo </h6>
				    </Grid>
				     <Grid container justify="center" alignItems="center">
				     <IconButton color="inherit">
			            <AccountCircle />
			          </IconButton>
			           <IconButton color="inherit">
			            <Lock/>
			          </IconButton>
			           <IconButton color="inherit">
			            <Settings />
			          </IconButton>
			           <IconButton color="inherit">
			            <InboxIcon />
			          </IconButton>
			           <IconButton color="inherit">
			            <ExitToApp />
			          </IconButton>
				        </Grid>

		                <MenuList>
		               <Link to={'/reactlaravel/'}>
				         <MenuItem className={classes.menuItem}>
				          <ListItemIcon className={classes.icon}>
				            <Home />
				          </ListItemIcon>
				          <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard"  />
				        </MenuItem>
				        </Link>
				         <Link to={'/reactlaravel/example'}>
				        <MenuItem className={classes.menuItem}>
				          <ListItemIcon className={classes.icon}>
				             <WebAsset />
				          </ListItemIcon>
				          <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard 2" />
				        </MenuItem>
				        </Link>
                        <Link to={'/reactlaravel/'}>
                        <MenuItem className={classes.menuItem} onClick={() => this.handleClick(false)}>
                            <InboxIcon />
				          <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard 2" />
                        </MenuItem>
                        </Link>
                        {this.state.open===true ?  <div>
                        <MenuItem onClick={this.handleClose}>Profile </MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </div>: null }
				      </MenuList>
		           </Grid>

		          </Grid>
		             <Grid item xs={4}>
				         <div>

			              {this.props.children}
			          </div>
				          </Grid>
		        </Grid>


      </div>
    )
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
