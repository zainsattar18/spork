import React, { Component } from 'react'
import {Route} from "react-router-dom"
import { getRecipes } from '../services/recipes'
import Search from "../components/shared/Search"
import RecipeDetail from "../components/RecipeDetail"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      inputValue: "",
    }
  }
  async componentDidMount() {
    const response = await getRecipes()
    this.setState({
      recipes: response
    })
    console.log(response)
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value
    })
  }


  render() {
    return (
      <div>
        <Route path="/" exact>
        <Search 
          data={this.state.recipes}
          inputValue={this.state.inputValue}
          onChange={this.handleChange}
          />
        </Route>

        <Route  path="/search/recipes">
        <RecipeDetail
            data={this.state.recipes}
            inputValue={this.state.inputValue}
            onChange={this.handleChange}
          />
          </Route>

      </div>
    )
  }
}
