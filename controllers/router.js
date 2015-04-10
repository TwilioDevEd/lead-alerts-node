var twilio = require('twilio');
var config = require('../config');

// Create an authenticated Twilio API client
var client = twilio(config.accountSid, config.authToken);

// Some hard-coded information about a house
var house = {
    title: '555 Sunnybrook Lane',
    price: '$349,999',
    description: 'You and your family will love this charming home. '
        + 'Featuring granite appliances, stainless steel windows, and '
        + 'high efficiency dual mud rooms, this joint is loaded to the max. '
        + 'Motivated sellers have priced for a quick sale, act now!'
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