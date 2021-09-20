+'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
  	WriteHead: (404, { 'Content-Type': 'text/plain'}),
  	Write: ('Error 404: Resource not found.'),
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
	}),
 };

 callback(null, response) = {
 
	if (req.Method == 'GET' && req.url == '/') {
		res.WriteHead(200, { 'content-type': 'text/html' });
		fs.createReadStream('./html-css-course/01-test/index.html').pipe(res);
	} else {
		send404(res);
	}
 };
};
console.log('server running on port 4000');
	
var nodegit = require('nodegit'),
    path = require('path');

var url = "",
    local = "",
    cloneOpts = {};

nodegit.Clone(url, local, cloneOpts).then(function (repo) {
    console.log("Cloned " + path.basename(url) + "to  " + repo.workdir());
}).catch(function (err) {
    console.log(err);
});
