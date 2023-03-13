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
  const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/f52s-o4f7uk:APA91bGBJOcUZU413FjxCwEZEuYSmfQiaVwTkMFj-gPO7xfVe3IeShMDBNRCuasImoCXhVP7hd28pKDPZ9UkAsAE49xncbpp-GEyFWMFI8Tm8kbtdwFoz3vPctqJm2H6IVXYoAsLDxMi","expirationTime":null,"keys":{"p256dh":"BJTedR4NCnOLYCP7m8UvzT6_evAgWEh5yjgDbOCtCxJAcXygDVv6RjLGyfLernQ3XcefhjjesvhLgikbn0XeDRE","auth":"HBCjFOBL4XzMV_nkIPPjDw"}};
  
  webpush.sendNotification(pushSubscription, 'Your Push Payload Text');