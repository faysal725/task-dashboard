function setPresentDay(id) {
  const el = document.getElementById(id);
  if (!el) return console.error('Element not found');

  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const year = today.getFullYear();

  el.textContent = `${day}/${month}/${year}`;
}


function swipeNextDate(id) {
  const el = document.getElementById(id);
  if (!el) return console.error('Element not found');

  const dateText = el.textContent.trim(); // e.g. "12/10/2025"
  const [day, month, year] = dateText.split('/').map(Number);

  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 1); // add one day

  const nextDay = String(date.getDate()).padStart(2, '0');
  const nextMonth = String(date.getMonth() + 1).padStart(2, '0');
  const nextYear = date.getFullYear();

  el.textContent = `${nextDay}/${nextMonth}/${nextYear}`;
}


function swipePreviousDate(id) {
  const el = document.getElementById(id);
  if (!el) return console.error('Element not found');

  const dateText = el.textContent.trim(); // e.g. "12/10/2025"
  const [day, month, year] = dateText.split('/').map(Number);

  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() - 1); // subtract one day

  const prevDay = String(date.getDate()).padStart(2, '0');
  const prevMonth = String(date.getMonth() + 1).padStart(2, '0');
  const prevYear = date.getFullYear();

  el.textContent = `${prevDay}/${prevMonth}/${prevYear}`;
}