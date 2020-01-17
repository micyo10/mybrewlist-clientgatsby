import React, { Component } from 'react';
import BreweryListItem from './breweryListItem';

class BreweryList extends Component {

  constructor() {
    super();
    this.listDogFriendly = this.listDogFriendly.bind(this);
    this.state = {isListDogFriendly: false};
  }

  listDogFriendly() {
    this.setState(prevState => ({isListDogFriendly: !prevState.isListDogFriendly}));
  }

  render() {
    // set breweries list array as variable and sort alphabetically
    const breweriesList = this.props.breweries.sort((a, b) => (a.name > b.name ? 1 : -1));

    // filter out breweries that do not allow dogs
    const dogFriendly = breweriesList
    .filter((brewery) => {
      return brewery.dogs === true;
    });

    // declare final list variable
    let finalList;
    let buttonText;
    const isListDogFriendly = this.state.isListDogFriendly;

    if(isListDogFriendly) {
      finalList = dogFriendly;
      buttonText = 'Display all breweries';
    } else {
      finalList = breweriesList;
      buttonText = 'Display only dog friendly breweries';
    }

    return (
      <div>
        <div className="filters" style={{display:'flex',justifyContent:'flex-start'}}>
          <button onClick={this.listDogFriendly}>
            {buttonText}
          </button>
        </div>

        {
          finalList.map((brewery) => (
            <BreweryListItem key={brewery.id} brewery={ brewery }/>
          ))
        }

      </div>
    );
  }
}

export default BreweryList;
