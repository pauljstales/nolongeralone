/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonFireSpecialWeapon = document.getElementById(
  "button-fire-special-weapon"
);
buttonFireSpecialWeapon.addEventListener("click", () => {
  console.log("special weapon fire");
  buttonFireSpecialWeapon.classList.remove("button--color--default");
  buttonFireSpecialWeapon.classList.add("button--color--disabled");
});
