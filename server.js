var express=require('express');
var hbs=require('hbs');
var app=express();

const port=process.env.PORT||3000;

hbs.registerPartials(__dirname+"/partials")

hbs.registerHelper('set',(text)=>
{
  return text.toUpperCase();
});

app.use((req,res,next)=>{
  console.log(new Date().toString()+" "+req.method+" " + req.url);
  next();
})

app.use((req,res,next)=>{
  res.render('maintenance.hbs')
})

hbs.registerHelper('year',()=>{
  return  new Date().getFullYear();
});

app.use(express.static(__dirname+"/public"));

app.set('view engine','hbs');

app.get('/',(req,res)=>{
  res.render('home.hbs',{

    aboutPage:"This Page",
    name:'Name'

  })
});

app.get('/read',(req,res)=>{
  res.send({
    name:'Name',
    likes:['Coding','Playing','Nature']
  });
});


app.get('/bad',(req,res)=>{
  res.send({
    name:'undefined',
    type:'Error'
  })
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    aboutPage:'Hello mate',
    year:new Date().getFullYear()
  });
});
app.listen(port) ;
