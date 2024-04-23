import React from 'react';
import { useFetchGallery } from './customHooks';
import { useSetGlobalContext } from './GlobalContext';

const Gallery = () => {
  const { searchTerm } = useSetGlobalContext();
  const { data, isLoading, isError } = useFetchGallery(searchTerm);

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
        <div className="loading"></div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>Something went wrong, try by reloading the page</h4>
        <div className="loading"></div>
      </section>
    );
  }

  // Variable para contar los resultados
  const results = data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }

  if (!isLoading) {
    return (
      <section className="image-container">
        {/* //Grid */}
        {data.results.map((item) => {
          const { id, description, urls, alt_description } = item;
          const url = item?.urls?.regular;
          return (
            <img src={url} alt={alt_description} key={id} className="img"></img>
          );
        })}
      </section>
    );
  }
};

export default Gallery;
