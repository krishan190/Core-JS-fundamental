// queryString package used in react project for 
// converting object to queryString

const queryString = require("querystring");

const params = { search: "laptop", page: 2, sort: "price" };

// object to queryString

const queryStr = queryString.stringify(params);

// let's example
// const url = `https://api.example.com/products?${queryStr}`;

console.log(url);
// it will be converted like this
// https://api.example.com/products?search=laptio&page=2&sort=price


axios.get(url).then(res => {
    console.log(res.data);
})