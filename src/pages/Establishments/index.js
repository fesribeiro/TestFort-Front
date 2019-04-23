import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import api from '../../services/Api'


// import { Container } from './styles';

import {} from './style.css'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


export default class Establishments extends Component{
  
  state = { establishments: [] }
  
  async componentDidMount(){
    const response = await api.get('/Establishments');
    this.setState({
      establishments: response.data
    });
  }

  async deleteEstablishment(id, index){
    await api.delete(`/Establishment/${id}`); 
    // this.props.history.push("/Establishments");
    const newEstablishments = this.state.establishments;
    console.log(index);
    newEstablishments.splice(index, 1)
    this.setState({
      establishments: newEstablishments
    })
  }

  updateEstablishment(id){
    this.props.history.push(`/UpdateEstablishments/${id}`);
  }

  
  render(){
    return (
      <Paper className="Establishments">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome do Estabelecimento</TableCell>
              <TableCell>Localização</TableCell>
              <TableCell>Proprietário</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.establishments.map((e, index) => (
              <TableRow id="table-establishment" key={e._id}>
                <TableCell component="th" scope="row">
                  {e.Establishment}
                </TableCell>
                <TableCell>{e.Location}</TableCell>
                <TableCell>{e.Owner}</TableCell>
                <TableCell>
                <Button variant="outlined" color="primary"  onClick={ () => this.updateEstablishment(e._id)}> 
                Alterar 
                </Button>
                &nbsp;
                <Button type="submit" variant="outlined" color="secondary" onClick={ () => window.confirm(`Deseja excluir o Estabelecimento "${e.Establishment}"?`) ?  this.deleteEstablishment(e._id, index) : ''}>
                Deletar 
                </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

// Establishments.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Establishments);
