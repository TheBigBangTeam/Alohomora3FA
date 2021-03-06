'use strict'

const config = require('config')
const nodemailer = require('nodemailer')

const User = require('./models/User')

const transporter = nodemailer.createTransport({
  host: config.get('Settings.mail.host'),
  port: config.get('Settings.mail.port'),
  auth: {
      user: config.get('Settings.mail.auth.user'),
      pass: config.get('Settings.mail.auth.pass')
  }
});

const notifyMail = async (subject, text) => {
  
  const receivers = await User.findByPrivileges(['admin', 'security'])
  let message = {
    from: 'Alohomora Notice',
    to: receivers,
    subject: subject,
    text: text
  };

  return transporter.sendMail(message)
}

module.exports = { notifyMail }
