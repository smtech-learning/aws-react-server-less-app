import React, { Component } from 'react'
import Menu from './Menu';
import { Route, Switch } from 'react-router-dom';
import DisplayProducts from './DisplayProducts';
import Inventory from './Inventory';
import Help from './Help';
import Logout from './Logout';
import NotFound from './NotFound';
import { withRouter } from 'react-router-dom';

export default class Home extends Component {
  render(props) {
      return (
      <div>
              <Menu />
              <Switch> 
                <Route path="/home/inventory"  component={Inventory} />
                <Route path='/home/displayProducts' exact component={DisplayProducts} />
                <Route path='/home/help' exact component={Help} />
                <Route path='/home/logout' exact component={Logout} />
                  <Route render={() => { return (<h1> Select the Item above</h1>) }} />
              </Switch>
      </div>
    )
  }
}
