# Instant Lead Alerts for Node.js and Express

This demo application shows how to implement instant lead alerts using Node.js and Express. Notify sales reps or agents right away when a new lead comes in for a real estate listing or other high value channel.

[Read the full tutorial here](https://www.twilio.com/docs/tutorials/walkthrough/lead-alerts/node/express)!

## Deploy On Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/TwilioDevEd/lead-alerts-node)

## Running the Project on Your Machine

To run this project on your computer, download or clone the source. You will also need to download and install either [Node.js](http://nodejs.org/) or [io.js](https://iojs.org/en/index.html), both of which should also install [npm](https://www.npmjs.com/). You will also need to [sign up for a Twilio account](https://www.twilio.com/try-twilio) if you don't have one already.

### Install Dependencies

Navigate to the project directory in your terminal and run:

```bash
npm install
```

This should install all of our project dependencies from npm into a local `node_modules` folder.

### Configuration

Next, open `config.js` at the root of the project and update it with values from your environment and your [Twilio account](https://www.twilio.com/user/account/voice-messaging). You can either export these values as system environment variables (this is the default setup), or you can replace these values with hard-coded strings (be careful you don't commit them to git!).

### Running the Project

To launch the application, you can use `node .` in the project's root directory. You might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like the node command, but automatically restarts your application when you change any source code files.

```bash
npm install -g nodemon
nodemon .
```

### Docker local development

First, install [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/install/).

Then set the following environment variables in your terminal session. You can find these values at https://www.twilio.com/user/account/voice and at https://dashboard.authy.com.

- `TWILIO_NUMBER`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `AGENT_NUMBER`

Finally, run the following commands to start your Docker containers:

```
$ docker-compose up -d
```

Warning: If you previously ran  ```npm install``` locally, the node_modules folder will conflict with the file structure of the container when you run the above command.
We recommended installing your node dependencies one folder up from the rest of your source code.

You can then visit the application at [http://localhost:3000/](http://localhost:3000/). If you're using [boot2docker](https://docs.docker.com/installation/mac/) to run Docker on OS X, you'll need to use the value of `boot2docker ip` instead of `localhost`.

To stop your containers, run `docker-compose stop`.

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.