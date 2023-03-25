/*!
 * Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// const originalTitle = "Eclipse Convoys";
// if (document.hidden) {
//   document.title = "Come back for donuts!";
// } else {
//   document.title = originalTitle;
// }

// window.addEventListener("visibilitychange", handleTabChange);
// return () => window.removeEventListener("visibilitychange", handleTabChange);

const originalTitle = "Eclipse Convoys";
const blurredTitle = "We miss you!";

// when the user loses focus
window.addEventListener("blur", () => {
  document.title = blurredTitle;
});

// when the user's focus is back to your tab (website) again
window.addEventListener("focus", () => {
  document.title = originalTitle;
});
