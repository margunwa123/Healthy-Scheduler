export const askNotificationPermission = () => {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
};

export const fireNotif = (message: string, body: string = '') => {
  if (!('Notification' in window)) {
    return;
  }
  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then(function (reg) {
      reg?.showNotification('hehe');
    });
    // If it's okay let's create a notification
    new Notification(message, {
      body,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
      requireInteraction: false,
      vibrate: 1,
    });
  }
};
