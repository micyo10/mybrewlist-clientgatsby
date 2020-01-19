import React, { Component } from 'react';

export class BreweryListItem extends Component {

  constructor() {
    super();
    this.toggleHours = this.toggleHours.bind(this);
    this.state = { hoursShowing: false };
  }

  toggleHours() {
    this.setState(prevState => ({hoursShowing: !prevState.hoursShowing}));
  }

  render() {
    // brewery phone number stripped for telL link
    const telFull = this.props.brewery.phone;
    const telLink = `tel:${telFull.replace(/\(|\)| |-/g,'')}`

    // set some bullshit variables
    const dogFriendly = this.props.brewery.dogs;
    let dogFriendlyNotice;
    let statusIcon;
    let itemColor;

    // styling for dog friendly vs non-dog friendly listing
    if (dogFriendly === true) {
      dogFriendlyNotice = 'YES!';
      statusIcon =  <i className="fas fa-paw"></i>;
      itemColor = 'green';
    } else {
      dogFriendlyNotice = 'Nope';
      statusIcon = <i className="far fa-frown"></i>;
      itemColor = 'red';
    }

    // toggle displaying hours
    const hoursShowing = this.state.hoursShowing;
    let buttonText;
    let hoursHeight;
    let hoursOpacity;
    if(hoursShowing) {
      buttonText = 'Hide Hours'
      hoursHeight = '100%';
      hoursOpacity = 1;
    } else {
      buttonText = 'Display Hours'
      hoursHeight = 0;
      hoursOpacity = 0;
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
        <button onClick={this.toggleHours} style={{cursor: 'pointer', margin: '0 0 20px', textAlign: 'center', width: '150px' }}>{buttonText}</button>
        <ul className='hours-list' style={{ height: hoursHeight, listStyle: 'circle inside', margin: 0, opacity: hoursOpacity }}>
          <li>Sunday: { this.props.brewery.hours.Sunday }</li>
          <li>Monday: { this.props.brewery.hours.Monday }</li>
          <li>Tuesday: { this.props.brewery.hours.Tuesday }</li>
          <li>Wednesday: { this.props.brewery.hours.Wednesday }</li>
          <li>Thursday: { this.props.brewery.hours.Thursday }</li>
          <li>Friday: { this.props.brewery.hours.Friday }</li>
          <li>Saturday: { this.props.brewery.hours.Saturday }</li>
        </ul>
      </div>
    );
  }
}

export default BreweryListItem;
