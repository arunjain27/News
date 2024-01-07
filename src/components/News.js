
import React, { useState, useEffect } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import "./app.css";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const updateNews = async () => {
    props.setprogress(10);
// At the point where you construct your URL for the API call
const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      if (parsedData.articles) {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
      } else {
        setArticles([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Could not fetch the news", error);
      setLoading(false);
      // Handle the error state appropriately
    }
    props.setprogress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
},[page]);

  const handlePrevClick = async () => {
    setPage(page - 1);
  };

  const handleNextClick = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' ,color:"#1f456e" }}>{props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h1>

      {loading && <div>Loading...</div>}

      <div className="container">
        <div className="row">
          {articles && articles.length > 0 ? (
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Item 
                  title={element.title ? element.title : ""} 
                  description={element.description ? element.description : ""} 
                  imageUrl={element.urlToImage} 
                  newsUrl={element.url} 
                  author={element.author} 
                  date={element.publishedAt} 
                  source={element.source.name} 
                />
              </div>
            ))
          ) : (
            <p>No articles found.</p>
        
          )}
        </div>
        <div className='btn'>
          <button className='buttonprev' disabled={page <= 1} type="button" onClick={handlePrevClick}>prev</button>
          <button className='buttonprev' disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" onClick={handleNextClick}>next</button>
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
