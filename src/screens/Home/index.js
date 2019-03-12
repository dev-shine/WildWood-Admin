import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';

import MenuItems from '../../components/MenuItems';
import routerTitle from '../../constants/routerTitle';
import Offers from '../../containers/Offers';
import Users from '../../containers/Users';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    backgroundColor: theme.palette.primary.white,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: drawerWidth,
    paddingRight: 15,
    paddingTop: 4,
    height: 68,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    // backgroundColor: 'transparent',
    color: '#1f2a37',
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.white,
  },
  appToolbar: {
    padding: '0 16px',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.white,
  },
  content: {
    width: '100%',
    height: 'calc(100vh - 68px)',
    flexGrow: 1,
    marginTop: 68,
    borderTop: `1px solid ${theme.palette.primary.limitBlack}`,
  },
  Typography: {
    fontSize: '20px',
    lineHeight: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
});

class Home extends React.Component {
  state = {
    mobileOpen: false,
  };

  setHeaderTitle = () => {
    this.setState({
      isCampaignOpen: false,
    });
  }
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  createNewCampaign = () => {
    this.setState({
      isCampaignOpen: true,
    });
  }
  handleClose = () => {
    this.setState({
      isCampaignOpen: false,
    });
  };
  render() {
    const {
      classes, theme, xTotal, createCampaign, location,
    } = this.props;
    const drawer = (
      <div>
        <List style={{ paddingTop: '68px' }}>
          <MenuItems setHeaderTitle={this.setHeaderTitle} />
        </List>
      </div>
    );

    const headerTitle = routerTitle[location.pathname.substr(1)];
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.appToolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.Typography} variant="h6" color="inherit" noWrap>
              {headerTitle}
            </Typography>
            {
              headerTitle === 'Campaigns' &&
              <Typography
                style={{
                  fontSize: '20px', lineHeight: '22px', marginLeft: '10px', color: theme.palette.primary.black,
                }}
                variant="h6"
                noWrap
              >
                {xTotal}
              </Typography>
            }

          </Toolbar>
          {
            headerTitle === 'Campaigns' &&
            <Button onClick={this.createNewCampaign}>
              + NEW CAMPAIGN
            </Button>
          }
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <Switch>
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/users" component={Users} />
          </Switch>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  container: PropTypes.shape({}),
  theme: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}),
  xTotal: PropTypes.string,
  createCampaign: PropTypes.func,
};
const enhanceComponent = compose(
  withStyles(styles, { withTheme: true }),
);


export default withRouter(enhanceComponent(Home));
