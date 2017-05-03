const request = require('supertest');
const mock = require('mock-require');
const assert = require('chai').assert;

class TwilioMock {
  constructor() {
    this.messages = {
      create() {
        return new Promise((resolve) => {
          resolve({});
        });
      },
    };
  }
}

describe('Router', () => {
  before(() => {
    mock('twilio', TwilioMock);
  });

  it('should create an SMS lead notification message', () => {
    const app = mock.reRequire('../webapp')();
    return request(app)
      .post('/leads')
      .send({
        name: 'José Oliveros',
        phone: '+17076472275',
        message: 'Hi! I\'m interested in learning more about your property!',
      })
      .expect(200)
      .expect((response) => {
        assert.equal(response.text, 'Lead notification was successfully sent.');
      });
  });
});
