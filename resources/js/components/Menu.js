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
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ArrowRight from '@material-ui/icons/ArrowRight';


import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

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
  inline: {
    display: 'inline',
  },
  list:{
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  });

class Menu extends React.Component {
    constructor(state) {
        super(state);
      this.state = {
            open: false,
            anchorEl: null,
            anchorEl__popper:null,
            open_popper:false,
            anchorEl_notification:null,
            open_notification:false,
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
        this.setState(state => ({
            anchorEl__popper: currentTarget,
            open_popper: !state.open_popper,
        }));
      };
      handleClickNotification(event) {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl_notification: currentTarget,
            open_notification: !state.open_notification,
        }));
      };
  render(){
       const { classes } = this.props;
       const { anchorEl__popper, open_popper } = this.state;
       const { anchorEl_notification, open_notification } = this.state;
       const id = open_popper ? 'simple-popper' : null;
       const notification_id = open_notification ? 'simple-popper' : null;
    //    const contextTypes = {
    //     router: PropTypes.object
    //     }
        const msgs = (<List className={classes.list}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="public/static/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }/>
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="public/static/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="public/static/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>);
          const notifications = (
            <List className={classes.root}>
            <ListItem>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary="Notification from John deo" secondary="Jan 9, 2018" />
            </ListItem>
            <ListItem>
              <Avatar>
                <WorkIcon />
              </Avatar>
              <ListItemText primary="Notification from Stacy John" secondary="Jan 7, 2018" />
            </ListItem>
            <ListItem>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
              <ListItemText primary="Notification from Anonymous" secondary="July 20, 2018" />
            </ListItem>
          </List>
          );
    return (
      <div className="container-fluid">
       <div className={classes.root}>
		      <AppBar position="static">
		        <Toolbar>
		          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
		          </IconButton>
		          <Typography variant="h6" color="inherit" className={classes.grow}>
                  {' React | Laravel | Admin'}
		          </Typography>
		         <MenuItem aria-describedby={id} variant="contained" onClick={(e) => this.handleClickMessage(e)}>
			          <IconButton color="default">
			            <Badge badgeContent={3} color="secondary" className={classes.p}>
			              <MailIcon />
			            </Badge>
			          </IconButton>
			          <p className={classes.p}>Messages</p>
                      <Popper id={id} open={open_popper} anchorEl={anchorEl__popper} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                               {msgs}
                            </Paper>
                            </Fade>
                        )}
                        </Popper>
			        </MenuItem>
			        <MenuItem aria-describedby={notification_id} variant="contained" onClick={(e) => this.handleClickNotification(e)}>
			          <IconButton color="default">
			            <Badge badgeContent={11} color="secondary" className={classes.p}>
			              <NotificationsIcon />
			            </Badge>
			          </IconButton>
			          <p  className={classes.p}>Notifications</p>
                      <Popper id={notification_id} open={open_notification} anchorEl={anchorEl_notification} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                               {notifications}
                            </Paper>
                            </Fade>
                        )}
                        </Popper>
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
			           {/* <IconButton color="inherit">
			            <InboxIcon />
			          </IconButton> */}
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
                            <ShoppingCart />
				          <ListItemText classes={{ primary: classes.primary }} inset primary="E-Commerce" />
                          <KeyboardArrowDown/>
                        </MenuItem>
                        </Link>
                        {this.state.open===true ?  <div >
                        <MenuItem onClick={this.handleClose}><ArrowRight/>Profile </MenuItem>
                        <MenuItem onClick={this.handleClose}><ArrowRight/>My account</MenuItem>
                        <MenuItem onClick={this.handleClose}><ArrowRight/>Logout</MenuItem>
                        </div>: null }
                        <Link to={'/reactlaravel/example'}>
				        <MenuItem className={classes.menuItem}>
				          <ListItemIcon className={classes.icon}>
				             <WebAsset />
				          </ListItemIcon>
				          <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard 2" />
				        </MenuItem>
				        </Link>
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
