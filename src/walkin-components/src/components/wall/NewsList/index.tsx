import React, { Component } from 'react';
import NewsItem from './NewsItem';

interface IProps {
  newsList: any[];
}
interface IState {}

class NewsList extends Component<IProps, IState> {
  render() {
    return (
      <div>
        <div className="gx-flex-row gx-mb-3">
          <h4>TRENDING NEWS</h4>
          <a className="gx-ml-auto">
            <u>VIEW ALL</u>
          </a>
        </div>
        {this.props.newsList.map(news => {
          return <NewsItem key={news.id} index={news.id} data={news} />;
        })}
      </div>
    );
  }
}

export default NewsList;
