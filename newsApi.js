const apiKey = 'ead74e41a4a740be97e4427bc60002d8';
const country= 'de'
const pageSize= '29' // The number of results to return per page (request). 20 is the default, 100 is the maximum.
const searchquery = "Space station" // TODO: get search query as an input from user 

const topHeadLinesUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&pageSize=${pageSize}`;
const everythingURL =  `https://newsapi.org/v2/everything?q=${searchquery}&apiKey=${apiKey}`;
// source  = subset of news publishers, also contained in top headlines endpoint
const sourceURL =  `https://newsapi.org/v2/sources?apiKey=${apiKey}`; 

export {apiKey, topHeadLinesUrl, everythingURL, sourceURL};