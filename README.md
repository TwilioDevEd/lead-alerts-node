<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Instant Lead Alerts for Node.js and Express

![](https://github.com/TwilioDevEd/lead-alerts-node/workflows/Node.js/badge.svg)

> We are currently in the process of updating this sample template. If you are encountering any issues with the sample, please open an issue at [github.com/twilio-labs/code-exchange/issues](https://github.com/twilio-labs/code-exchange/issues) and we'll try to help you.

## About

This demo application shows how to implement instant lead alerts using Node.js and Express. Notify sales reps or agents right away when a new lead comes in for a real estate listing or other high value channel.

[Read the full tutorial here](https://www.twilio.com/docs/tutorials/walkthrough/lead-alerts/node/express)!

Implementations in other languages:

| .NET | Java | Python | PHP | Ruby |
| :--- | :--- | :----- | :-- | :--- |
| [Done](https://github.com/TwilioDevEd/lead-alerts-csharp) | [Done](https://github.com/TwilioDevEd/lead-alerts-servlets)  | [Done](https://github.com/TwilioDevEd/lead-alerts-flask)    | [Done](https://github.com/TwilioDevEd/lead-alerts-laravel) | [Done](https://github.com/TwilioDevEd/lead-alerts-rails)  |

## Set up

### Requirements

- [Nodejs](https://nodejs.org/) v10 or v12

### Twilio Account Settings

This application should give you a ready-made starting point for writing your own application.
Before we begin, we need to collect all the config values we need to run the application:

| Config Value | Description |
| :----------  | :---------- |
| TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN | You could find them in your [Twilio Account Settings](https://www.twilio.com/console/account/settings)|
| TWILIO_NUMBER | You may find it [here](https://www.twilio.com/console/phone-numbers/incoming) |
| AGENT_NUMBER |  This variable represents the number alerts will be sent to. Please make sure you have allowed SMS to be sent to the Country this number belongs to on the [Global SMS Permissions page](https://www.twilio.com/console/sms/settings/geo-permissions). Also, if you are on a trial account, make sure you have verified this number on the [Verified Callers IDs page](https://www.twilio.com/console/phone-numbers/verified) |

## Local development

1. First clone this repository and `cd` into it.

   ```bash
   git clone git@github.com:TwilioDevEd/lead-alerts-node.git
   cd lead-alerts-node
   ```

2. Install the dependencies.

    ```bash
    npm install
    ```

   See [Twilio Account Settings](#twilio-account-settings) to locate the necessary environment variables. The phone numbers should be in [E.164 format](https://www.twilio.com/help/faq/phone-numbers/how-do-i-format-phone-numbers-to-work-internationally).

3. Copy the sample configuration file and edit it to match your configuration.

   ```bash
   cp .env.example .env
   ```

4. Start the server, will run on port 3000.

   ```bash
   npm start
   ```

   You might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like the node command, but automatically restarts your application when you change any source code files.

   ```bash
    npm install -g nodemon
    nodemon .
    ```

5. Navigate to [http://localhost:3000](http://localhost:3000)

That's it!

### Tests

To execute tests, run the following command in the project directory:

```bash
npm test
```

### Cloud deployment

Additionally to trying out this application locally, you can deploy it to a variety of host services. Here is a small selection of them.

Please be aware that some of these might charge you for the usage or might make the source code for this application visible to the public. When in doubt research the respective hosting service first.

| Service                           |                                                                                                                                                                                                                           |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Heroku](https://www.heroku.com/) | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)                                                                                                                                       |

## Resources

- The CodeExchange repository can be found [here](https://github.com/twilio-labs/code-exchange/).

## Contributing

This template is open source and welcomes contributions. All contributions are subject to our [Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md).

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.

[twilio]: https://www.twilio.com

