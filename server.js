const express = require('express');
const app = express();
//FUNCTIONS

const addFunction = (req, res) => {
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    const result = value1 + value2
    //bloody express doesn't take numbers as send() values grrr
    res.send(result.toString())
}
const substractFunction = (req, res) => {
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    const result = value1 - value2
    //bloody express doesn't take numbers as send() values grrr
    res.send(result.toString())
}
const multiplyFunction = (req, res) => {
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    const result = value1 * value2
    //bloody express doesn't take numbers as send() values grrr
    res.send(result.toString())
}
const divideFunction = (req, res) => {
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    const result = value1 / value2
    //bloody express doesn't take numbers as send() values grrr
    res.send(result.toString())
}
    //parameter functions 
const addParameterFunction = (req, res) => {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    const result = value1 + value2
    res.send(result.toString())
}
const substractParameterFunction = (req, res) => {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    const result = value1 - value2
    res.send(result.toString())
}
const multiplyParameterFunction = (req, res) => {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    const result = value1 * value2
    res.send(result.toString())
}
const divideParameterFunction = (req, res) => {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    const result = value1 / value2
    res.send(result.toString())
}
//LOGGING
const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);
//SETTING ENDPOINTS

app.get('/', (req, res) => {
    res.send('Hallo Ik Ben Diego')
});
//SETTING ENDPOINTS WITH QUERIES
app.get('/add', addFunction)
app.get('/substract', substractFunction)
app.get('/multiply', multiplyFunction)
app.get('/divide', divideFunction)

//SETTING ENDPOINTS WITH PARAMETERS 
app.get('/add/:value1/:value2', addParameterFunction)
app.get('/substract/:value1/:value2', substractParameterFunction)
app.get('/multiply/:value1/:value2', multiplyParameterFunction)
app.get('/divide/:value1/:value2', divideParameterFunction)
// PORTS
app.listen(3000, () => console.log("Server is up and running"))

