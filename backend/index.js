const express = require('express');
 
const app = express();
  
app.get('/', (req, res) => {
    res.send('Express set up');
});
 
app.listen(3000, () => {
    console.log(`listening on 3000`);
});