// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {

//get data submitted in request's body
let body = req.body;



console.log('body: ', body);

if (!body.firstNumber || !body.secondNumber){
  return res.status(400).json({data: 'first or second number was not found.'})
}





  


  //res.status(200).json( {body: ''})
  
}
