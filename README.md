<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Instant Lead Alerts for Node.js and Express

![](https://github.com/TwilioDevEd/lead-alerts-node/workflows/Node.js/badge.svg)

> We are currently in the process of updating this sample template. If you are encountering any issues with the sample, please open an issue at [github.com/twilio-labs/code-exchange/issues](https://github.com/twilio-labs/code-exchange/issues) and we'll try to help you.

This demo application shows how to implement instant lead alerts using Node.js and Express. Notify sales reps or agents right away when a new lead comes in for a real estate listing or other high value channel.

[Read the full tutorial here](https://www.twilio.com/docs/tutorials/walkthrough/lead-alerts/node/express)!


## Local development

To run this project on your computer, you will need to download and install either [Node.js](http://nodejs.org/) or [io.js](https://iojs.org/en/index.html), both of which should also install [npm](https://www.npmjs.com/). You will also need to [sign up for a Twilio account](https://www.twilio.com/try-twilio) if you don't have one already.

1. First clone this repository and `cd` into it.

   ```bash
   $ git clone git@github.com:TwilioDevEd/lead-alerts-node.git
   $ cd lead-alerts-node
   ```

1. Next, create `.env` file at the root of the project and update it with
  values from your
  [Twilio account](https://www.twilio.com/console)
  and local configuration. You'll need to set
  `TWILIO_AUTH_TOKEN`, `TWILIO_ACCOUNT_SID`, and `TWILIO_NUMBER`.

  ```bash
  $ cp .env.example .env
  ```

  For the `TWILIO_NUMBER` variable you'll need to provision a new number
  in the
  [Manage Numbers page](https://www.twilio.com/user/account/phone-numbers/incoming)
  under your account.

  The `AGENT_NUMBER` variable represents the number alerts will be sent to. Please make sure you have allowed SMS to be sent to the Country this number belongs to on the [Global SMS Permissions page](https://www.twilio.com/console/sms/settings/geo-permissions). Also, if you are on a trial account, make sure you have verified this number on the [Verified Callers IDs page](https://www.twilio.com/console/phone-numbers/verified).

  The phone numbers should be in
  [E.164 format](https://www.twilio.com/help/faq/phone-numbers/how-do-i-format-phone-numbers-to-work-internationally).

Follow the next steps to install and run the project:

1. Navigate to the project directory in your terminal and run:

    ```bash
    $ npm install
    ```

   This should install all of our project dependencies from npm into a local `node_modules` folder.

1. To launch the application, you can use `npm start` in the project's root directory. You might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like the node command, but automatically restarts your application when you change any source code files.

    ```bash
    $ npm install -g nodemon
    $ nodemon .
    ```

1. To execute tests, run the following command in the project directory:

    ```bash
    $ npm test
    ```

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* The CodeExchange repository can be found [here](https://github.com/twilio-labs/code-exchange/).
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
