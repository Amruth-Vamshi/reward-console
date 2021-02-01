import React from 'react';
import './style.css';

const Search = () => {
  return (
    <div className={`customerSearchContainer`}>
      <div>
        <div className={`searchOption`}>
          <div>
            <span>Customer Phone Number</span>
            <span>Bill No. / Transaction ID</span>
          </div>
        </div>
        <div className={`searchInputButton`}>
          <div>
            <div className="inputGroup">
              <img
                className="searchImage"
                alt="peppo"
                src={require(`walkin-components/src/assets/images/search.svg`)}
              />
              <input type="text" placeholder="Search" />
              <img
                className="cancelImage"
                alt="peppo"
                src={require(`walkin-components/src/assets/images/cancel.svg`)}
              />
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
