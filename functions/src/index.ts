import * as functions from 'firebase-functions';
import { registerHandlers } from './handlers';
const { WebhookClient }  = require('dialogflow-fulfillment');


const handlersRegisrty = registerHandlers();

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {

  const agent = new WebhookClient({ request, response });  
  const handler = handlersRegisrty.findHandler(agent);
  if(handler) {
    handler.handle(agent);
  }
  agent.send_();
});




  // export const dialogFlowfullfilment = functions.https.onRequest((request, response) => {
  // const intentName = request.body.queryResult.intent.displayName;
  // const intent = IntentFactory.getIntent(intentName);
  // const botResponse = intent.getResponse();
  
  // response.send(botResponse.plainText());
  // });


  // export const dialogFlowfullfilmentRich = functions.https.onRequest((request, response) => {
  // const intentName = request.body.queryResult.intent.displayName;
  // const intent = IntentFactory.getIntent(intentName);
  // const botResponse = intent.getResponse();
  
  // response.send(botResponse.richMessage());
  // });


// export const aliceWrapperWebHook = functions.https.onRequest(async (request, response) => {
  
//   const projectId = 'museumbot-umxwtw'; // @TODO: put it in config
//   const queryText = request.body.request.command;


//   // Detect intent from dialogFlow
  
//   // A unique identifier for the given session
//   const sessionId = uuid.v4();
 
//   // Create a new session
//   const sessionClient = new dialogflow.SessionsClient();
//   const sessionPath = sessionClient.sessionPath(projectId, sessionId);
 
//   // The text query request.
//   const query = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         text: queryText,
//         languageCode: 'ru-RU',
//       },
//     },
//   };

//   const responses = await sessionClient.detectIntent(query);
//   const result = responses[0].queryResult;

//   console.log(result);

//   const intentName = result.intent.displayName;

//   // Call intent factory
//   console.log('Intent name:', intentName);
//   const intent = IntentFactory.getIntent(intentName);
//   response.send(intent.getResponse());
// });

