
***Automatic Slideshow with pure Javascript****
Has two buttons:

(1) to stop the automatic slideshow

(2) to resume the slideshow

Main Challenges Faced:
(1) setTimeout() function was a pain to work with but I understood it quite well by the end

(2) A point to remember that sometimes clearTimeout() doesn't work by applying it to the id of the latest setTimeout() function, so apply to all possible setTimeout function id's (which are returned values from the setTimeout() functions)

(3) setTimeout() could be setup as a relay method so it could be put inside the function that is already under way so that the next function can be called up automatically.

(4) setTimeout(function, timedelay) - remember that time delay value is accessed asynchronously by Javascript. This means that if:

setTimeout(alert("a"),3000);

setTimeout(alert("b"),3000);

Then javascript will carry out both together, 3seconds from when the window is loaded. Because the calculation is so fast, usually the last value or the final value seen on the screen belongs to the function that was carried out last.
better way is to increase the time interval like so:

setTimeout(alert("a"),3000);

setTimeout(alert("b"),6000);

This way Javascript will carry out the first one 3seconds after the screen has finished loading and the second one 6 seconds after the screen has finished loading. Its all relative to when the screen gets loaded rather than the time difference between individual functions themselves.
