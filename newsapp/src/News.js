// import React from 'react'
// import './News.css'
// function News({ news }) {
//   return (
//     <div className="news-card">
//       <img src={news.urlToImage} alt={news.title} />
//       <h2>{news.title.slice(0, 47)}</h2>
//       <p>{news.description ? news.description.slice(0,150):null}</p>
//       <button onClick={() => window.open(news.url)}>Read More</button>
//     </div>
//   )
// }

// export default News;
import React from 'react';
import './News.css';

function News({ news }) {
  // Check if 'news' is null or undefined
  if (!news) {
    return null; // or some fallback content if desired
  }

  return (
    <div className="news-card">
      {/* Check if 'news.urlToImage' is defined before rendering the image */}
      {news.urlToImage && <img src={news.urlToImage} alt={news.title} />}

      {/* Check if 'news.title' is defined before using 'slice' */}
      {news.title && <h2>{news.title.slice(0, 50)}</h2>}

      {/* Check if 'news.description' is defined before using 'slice' */}
      {news.description && <p>{news.description.slice(0, 150)}</p>}

      {/* Check if 'news.url' is defined before opening it */}
      {news.url && <button onClick={() => window.open(news.url)}>Read More</button>}
    </div>
  );
}

export default News;
