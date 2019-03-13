import React, { Component } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import csv from 'csv'
import Dropzone from 'react-dropzone'
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

  constructor() {
    super()
    this.state = {
      importedOffers: [],
      importText: "Import CSV file here",
    }
  }
  componentDidMount() {
    const { fetchOffers } = this.props
    fetchOffers()
  }
  onDrop = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        csv.parse(reader.result, (err, data) => {
            this.setState({
              importText: e[0].name + "   imported",
              importedOffers: []
            })
            console.log(data);
            data.map((item, index) => {
              const temp = {}
              temp.name = item[6]
              temp.pricing = item[7]
              temp.description = item[3]
              temp.featured_image_url = item[4]
              temp.image_url = [item[5]]
              temp.story = item[9]
              const { importedOffers } = this.state
              if (index !== 0) {
                this.setState({
                  importedOffers: importedOffers.concat(temp)
                })
              }
            })
        });
    };

    reader.readAsBinaryString(e[0]);
  }
  onToDatabase = () => {
    const { insertOffer } = this.props
    this.state.importedOffers.map((item) => {
      insertOffer(item)
    })
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
       
        <div className="in-offer-container">
          <div className="in-offer-form">
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Dropzone onDrop={this.onDrop}>
                  {({getRootProps, getInputProps}) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>{this.state.importText}</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </Grid>
              <Grid item xs={6}>
                <Button 
                  variant="contained"
                  color="primary"
                  className={classes.button} 
                  onClick={this.onToDatabase}
                >
                  Import CSV to Database
                </Button>
              </Grid>
            </Grid>
          </div>
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
  csvReader: {
    padding: 24,
  }
});

export default withStyles(stylesClasses)(Offers)