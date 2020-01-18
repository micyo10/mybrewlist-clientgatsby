import React, { Component } from 'react';

export class BreweryListItem extends Component {

  render() {

    const dogFriendly = this.props.brewery.dogs;
    let dogFriendlyNotice;
    if (dogFriendly == true) {
      dogFriendlyNotice = 'YES!';
    } else {
      dogFriendlyNotice = 'Nope :(';
    }

    return (
      <div style={{background:'#f8f8f8',borderRadius:'7px',boxShadow:'3px 3px 7px 0 #777',color:'#0e153a',margin:'20px auto',padding:'20px 30px'}}>
        <h3>{ this.props.brewery.name }</h3>
        { this.props.brewery.address.street }<br />
        { this.props.brewery.address.city }, { this.props.brewery.address.state } { this.props.brewery.address.zip }
        <br />
        <br />
        <p>Dog friendly? {dogFriendlyNotice}</p>
      </div>
    );
  }
}

export default BreweryListItem;
