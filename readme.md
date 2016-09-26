Back in black
========
First of all, thanks to **pimvdb** for this great and lightweight app.

Now, seeing that the extension died a long time ago and pimvdb's last activity over github was 4 years ago I decided to bring it back to life.

Plomplex
========
Domain coloring plotter for complex functions

---

Installing
----------
This is the source repository for the browser extension.

Overview
--------

The main app is just a local webpage and the calculations and plotting happens in a Web Worker.

 - `script`: Client JavaScript files for the app
 - `script/worker`: Complex number implementation, parser, plotter

The app relies upon jQuery. Some home-made plugins have been used:

 - `jquery.persistForm`: This plugin saves the form data (formula entered, etc)
   and loads it next time you open the app
 - `jquery.xVal`: This plugin is like `.val` but has enhanced return values,
   such as returning a number value for `<input type="number">` elements.

TODO
----------

 - Add Firefox support.
 
<!--[1]: https://chrome.google.com/webstore/detail/kbjlipkfgffobjpnkigjgepljhhkpphi-->
