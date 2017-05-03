const Twilio = require('twilio');
const config = require('../config');
const Express = require('express');


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
module.exports = function () {
    // Create an authenticated Twilio API client
    var client = new Twilio(config.accountSid, config.authToken);
    const router = Express.Router();

    // Render landing page
    router.get('/', function(request, response) {
        response.render('index', house);
    });

    // Send lead notification
    router.post('/leads', function(request, response) {
        // Assemble a text message body
        var message = 'New lead received for ' + house.title + '. Call '
            + request.body.name + ' at ' + request.body.phone + '. Message: "'
            + request.body.message + '"';

        // Send lead notification to agent
        client.messages.create({
            to: config.agentNumber,
            from: config.twilioNumber,
            body: message
        })
        .then(() => {
          // Otherwise, respond with 200 OK
          response.status(200).send('Lead notification was successfully sent.');
        })
        .catch((err) => {
          console.error(err);
          response.status(500).send();
        })
    });

    return router;
};
