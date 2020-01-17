import React, { Component } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreweryList from '../components/breweryList';



class BreweriesPage extends Component {

  // add state, a JS object
  state = {
    breweries: [
      {
      id: 1,
      name: "Two Weeks Notice Brewing Co.",
      address: {
        street: "110 Bosworth St",
        city: "West Springfield",
        state: "MA",
        zip: "01089"
      },
      hours: {
        Sunday: "12-6PM",
        Monday: "Closed",
        Tuesday: "Closed",
        Wednesday: "Closed",
        Thursday: "3-9PM",
        Friday: "3-10PM",
        Saturday: "12-10PM"
      },
      dogs: false
      },
      {
      id: 2,
      name: "Holyoke Craft Beer",
      address: {
        street: "208 Race Street, Basement",
        city: "Holyoke",
        state: "MA",
        zip: "01040"
      },
      hours: {
        Sunday: "Closed",
        Monday: "Closed",
        Tuesday: "Closed",
        Wednesday: "Closed",
        Thursday: "3-9PM",
        Friday: "4-9PM",
        Saturday: "Closed"
      },
      dogs: false
      },
      {
      id: 3,
      name: "Abandoned Building Brewery",
      address: {
        street: "142 Pleasant St #103a",
        city: "Easthampton",
        state: "MA",
        zip: "01027"
      },
      hours: {
        Sunday: "1-6PM",
        Monday: "4-9PM",
        Tuesday: "4-9PM",
        Wednesday: "4-9PM",
        Thursday: "5-10PM",
        Friday: "5-10PM",
        Saturday: "12-10PM"
      },
      dogs: true
      },
      {
      id: 4,
      name: "Leadfoot Brewing",
      address: {
        street: "95 N Chicopee St",
        city: "Chicopee",
        state: "MA",
        zip: "01020"
      },
      hours: {
        Sunday: "12-6PM",
        Monday: "Closed",
        Tuesday: "Closed",
        Wednesday: "Closed",
        Thursday: "4-8PM",
        Friday: "4-9PM",
        Saturday: "12-8PM"
      },
      dogs: true
      },
      {
      id: 5,
      name: "Tin Bridge Brewing Co.",
      address: {
        street: "487 E Main St",
        city: "Westfield",
        state: "MA",
        zip: "01085"
      },
      hours: {
        Sunday: "12-7PM",
        Monday: "Closed",
        Tuesday: "Closed",
        Wednesday: "Closed",
        Thursday: "4-10PM",
        Friday: "4-10PM",
        Saturday: "12-10PM"
      },
      dogs: false
      },
      {
      id: 6,
      name: "Drunken Rabbit Brewing",
      address: {
        street: "749A New Ludlow Rd",
        city: "South Hadley",
        state: "MA",
        zip: "01075"
      },
      hours: {
        Sunday: "12-8PM",
        Monday: "Closed",
        Tuesday: "Closed",
        Wednesday: "3:30-9PM",
        Thursday: "3:30-9PM",
        Friday: "3:30-10PM",
        Saturday: "12-10PM"
      },
      dogs: false
      }
    ]
  }



  render() {


    let finalBreweryList;

    return (
      <Layout>
      <SEO title="Breweries" />
        <h1>Breweries</h1>
        <BreweryList breweries={this.state.breweries} />
        <br />
        <p>Go back <Link href="/">home</Link></p>
      </Layout>
    )
  }
}

export default BreweriesPage