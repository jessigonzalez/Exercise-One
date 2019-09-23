import React from 'react';
import ArticleCard from '../../components/ArticleCard';
import articleData from '../../components/SiteData/articleData';
function Home(){
  return (
    <div className="ArticleData">
      <h1 style={{textAlign:"left", marginLeft:"14%"}}>Articles</h1>
      {articleData.map((article, i) => (
        <div style = {{margin:"35px"}}>
          <ArticleCard key={i} articleContent={article}/>
        </div>
      ))}
    </div>
  );
}
export default Home
