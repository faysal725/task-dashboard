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