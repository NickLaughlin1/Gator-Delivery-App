//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

export default {
  db: {
    uri:
      "mongodb+srv://user:test@cen3031-summer-2020-jqavu.mongodb.net/<dbname>?retryWrites=true&w=majority", //place the URI of your mongo database here.
  },
  port: 5000,
};

export const serviceAccountKey = {
  "type": "service_account",
  "project_id": "gator-delivery",
  "private_key_id": "5fdbc09f18c020b01900c3536a413970ed37ee1f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxOGUSoxByDH3l\nMhqQvTMdHwhxGemjfGGdVUrnpYKQHvfiXJnPCGB/oS7ZQwlIxbfXgWyIHdFouitI\nsh9Dlx7DBm7a90Vy9MyX38a8cYtZ2X9VZYQ/uPJ+YxS36HlLVw01u5BVkQEq8Rcd\nyvPiBbyE8U98gPgxPnLC4rF3vw3etNhhtMwT/FpeS5SKGOZ+A+yexQcw0+G5Bhu9\ncatkxUJ6PhuLS/J9xfZSHC+YmluhLUOtulzVT550gKMbn7f3Xoja4+URJzwnAyam\ntaQdiv6PcyGfYADgPLpDDM8qfUSA4xRtEDTVU3vTh6D0IJgJZUO0G9wjuq2qBKsE\nG00XMhH1AgMBAAECggEADSPnVU3DRxGSDCUo6cPS6b0xUmGKJ1XDpHd8iayF/8sB\nX5wKHjBlfKZ7jh8gWHBV706+DgxX80dKilCwF2zkb7AnFr6a5v6BD7Rx90BcBW97\nt4iYGQ7M5tN7PR+ppA0dAkzuqMmK/UofCAB9ENc9YTDF+gSot84E6FpdWkmk7Pb6\n1sokbhRADBUdG1tk51FkI+0ZLCiX8VSmArNTd+uSoGNp6W8qdJHWvOYzhY9FUUL+\nMUmSBNMr3rHuabcEo7glW63T94103dv5/GaqTPg5l1/GFVUIUQ/uh7yisgq/WWBx\nT6MzL+dR20gpkE2IMu06OjumQTRNBW2IFbK46l/oiQKBgQDf3yGK6RRAmy7mI+BK\nKq/MBI7PAhls9yXqQlFc8EalwSVtHiQY2hFK+N14T7D7QTmWtPCE793HInMPXMOx\n7yYo/knfdBo226LlixRX4LC7/0CAQvdiuMTWO2v2vb6+IYSz4Hh66Hxe2w164RHW\nsHjw8SXG+JtTyqt4b/Jas6iduwKBgQDKp1Ssl6RPRQkFVcsEojsdREZRQ2ReP51J\nXNnzCeGgM7z/pxWXxAB/cW3ln1+5fCNUPYiW1KEK9L7zwEJZRCGPG/frjQfe8Vm6\n2p8DWEoykavT6aSxpD3bRFOyLU8m3vDMFjTi44qhoKwv9ETH2xQFGfancHU/BNQ3\n7DOyX/s8DwKBgGdzyB9WGBrG24RUPdhoI3bHAGtez/sPtsCrRsgI7My6FZ54GDw3\nwVgA6u8m/GUPPhqLoL39zmGwZLVLq8808VBuOhr9nwOMuZkTjSIS3fjyOo9K4uEG\n+0b4jKqoAlYATT+GUoaRmq+G0JLhIQox4KGO/mMVDUpKVLTCHp+VeCzzAoGBAI2w\n3TUneYyrGhmO2LnOrEJUQE4FLqHvHIv0zbZuTED0q8qcCi7orehtaIdKHWXU8+as\nd1nuJQNCCFjpLfq39jbXOUqKetxYJ4LL5K40BvzAeUFbdPl3eoBaj6Jep57n9bjc\nNfIFYiKL8pg80/JgrOi8NIbxzChZuf+3uJWZIlHlAoGAT30jJBUQ9zADPqNBPm3h\nBhlQVtw7aa2yASCYwDqV10HXwquQYFe8aHC5BU0AuyTobihZjhELDK0vzYSmgR+t\nPfDLwVc0d5jdd9DfQqVWV865EUALzRub7Nq8SlX9ANSEgNpX3yqazqE3sNm0xaUA\nj4RIYmtjA6po55Th7EJNTcc=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-7u7z2@gator-delivery.iam.gserviceaccount.com",
  "client_id": "100945666331052847938",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7u7z2%40gator-delivery.iam.gserviceaccount.com"
};
