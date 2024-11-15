const SENDMAIL_TRANSPORT = {
  // This transport uses the local sendmail installation.
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
};

const SMTP_TRANSPORT = {
  host: process.env.SMTP_HOST || '',
  port: process.env.SMTP_PORT || 465,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
  secureConnection: process.env.SMTP_SECURE === 'true', // Umgebungsvariable für Sicherheit
  tls: {
    ciphers: 'SSLv3',
  },
};

module.exports = {
  transport: SMTP_TRANSPORT,
  mailOptions: {
    from: '"Jane Doe" <jane.doe@gmail.com>',
  },
  debugEnabled: process.env.DEBUG_ENABLED === 'true',
};

