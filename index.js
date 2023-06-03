const express= require("express")
const NewsAPI = require('newsapi');
 const app= express();

 app.get('/',(req,res)=>{
  const newsapi = new NewsAPI('872f141f83fc489b84ecd1518a6432a3');
  // To query /v2/top-headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them
  newsapi.v2.topHeadlines({
  //   sources: 'bbc-news,the-verge',
    q: 'technology',
    category: 'business',
    language: 'en',
    country: 'in'
  }).then(data => {
    console.log(data);
  let news_content=data
    
   console.log(news_content.articles[0].url);
   console.log(news_content.articles[0].content);
   res.send(news_content.articles[0].content);
    
   }); 
   
 })

app.listen(3000,(req,res)=>{
    console.log("Server has started");
})