import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withStyles } from '@material-ui/core/styles';
import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { PermIdentity, VpnKeyOutlined } from '@material-ui/icons';

const settingsSchema = Yup.object().shape({
  email: Yup.string().email('Email must be valid').required('Email must be provided'),
  password: Yup.string().required('Password must be provided'),
});

const invalidInputStyle = {
  'border-radius': '4px',
  border: '1px solid red',
  height: '40px',
  width: '320px',
};

class SignIn extends Component {
  componentDidMount() {
    
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props
    if (nextProps.isLoggedIn === true ) {
      history.push('/')
    }
  }
  render() {
    const {
      classes, signIn,
    } = this.props;
    return (
      <Grid container justify="center" alignItems="center" spacing={0} style={{ flex: '1' }}>
        <Grid item sm={12} md={5}>
          <div style={{ padding: '0px 20px' }}>
          <Formik
            validationSchema={settingsSchema}
            onSubmit={values => {
              signIn(values);
            }}
            enableReinitialize
            initialValues={{
              email: '',
              password: '',
            }}
            render={({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isInvalidInput,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid container justify="center" spacing={0}>
                  <Grid container justify="center" item xs={12}>
                    <Grid>
                      <FormControl >
                        <Input
                          className={classes.boxInput}
                          id="email"
                          placeholder="Your e-mail"
                          type="text"
                          disableUnderline
                          onBlur={handleBlur}
                          onChange={handleChange}
                          style={
                            isInvalidInput && invalidInputStyle
                          }
                          startAdornment={
                            <InputAdornment position="start">
                              <PermIdentity className={classes.icon} />
                            </InputAdornment>
                          }
                        />
                        <FormHelperText style={{ color: 'red', textAlign: 'center' }} id="emailError">{errors.email}</FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container justify="center" item xs={12}>
                    <Grid>
                      <FormControl >
                        <Input
                          className={classes.boxInput}
                          id="password"
                          placeholder="Password"
                          type="password"
                          disableUnderline
                          onBlur={handleBlur}
                          onChange={handleChange}
                          style={
                            isInvalidInput && invalidInputStyle
                          }
                          startAdornment={
                            <InputAdornment position="start">
                              <VpnKeyOutlined className={classes.icon} />
                            </InputAdornment>
                          }
                        />
                          <FormHelperText style={{ color: 'red', textAlign: 'center' }} id="emailError">{errors.password}</FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container justify="center" item xs={12}>
                    <Grid>
                      
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{
                          float: 'left', marginTop: 40, marginBottom: 50, width: 220,
                        }}
                      >
                        Sign In
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            )}
          />
          </div>
        </Grid>
      </Grid>
    )
  }
}

const stylesClasses = theme => ({
  boxInput: {
    borderRadius: 4,
    backgroundColor: "#F7F8FA",
    border: `2px solid #ced4da`,
    fontSize: 12,
    padding: 10,
    width: '320px',
    minWidth: window.innerWidth > 700 ? 320 : 'auto',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.5)',
    borderRight: `2px solid #ced4da`,
    paddingRight: 10,
    marginRight: 10,
    padding: '10px 0px',
  },
});
SignIn.propTypes = {

}
export default withStyles(stylesClasses)(withRouter(SignIn))