var push = require('web-push');

var vapidKeys = {
    publicKey: 'BA4xyYnv8KDQjVUWJ_1RBmhgMIsLnxQSDI_HdZPX-KmZwrDK1gcYoNl_LEn-sCQknWzFw41vVtkaP8u07B4qMTc',
    privateKey: 'OIBf8Rqmaq10bhWVFXZOWCLwq168_CXXfXmgSNGZXOc'
  };

  webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );
  
  // This is the same output of calling JSON.stringify on a PushSubscription
  const pushSubscription = {
    endpoint: '.....',
    keys: {
      auth: '.....',
      p256dh: '.....'
    }
  };
  
  webpush.sendNotification(pushSubscription, 'Your Push Payload Text');