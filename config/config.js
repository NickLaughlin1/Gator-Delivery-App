//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

export default {
  db: {
    uri:
      "mongodb+srv://user:test@cen3031-summer-2020-jqavu.mongodb.net/<dbname>?retryWrites=true&w=majority",//place the URI of your mongo database here.
  },
  port: 5000,
};

// Add firebase admin and oauth credentials
export const serviceAccountKey = {
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": 
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
};
