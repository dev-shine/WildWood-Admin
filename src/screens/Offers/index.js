import React, { Component } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withStyles } from '@material-ui/core/styles';
import OffersTable from './components/OffersTable'
import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  Button,
} from '@material-ui/core';

const settingsSchema = Yup.object().shape({
  name: Yup.string().required('Name must be provided'),
  story: Yup.string().required('Story must be provided'),
  pricing: Yup.number('Must be number').required('Pricing must be provided'),
  featured_image_url: Yup.string().url('Must be url format').required('Feature image must be provided'),
});

const invalidInputStyle = {
  'border-radius': '4px',
  border: '1px solid red',
  height: '40px',
  width: '320px',
};

class Offers extends Component {

  componentDidMount() {
    const { fetchOffers } = this.props
    fetchOffers()
  }
  render () {
    const { offers, deleteOffer, classes, insertOffer } = this.props
    return (
      <div>
        <OffersTable rows={offers} deleteOffer={deleteOffer}/>
        <div className="in-offer-container">
        <Formik
            validationSchema={settingsSchema}
            onSubmit={values => {
              insertOffer(values)
            }}
            enableReinitialize
            initialValues={{
              name: "",
              description: "",
              story: "",
              pricing: "",
              featured_image_url: "",
            }}
            render={({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isInvalidInput,
            }) => (
              <form onSubmit={handleSubmit} className="in-offer-form">
                <Grid container spacing={24} className={classes.root}>
                  <Grid item xs={4}>
                      <FormControl className={classes.formControl}>
                        <Input
                          className={classes.boxInput}
                          id="name"
                          placeholder="Name"
                          type="text"
                          disableUnderline
                          onBlur={handleBlur}
                          onChange={handleChange}
                          style={
                            isInvalidInput && invalidInputStyle
                          }
                        />
                        <FormHelperText style={{ color: 'red', textAlign: 'center' }} id="emailError">{errors.name}</FormHelperText>
                      </FormControl>
                  </Grid>

                  <Grid item xs={4}>
                      <FormControl className={classes.formControl}>
                        <Input
                          className={classes.boxInput}
                          id="description"
                          placeholder="Description"
                          type="text"
                          disableUnderline
                          onBlur={handleBlur}
                          onChange={handleChange}
                          style={
                            isInvalidInput && invalidInputStyle
                          }
                        />
                      </FormControl>
                  </Grid>

                  <Grid item xs={4}>
                      <FormControl className={classes.formControl}>
                        <Input
                          className={classes.boxInput}
                          id="story"
                          placeholder="Story"
                          type="text"
                          disableUnderline
                          onBlur={handleBlur}
                          onChange={handleChange}
                          style={
                            isInvalidInput && invalidInputStyle
                          }
                        />
                          <FormHelperText style={{ color: 'red', textAlign: 'center' }} id="emailError">{errors.story}</FormHelperText>
                      </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                      <FormControl className={classes.formControl}>
                        <Input
                          className={classes.boxInput}
                          id="pricing"
                          placeholder="Price"
                          type="text"
                          disableUnderline
                          onBlur={handleBlur}
                          onChange={handleChange}
                          style={
                            isInvalidInput && invalidInputStyle
                          }
                        />
                          <FormHelperText style={{ color: 'red', textAlign: 'center' }} id="emailError">{errors.pricing}</FormHelperText>
                      </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                      <FormControl className={classes.formControl}>
                        <Input
                          className={classes.boxInput}
                          id="featured_image_url"
                          placeholder="Featured Image Url"
                          type="text"
                          disableUnderline
                          onBlur={handleBlur}
                          onChange={handleChange}
                          style={
                            isInvalidInput && invalidInputStyle
                          }
                        />
                          <FormHelperText style={{ color: 'red', textAlign: 'center' }} id="emailError">{errors.featured_image_url}</FormHelperText>
                      </FormControl>
                  </Grid>
                  <Grid item xs={4} container justify="center">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Insert Offer
                      </Button>
                    </Grid>
                </Grid>
              </form>
            )}
          />
        </div>
      </div>
    )
  }
}

const stylesClasses = theme => ({
  root: {
    padding: 24,
    width: '100%',
    margin: 0,
  },
  boxInput: {
    borderRadius: 4,
    backgroundColor: "#F7F8FA",
    border: `2px solid #ced4da`,
    fontSize: 12,
    padding: 10,
    width: '100%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  formControl: {
    width: '100%',
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.5)',
    borderRight: `2px solid #ced4da`,
    paddingRight: 10,
    marginRight: 10,
    padding: '10px 0px',
  },
  button: {
    width: '100%',
    height: 50,
  },
});

export default withStyles(stylesClasses)(Offers)