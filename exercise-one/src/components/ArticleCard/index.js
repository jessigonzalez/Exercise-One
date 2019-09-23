import React from 'react'

function ArticleCard({articleContent}){
  return(
    <div className="ArticleCard">
      <div style = {{border: '1px solid black',margin:'auto', width: "900px"}}>
      <img src = {articleContent.image.url} alt = {articleContent.image.alt} style={{marginTop:"30px", marginRight:"600px",width:"180px",height:"150px" }} />

          <div style = {{textAlign:"left", marginLeft:"300px"}} >
            <h3 className="title">{articleContent.title}</h3>
            <p className="date">{articleContent.publishedDate}</p>
            <p className="blurb">{articleContent.blurb}</p>

            <div style={{paddingBottom:"30px"}}>
              <a href={`/article/${articleContent.id}`}>Read More</a>
            </div>

          </div>

      </div>
    </div>
  )
}
export default ArticleCard;

  //<img src = {articleContent.image.url} alt = {articleContent.image.alt} />
