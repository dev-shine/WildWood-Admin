import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';

import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';

import {
  VpnKeyOutlined,
  PeopleOutlined,
} from '@material-ui/icons';

const itemsList = [
  {
    id: 1, title: 'Offers', path: '/offers', iconComp: VpnKeyOutlined,
  },
  {
    id: 2, title: 'Users', path: '/users', iconComp: PeopleOutlined,
  },
 
];

const styles = {
  
  current_path_icon: {
    color: '#4883FF',
  },
  non_current_path_icon: {
    color: 'rgba(0,27,72,.54)',
  },
};
const MenuItems = props => (
  <div>
    {itemsList.map(item => {
        const IconComponent = item.iconComp;

        return (
          <Link to={item.path} key={item.id} className={props.classes.link}>
            <ListItem
              button
              className={props.classes.listItem}
            >
              <ListItemIcon className={props.classes.listItemIcon}>
                <IconComponent style={props.location.pathname === item.path ?
                  styles.current_path_icon : styles.non_current_path_icon}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography className={props.classes.text} style={props.location.pathname === item.path ? { color: '#4883FF' } : { color: 'rgba(0,27,72,.54)' }}>{item.title}</Typography>
              }
                style={{ paddingLeft: '12px', paddingBottom: '4px' }}
              />
            </ListItem>
          </Link>
        );
      })}
  </div>

);

const styleClasses = theme => ({
  icon: {
    fontSize: 24,
  },
  text: {
    fontFamily: 'proximanovasemibold',
    fontSize: 16,
    color: theme.palette.primary.titleColor,
  },
  link: {
    textDecoration: 'none',
  },
  listItem: {
    height: '40px',
    borderRadius: 4,
    width: 'auto',
    margin: '0 8px',
    paddingLeft: 8,
  },
  listItemIcon: {
    marginRight: 0,
  },
});

const enhanceComponent = compose(
  withStyles(styleClasses),
  withRouter,
);

MenuItems.propTypes = {
  classes: PropTypes.shape({
    listItem: PropTypes.string,
    listItemIcon: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),

};
export default enhanceComponent(MenuItems);
