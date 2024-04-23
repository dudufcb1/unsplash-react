import React from 'react';
import { useSetGlobalContext } from './GlobalContext';

const SearchForm = () => {
  const { updateSearchTerm } = useSetGlobalContext();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const targetValue = e.target.elements.search.value;
    if (!targetValue) return;
    updateSearchTerm(targetValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="search"
          id=""
          placeholder="cat"
          className="form-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
