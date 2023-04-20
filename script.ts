const totalPriceInput: HTMLInputElement | null = document.getElementById("total-price");
const vatPrice: HTMLInputElement | null = document.getElementById("vat-price");
const priceWithoutVAT: HTMLInputElement | null = document.getElementById("price-without-vat");
const submitButton: HTMLButtonElement | null = document.getElementById("submit");
const resetButton: HTMLButtonElement | null = document.getElementById("reset");

function calculateVAT(): void {
  const vatPercent: number = document.getElementById("vat-percent").value;
  const totalPrice: number = parseFloat(totalPriceInput.value);
  if (!totalPrice) {
    alert("Παρακαλώ συμπληρώστε μια έγκυρη τιμή!");
    return;
  }
  const vatRate: number = parseFloat(vatPercent);
  const vat: number = totalPrice * vatRate;
  const priceWithoutVat: number = totalPrice - vat;
  vatPrice.value = vat.toFixed(2);
  priceWithoutVAT.value = priceWithoutVat.toFixed(2);
}

submitButton.addEventListener("click", calculateVAT);

resetButton.addEventListener("click", function(): void {
  totalPriceInput.value = '';
  vatPrice.value = '';
  priceWithoutVAT.value = '';
  document.getElementById("vat-percent").value = 0.06;
});