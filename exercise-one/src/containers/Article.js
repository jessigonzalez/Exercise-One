import React, {useEffect,useState} from 'react';

import articleData from '../components/SiteData/articleData';
import TextBlock from '../components/TextBlock';

import '../article.css';
function Article(props){
  //console.log('props',props,articleData);
  const [article, setArticle] = useState({});//set as empty object
  const routeId = props.match.params.id;

  useEffect(() => {
    for(let i = 0; i<articleData.length;i++){
      //console.log(articleData[i].id);
      if(articleData[i].id === routeId){
        //console.log('yes',articleData[i])
        setArticle(articleData[i])
      }
      else{
        console.log('nope')
      }
    }
  },[]);
  console.log('article',article);

  return(
    <div className="article">

      <div style={{ backgroundImage: `url('${article.image && article.image.url}')` }}>
          <h1 style={{textAlign:"left",paddingTop: "30px", marginLeft:"30%", marginRight:"30%"}}>{article.title}</h1>
          <p style={{textAlign:"left", marginLeft:"30%", marginRight:"30%"}}>{article.publishedDate}</p>
          <h3 style={{textAlign:"left", paddingBottom: "30px", marginLeft:"30%", marginRight:"30%"}}>{article.blurb}</h3>
      </div>

      <div style ={{textAlign:"left", marginLeft:"30%", marginRight:"30%"}}>
        <div className="article__text">
          {article.articleText && article.articleText.map((text,i)=> (
            <TextBlock key={i} type={text.type} data={text.data}/>
          ))}
        </div>
      </div>

    </div>
  );

}
export default Article;
//backgroundImage:'url("${article.image.url}")'
//<p key={i}>{text.data}</p>
//<img src = {article.image.url} alt = {article.image.alt} />
//  return <div style={divStyle}>Hello World!</div>;
//<img src = `url(${article.image.url})` alt = {article.image.alt}/>

/*
const imgStyle = {
  backgroundImage: `url(${props.image.url})`
};

*/

/*
body {
  margin-left: 300px;
  margin-right: 300px;
  font-family: Arial;
}
*/
