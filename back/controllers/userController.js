const User = require("../models/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// Crypto
// https://github.com/brix/crypto-js
const cryptojs = require('crypto-js');
const cryp64 = cryptojs.enc.Base64
// Variable d'environnement
require('dotenv').config();
// signup function
exports.signup = (req, res, next) => {
  // HmacSHA512
  // Voir https://cryptojs.gitbook.io/docs/#hmac
  const cryptoEmail = cryptojs.HmacSHA512(req.body.email, process.env.ASK_TOKEN).toString(cryp64);
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: cryptoEmail,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => {
      console.log(error)
      return res.status(500).json({ error })
    });
};
// login function
exports.login = (req, res, next) => {
  const cryptoEmail = cryptojs.HmacSHA512(req.body.email, process.env.ASK_TOKEN).toString(cryp64);
  User.findOne({ email: cryptoEmail })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              process.env.ASK_TOKEN,
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};