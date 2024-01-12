import React, { useEffect, useState, useRef } from 'react';
import News from './News';
import './News.css';

function Newsapp() {
  const apiKey = 'c3744400a7414ede89f8bcccf94e64d0';
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState('tesla');
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`;
  const queryInputRef = useRef(null);



  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      console.log(jsonData);

      setNewsList(jsonData.articles);
    } catch (e) {
      console.log(e, 'error occurred');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
    fetchData();
  }

  function handleCategoryClick(category) {
    setQuery(category);
  }

  const categories = ['India', 'Business', 'Tech', 'Science', 'Cricket', 'Lifestyle', 'Health', 'Research', 'Sports'];

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          ref={queryInputRef}
          style={{
            padding: '10px',
            marginRight: '10px',
            marginLeft: '20px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            color: '#333', /* Text color */
            fontSize: '16px', /* Font size */
            outline: 'none', /* Remove the default input outline on focus */



          }}
          Search
        />
        <button
          type="submit"
          style={{
            margin: '15px ',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>
      <div style={{
        display: 'flex',
        gap: '7px',
        marginBottom: '20px',

      }}>
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={{
                padding: '8px',
                borderRadius: '5px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                marginLeft: '20px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#217dbb'} // Change background color on hover
              onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
            >
              {category}
            </button>
          ))}
        </div>

      </div>
      <div className="mainContainer"


      >
        {Array.isArray(newsList) && newsList.length > 0 ? (
          newsList.map((news) => (
            <News key={news.url} news={news} />
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
}

export default Newsapp;
