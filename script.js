document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value, 10);
  const month = parseInt(document.getElementById("month").value, 10);
  const year = parseInt(document.getElementById("year").value, 10);
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if (!day || !month || !year || !gender) {
    alert("Please fill in all fields.");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Please enter a valid month between 1 and 12.");
    return;
  }

  const maxDay = new Date(year, month, 0).getDate();
  if (day < 1 || day > maxDay) {
    alert(
      `Invalid day for the given month. ${month}/${year} has only ${maxDay} days.`
    );
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const dayOfWeek = birthDate.getDay();

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const akanName =
    gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  const resultText = `You were born on a ${days[dayOfWeek]}. Your Akan name is ${akanName}.`;

  const resultEl = document.getElementById("result");
  resultEl.textContent = resultText;
  resultEl.style.opacity = "0";
  setTimeout(() => {
    resultEl.style.opacity = "1";
  }, 10);
});
