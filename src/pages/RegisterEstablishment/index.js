// import React, { Component } from 'react';

// import Icon from '@material-ui/core/Icon';


// // import { Container } from './styles';

// export default class RegisterEstablishment extends Component {
//   render(){
//     return (
//         <div className="divRegister">

                
//         </div>
//     );
    
//   }
// }

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'

import logo from '../../assets/img/logo-fort.jpg'
import { green } from '@material-ui/core/colors';


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

  onSubmitTeste = (e) => {
    e.preventDefault();
    console.log(this.state.Establishment);

  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.margin} noValidate autoComplete="off" onSubmit={this.onSubmitTeste}>
          <Grid container spacing={0} direction="column" alignItems="center" justify="center" 
          style={{ minHeight: '90vh' }}
          >
            <img src={logo} />
            <MuiThemeProvider theme={theme}>
                <TextField
                        id="name-establishment"
                        label="Nome estabelecimento"
                        className={classes.textField}
                        value={this.state.Establishment}
                        onChange={this.handleChange('Establishment')}
                        margin="normal"
                      />

                <TextField
                        id="name-Location"
                        label="Localização"
                        className={classes.textField}
                        value={this.state.Location}
                        onChange={this.handleChange('Location')}
                        margin="normal"
                      /> 
                <TextField
                        id="name-Owner"
                        label="Dono do estabelicimento"
                        className={classes.textField}
                        value={this.state.Owner}
                        onChange={this.handleChange('Owner')}
                        margin="normal"
                      />
              </MuiThemeProvider>
              <Button variant="contained" color="default" className={classes.button}> 
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

