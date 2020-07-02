# ig-unlocker
Browse IG freely, without logging in. (**Chrome only**)

This little script runs continuously and checks if IG's `Log in` overlay appeared. If it did, it will be removed from the dom, and `<body>` element's `overflow` property will be returned to it's original state.  
Moreover, it gets urls from all the posts that it finds and uses them as a parameter in `window.open()` that is being called on each post's `onclick` event.

1. Clone this repository or download it as a .zip and unpack it
2. Go to `chrome://extensions`
3. Turn on **developer mode**
4. Click **Load unpacked** and choose the directory containing this repository
5. Go to IG and browse it freely without logging in.
