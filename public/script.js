(function () {
  const paymentOptions = document.querySelectorAll(
    'input[name="payment-method"]'
  );
  const optionContainers = document.querySelectorAll('.payment-option');
  const blikDetails = document.getElementById('blik-details');
  const blikInput = document.getElementById('payment-blik');

  const setSelectedClass = (selected) => {
    optionContainers.forEach((container) => {
      const isSelected = container.contains(selected);
      container.classList.toggle('is-selected', isSelected);
    });
  };

  const updateBlikVisibility = (selected) => {
    if (!blikDetails || !blikInput) return;
    const isBlik = selected === blikInput;
    blikDetails.hidden = !isBlik;
    blikDetails.setAttribute('aria-hidden', String(!isBlik));
    blikInput.setAttribute('aria-expanded', String(isBlik));

    if (isBlik) {
      const blikCodeField = blikDetails.querySelector('#blik-code');
      if (blikCodeField instanceof HTMLInputElement) {
        blikCodeField.focus({ preventScroll: true });
      }
    }
  };

  paymentOptions.forEach((option) => {
    option.addEventListener('change', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      setSelectedClass(target);
      updateBlikVisibility(target);
    });
  });

  const initiallyChecked = document.querySelector(
    'input[name="payment-method"]:checked'
  );
  if (initiallyChecked instanceof HTMLInputElement) {
    setSelectedClass(initiallyChecked);
    updateBlikVisibility(initiallyChecked);
  }
})();
