module.exports=function(app)
{
app.get('/',function(req,res){
res.render('index.html')
});

app.get('/contact',function(req,res){
res.render('contact.html');
});

app.get('/configure',function(req,res){
res.render('configure.html');
});
}