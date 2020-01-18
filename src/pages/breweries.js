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
      website: "https://www.twoweeksnoticebrewing.com",
      address: {
        street: "110 Bosworth St",
        city: "West Springfield",
        state: "MA",
        zip: "01089"
      },
      phone: "(413) 707-1413",
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
      website: "https://www.holyokecraftbeer.com",
      address: {
        street: "208 Race Street, Basement",
        city: "Holyoke",
        state: "MA",
        zip: "01040"
      },
      phone: '',
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
      website: "https://abandonedbuildingbrewery.com",
      address: {
        street: "142 Pleasant St #103a",
        city: "Easthampton",
        state: "MA",
        zip: "01027"
      },
      phone: "(413) 282-7062",
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
      website: "https://www.leadfootbrewing.com",
      address: {
        street: "95 N Chicopee St",
        city: "Chicopee",
        state: "MA",
        zip: "01020"
      },
      phone: "(413) 315-9828",
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
      website: "https://www.tinbridgebrewing.com",
      address: {
        street: "487 E Main St",
        city: "Westfield",
        state: "MA",
        zip: "01085"
      },
      phone: "(413) 642-6418",
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
      website: "https://www.rabbit.beer",
      address: {
        street: "749A New Ludlow Rd",
        city: "South Hadley",
        state: "MA",
        zip: "01075"
      },
      phone: "(413) 728-2739",
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
      },
      {
      id: 7,
      name: "Iron Duke Brewing",
      website: "http://irondukebrewing.com",
      address: {
        street: "100 State St #122",
        city: "Ludlow",
        state: "MA",
        zip: "01056"
      },
      phone: "(413) 624-6258",
      hours: {
        Sunday: "12-4PM",
        Monday: "Closed",
        Tuesday: "Closed",
        Wednesday: "Closed",
        Thursday: "3:30-8PM",
        Friday: "2:30–10PM",
        Saturday: "12-10PM"
      },
      dogs: true
      },
      {
      id: 8,
      name: "Fort Hill Brewery",
      website: "https://www.forthillbrewery.com",
      address: {
        street: "30 Fort Hill Rd",
        city: "Easthampton",
        state: "MA",
        zip: "01027"
      },
      phone: "(413) 203-5754",
      hours: {
        Sunday: "2-6PM",
        Monday: "Closed",
        Tuesday: "Closed",
        Wednesday: "Closed",
        Thursday: "4-7PM",
        Friday: "	4–7PM",
        Saturday: "2-8PM"
      },
      dogs: true
      }
    ]
  }

  render() {
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
