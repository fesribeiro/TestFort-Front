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

class UpdateEstablishment extends React.Component {
  state = {
    _id: 0,
    Establishment: '',
    Location: '',
    Owner: ''
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  sendSubmit = async (e) => {
    e.preventDefault();   
    console.log(this.state);
    await api.put(`/Establishment/${this.state._id}`, {
        Establishment: this.state.Establishment,
        Location: this.state.Location,
        Owner: this.state.Owner
    });
    this.props.history.push("/Establishments");
};    

  async componentDidMount(){
    const idEstablishment = this.props.match.params.id;
    // console.log(idEstablishment);
    const response = await api.get(`Establishment/${idEstablishment}`);
    this.setState({
      _id: idEstablishment,
      Establishment: response.data.Establishment,
      Location: response.data.Location,
      Owner: response.data.Owner
    });
    console.log(this.state)
    
  }


  render() {
    const { classes } = this.props;
    return (
      <form className={classes.margin} noValidate autoComplete="off" onSubmit={this.sendSubmit}>
          <Grid container spacing={0} direction="column" alignItems="center" justify="center" 
          style={{ minHeight: '90vh' }}
          >
            <img src={logo} />

          
            <MuiThemeProvider theme={theme}>
            <strong> Nome do estabelecimento </strong>
                <TextField
                        required
                        type="text"
                        id="name-establishment"
                        // label="Nome estabelecimento"
                        className={classes.textField}
                        value={this.state.Establishment}
                        onChange={this.handleChange('Establishment')}
                        margin="normal"
                
                      />
                 <strong>Localização</strong>
                <TextField
                        required
                        id="name-Location"
                        // label="Localização"
                        className={classes.textField}
                        value={this.state.Location}
                        onChange={this.handleChange('Location')}
                        margin="normal"
                        // helperText={this.state.Location}

                      /> 
                 <strong>Proprietário</strong>
                <TextField
                        required
                        id="name-Owner"
                        // label="Dono do estabelicimento"
                        className={classes.textField}
                        value={this.state.Owner}
                        onChange={this.handleChange('Owner')}
                        margin="normal"
                    />
              </MuiThemeProvider>
                    

              <Button type="submit" variant="contained" color="default" className={classes.button}> 
                      Alterar
              </Button>
          </Grid>
      </form>
    );
  }
}

UpdateEstablishment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateEstablishment);

