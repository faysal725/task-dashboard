function togglePasswordVisibility(id) {
  const input = document.getElementById(id);
  const label = input.closest("label");
  const eye = label.querySelector(".eye");
  const eyeSlash = label.querySelector(".eye-slash");

  const isHidden = input.type === "password";

  input.type = isHidden ? "text" : "password";

  console.log(eye, eyeSlash)
  eye.classList.toggle("hidden");
  eyeSlash.classList.toggle("hidden");
}



function customDropdownHandler(el) {
  // const dropdown_container = document.getElementById(selector);
  // dropdown.classList.toggle("hidden");
  let optionContainer = el.querySelector('.dropdown_option_container');
  let valueContainer = el.querySelector('.dropdown_value_container');


  optionContainer.classList.toggle("max-h-[200px]");
  optionContainer.classList.toggle("opacity-100");

  console.log(optionContainer, valueContainer)
}


function selectOptionFromCustomDropdown(el){
  console.log(el)
}