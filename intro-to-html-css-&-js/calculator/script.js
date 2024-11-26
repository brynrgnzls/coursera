function compute() {
  const p = document.getElementById("principal").value;
  const r = document.getElementById("rate").value;
  const y = document.getElementById("years").value;

  const principal = parseInt(p);
  const rate = parseFloat(r);
  const years = parseInt(y);

  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
  }
  const interest = (principal * rate * years) / 100;
  const amount = interest + principal;

  const resultElem = document.getElementById("result");
  const year = new Date().getFullYear() + years;

  resultElem.innerHTML = `If you deposit $${principal} \<br\> at interest rate of ${rate}  \<br\> Your will receive an amount of $${amount}, \<br\> in the year ${year} `;
}

function updateRate() {
  let ratevalElem = document.getElementById("rate");

  document.getElementById("rateval").textContent = ratevalElem.value;
}
