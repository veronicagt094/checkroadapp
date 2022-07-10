var AWS = require('aws-sdk');
AWS.config.update({region: 'eu-central-1'});


AWS.config.update({
    accessKeyId: config.awsClientID,
    secretAccessKey: config.awsClientSecret,
  });


// Create publish parameters
var params = {
    Message: 'Chequeo pre operacional diligenciado', /* required */
    TopicArn: 'arn:aws:sns:eu-central-1:983052191492:Correo'
  };
  
  // Create promise and SNS service object - no es necesario
  var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
  
  // Handle promise's fulfilled/rejected states
  publishTextPromise.then(
    function(data) {
      console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
      console.log("MessageID is " + data.MessageId);
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });