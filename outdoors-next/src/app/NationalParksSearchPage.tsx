import React, { useState, ChangeEvent, FormEvent } from 'react';

const NationalParksSearchPage = () => {
  const [searchOption, setSearchOption] = useState('location');
  const [searchCriteria, setSearchCriteria] = useState('');

  const handleSearchOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchOption(event.target.value);
    setSearchCriteria('');
  };

  const handleSearchCriteriaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchCriteria(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search based on searchOption and searchCriteria
    console.log('Perform search:', searchOption, searchCriteria);
  };

  return (
    <div>
      <h1>National Parks Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search by:
          <select value={searchOption} onChange={handleSearchOptionChange}>
            <option value="location">Location</option>
            <option value="parkType">Park Type</option>
          </select>
        </label>
        {searchOption === 'location' ? (
          <label>
            Location:
            <input
              type="text"
              value={searchCriteria}
              onChange={handleSearchCriteriaChange}
            />
          </label>
        ) : (
          <label>
            Park Type:
            <input
              type="text"
              value={searchCriteria}
              onChange={handleSearchCriteriaChange}
            />
          </label>
        )}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default NationalParksSearchPage;
