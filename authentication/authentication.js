import firebaseAdmin from "firebase-admin";
export const checkAuth = (req, res, next) => {
  //console.log(req);
    if (req.headers.authtoken) {
      firebaseAdmin.auth().verifyIdToken(req.headers.authtoken)
        .then((decode) => {
          req.user = decode;
          next();
        }).catch(() => {
          res.status(403).send('Unauthorized');
        });
    } else {
      res.status(403).send('Unauthorized');
    }
};

