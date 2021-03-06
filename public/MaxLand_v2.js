/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'MaxLand';
const INTRO = `Hello, I'm ${SKILL_NAME}. I can give you data on foreclosures in Cincinnati over the past 6 years. Try asking which neighborhood has the most foreclosures.`
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/lambda/data
//=========================================================================================================================================
const data =
    'A year on Mercury is just 88 days long.';
const neighborhood =
    [
    'Clifton',
    'Bond Hill',
  ]; //this will be the .csv file -- readcsv
var propertyValues = [10, 50, 90, 200];
var sumPropVal = 0;
var avgPropVal = 200;
var maxPropVal = 200;
var minPropVal = 10;
var uInNeighborhood = event.request.intent.slots.Neighborhood.value;

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        //this.emit('GetNewFactIntent');
        this.response.speak(INTRO);
        this.emit(':responseReady');
    },
    'ForeclosuresIntent': function () {
      var uInNeighborhood = event.request.intent.slots.Neighborhood.value;
      alert(uInNeighborhood);
      var count=0;
      for(var i=0; i<length.uInNeighborhood, i++) {
        if(uInNeighborhood==neighborhood) {
          count++;
        };
      }

      const speechOutput = 'The number of foreclosures in ' + uInNeighborhood +' is ' + count;

      this.response.cardRenderer(SKILL_NAME, uInNeighborhood, count);
      this.response.speak(speechOutput);
      this.emit(':responseReady');
    }
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr;
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
