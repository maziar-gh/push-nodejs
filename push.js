var webpush = require('web-push');

//var keys = webpush.generateVAPIDKeys();

//console.log(keys);

var vapidKeys = {
  publicKey: 'BNI5je6xNZrNsgOJ08ipNEkxiNL4-JvqYcv0AN1qA3A2w_lwITYymCbq__J4V85D5Th-kKE92SL5Y_F04uHQP5E',
  privateKey: 'MliK3YrTE2CDOypyx3M_5CM-IHANmbhQgMrVsuHTf7E'
};

  webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );
  
  // This is the same output of calling JSON.stringify on a PushSubscription
  const pushSubscription = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkD…mL4CH8E82hLGmVR2-0Zbrh6gJIPqe1wn-j3JPK9pqgHe1T-1r0pcWTT1_9CU","expirationTime":null,"keys":{"auth":"gbfYECst9atPzbzrICusug","p256dh":"BI3jj5yAaCbX-4-tpSByYEFoO8IviG_dT7E3JkXyjLMAbI33CiARuABHiscsdV_hi6Q1ivX276ijBg3hAlzdGZ0"}};
  
  webpush.sendNotification(pushSubscription, 'Your Push Payload Text');