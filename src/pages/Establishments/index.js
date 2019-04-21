import React, { Component } from 'react';
import api from '../../services/Api'

export default class Establishments extends Component {

      state = { establishments:{} }

   async componentDidMount(){
    const response = await api.get('Establishments');
    this.setState({
      establishments: response.data
    });
   }

  render() {
    const {establishments } = this.state;

    if(establishments.length < 1 || establishments == {}) {
      return null;
    }
    console.log(establishments)
    return (
      <ul>
        {establishments && establishments.map(e => (
            <li>
                {console.log(e.Establishment)}
                {console.log(e.Location)}
                {console.log(e.Owner)}
                <span>{e.Establishment}</span>
                <span>{e.Location}</span>
                <span>{e.Owner}</span>
            </li>
        ))}
      </ul>
    );
  }
}
