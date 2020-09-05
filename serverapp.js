var express = require('express');
var app = express();
var bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.get('/app', function(req,res){
		res.send(
			[
				{
				"id": 1,
				"name": "kim",
				"birthday": "961222",
				"gender": "man",
				"job": "대학생"
				},
				{
				"id": 2,
				"name": "나동빈",
				"birthday": "960508",
				"gender": "남자",
				"job": "프로그래머"
				},
				{
				"id": 3,
				"name": "이순신",
				"birthday": "961127",
				"gender": "남자",
				"job": "디자이너"
				}
			])
		});

app.listen(5000, function(){
	console.log('hello')
});