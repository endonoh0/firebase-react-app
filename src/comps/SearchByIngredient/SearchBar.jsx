import React from 'react';
import './SearchBar.scss'

const SearchBar = (props) => {
  const {searchTerm, setSearchTerm, onKeyUp} = props;

	return(
    <div class="col-12 col-md-10 col-lg-8">
      <div class="card card-sm">
        <div class="card-body row no-gutters align-items-center">
          <div class="col">
            <input
            type="search"
            placeholder="Add to list"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyUp={e => {
              if(e.key === 'Enter'){
                onKeyUp(searchTerm)
              }
            }}/>
          </div>
          <div class="col-auto">
            <button class="btn btn-lg btn-success" type="submit">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;