const {
  hooks
} = require('@adonisjs/ignitor');

hooks.after.providersBooted(() => {
  const View = use('View');
  const get_time = new Date().getTime();
  View.global('time', get_time);
});
