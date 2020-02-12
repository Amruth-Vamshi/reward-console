import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RoleList from './roleList';
import EditRole from './editRole';

export default class extends React.Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path={"/core/settings/developer"}>
          <Redirect to="/core/" />
        </Route> */}

        <Route exact path={'/core/access-control'} component={RoleList} />
        <Route path={'/core/access-control/:id/edit'} component={EditRole} />
      </Switch>
    );
  }
}
