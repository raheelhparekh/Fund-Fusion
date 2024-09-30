import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

app.post('/submit',(req,res)=>{
  
  console.log(req.body);

})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})