import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'

import logo from '../../assets/img/logo-fort.jpg'
import { green } from '@material-ui/core/colors';

import api from '../../services/Api'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: 10,
    width: 240,
    primary: green
  }
});

const theme = createMuiTheme({
    palette: {
      primary: green
    },


}); 

class RegisterEstablishment extends React.Component {
  state = {
    Establishment: '',
    Location: '',
    Owner: ''
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  sendSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.Establishment);
    console.log(this.state.Location);
    console.log(this.state.Owner);    
    const response = await api.post('/Establishment', {
        Establishment: this.state.Establishment,
        Location: this.state.Location,
        Owner: this.state.Owner
    });
    console.log(response.data);
    this.props.history.push("/Establishments");
    // console.log('Cadastrado');
};


  render() {
    const { classes } = this.props;
    return (
      <form className={classes.margin} noValidate autoComplete="off" onSubmit={this.sendSubmit}>
          <Grid container spacing={0} direction="column" alignItems="center" justify="center" 
          style={{ minHeight: '90vh' }}
          >
            <img src={logo} />
            <MuiThemeProvider theme={theme}>
                <TextField
                        required
                        id="name-establishment"
                        label="Nome estabelecimento"
                        className={classes.textField}
                        value={this.state.Establishment}
                        onChange={this.handleChange('Establishment')}
                        margin="normal"
                      />

                <TextField
                        required
                        id="name-Location"
                        label="Localização"
                        className={classes.textField}
                        value={this.state.Location}
                        onChange={this.handleChange('Location')}
                        margin="normal"
                      /> 
                <TextField
                        required
                        id="name-Owner"
                        label="Dono do estabelicimento"
                        className={classes.textField}
                        value={this.state.Owner}
                        onChange={this.handleChange('Owner')}
                        margin="normal"
                      />
              </MuiThemeProvider>
              <Button type="submit" variant="contained" color="default" className={classes.button}> 
                      Cadastrar
              </Button>
          </Grid>
      </form>
    );
  }
}

RegisterEstablishment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterEstablishment);

