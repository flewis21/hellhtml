'use strict'


 
module.exports.helloWorld = async (event, context, callback) => {
const path = require('path')
const fs = require('fs')

  // Extract the request from the CloudFront event that is sent to Lambda@Edge
  // const request = event.Records[0].cf.request

  // Extract the URI from the request
  // const olduri = request.uri

  // Match any '/' that occurs at the end of a URI. Replace it with a default index
  // const newuri = olduri.replace(/\/$/, '\/index.html')

  // Log the URI as received by CloudFront and the new URI to be used to fetch from origin
  // console.log('Old URI: ' + olduri)
  // console.log('New URI: ' + newuri)

  // Replace the received URI with the URI that includes the index page
  // request.uri = newuri

  // Return to CloudFront
  // return callback(null, request);
  // Return to CloudFront
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from the {}!',
      input: event
    },
    null,
    2
    )
  }
}
