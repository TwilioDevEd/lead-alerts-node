var twilio = require('twilio');
var config = require('../config');

// Create an authenticated Twilio API client
var client = twilio(config.accountSid, config.authToken);

// Some hard-coded information about a house
var house = {
    title: 'Google Apps for Work – Email, Collaboration Tools And More',
    price: '$5/month per User',
    description: 'Google Apps is a suite of web-based collaboration software to '
        + 'meets the needs of your small to medium sized business: '
        + 'Gmail; Google Calendar for shared calendaring; Google Docs and Spreadsheets '
        + 'for online document hosting and collaboration; Google Sites for team site creation '
        + 'and publishing; and Google Video for easy, secure sharing of video content. '
};

// Map routes to controller functions
module.exports = function(app) {
    // Render landing page
    app.get('/', function(request, response) {
        response.render('index', house);
    });

    // Send lead notification
    app.post('/leads', function(request, response) {
        // Assemble a text message body 
        var message = 'New lead received for ' + house.title + '. Call ' 
            + request.body.name + ' at ' + request.body.phone + '. Message: "'
            + request.body.message + '"';

        // Send lead notification to agent
        client.sendMessage({
            to: config.agentNumber,
            from: config.twilioNumber,
            body: message
        }, function(err, data) {
            // Return a 500 if there was an error on Twilio's end
            if (err) {
                console.error(err);
                return response.status(500).send();
            }

            // Otherwise, respond with 200 OK
            response.status(200).send('');
        });
    });
};
