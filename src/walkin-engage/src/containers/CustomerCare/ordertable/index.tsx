import React from 'react';
import { withRouter } from 'react-router-dom';
import Search from '../search';
import './style.css';

const CusomerTable = props => {
  const { history, match } = props;
  return (
    <div className={`customer`}>
      <Search />
      <div className={`customerTableContainer`}>
        <span>Orders</span>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Store Name</th>
              <th>Date & Time</th>
              <th>No. of Items</th>
              <th>Total Bill Amt</th>
              <th>Points Earned</th>
              <th>Points Redeemed</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => history.push(match.url + '/1')}>
              <td className={`idColumn`}>21536200</td>
              <td>ABC</td>
              <td>12/12/12 2:30</td>
              <td>10</td>
              <td>12054</td>
              <td>5</td>
              <td>40</td>
              <td>Pending</td>
            </tr>
            <tr onClick={() => history.push(match.url + '/2')}>
              <td className={`idColumn`}>21536200</td>
              <td>ABC</td>
              <td>12/12/12 2:30</td>
              <td>10</td>
              <td>12054</td>
              <td>5</td>
              <td>40</td>
              <td>Pending</td>
            </tr>
            <tr onClick={() => history.push(match.url + '/3')}>
              <td className={`idColumn`}>21536200</td>
              <td>ABC</td>
              <td>12/12/12 2:30</td>
              <td>10</td>
              <td>12054</td>
              <td>5</td>
              <td>40</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withRouter(CusomerTable);
