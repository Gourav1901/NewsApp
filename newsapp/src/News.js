import React from 'react'
import './News.css'
function News({ news }) {
  return (
    <div className="news-card">
      <img src={news.urlToImage} alt={news.title} />
      <h2>{news.title.slice(0, 40)}</h2>
      <p>{news.description ?news.description.slice(0,150):null}</p>
      <button onClick={() => window.open(news.url)}>Read More</button>
    </div>
  )
}

export default News;