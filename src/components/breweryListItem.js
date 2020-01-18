import React, { Component } from 'react';

export class BreweryListItem extends Component {

  render() {

    // brewery phone number stripped for telL link
    const telFull = this.props.brewery.phone;
    const telLink = `tel:${telFull.replace(/\(|\)|\ |\-/g,'')}`

    // set some bullshit variables
    const dogFriendly = this.props.brewery.dogs;
    let dogFriendlyNotice;
    let statusIcon;
    let itemColor;

    if (dogFriendly == true) {
      dogFriendlyNotice = 'YES!';
      statusIcon =  <i class="fas fa-paw"></i>;
      itemColor = 'green';
    } else {
      dogFriendlyNotice = 'Nope';
      statusIcon = <i class="far fa-frown"></i>;
      itemColor = 'red';
    }

    return (
      <div style={{background:'#f8f8f8',borderRadius:'7px',boxShadow:'3px 3px 7px 0 #777',color:'#0e153a',margin:'20px auto',padding:'20px 30px'}}>
        <h3>{ this.props.brewery.name }</h3>
        <a href={this.props.brewery.website}>{ this.props.brewery.website }</a><br />
        { this.props.brewery.address.street }<br />
        { this.props.brewery.address.city }, { this.props.brewery.address.state } { this.props.brewery.address.zip }
        <br />
        <br />
        <a href={telLink}>{telFull}</a>
        <br />
        <br />
        <p>Dog friendly? <span style={{ color: itemColor }}>{dogFriendlyNotice}&nbsp;&nbsp;{statusIcon}</span></p>
      </div>
    );
  }
}

export default BreweryListItem;
