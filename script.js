const radios = document.querySelectorAll('input[name="unit"]');
const total = document.getElementById('total-price');
const sizeOptions = ['S', 'M', 'L', 'XL'];
const colorOptions = ['Black', 'White', 'Red', 'Blue'];

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    const value = parseFloat(radio.value);
    total.textContent = `$${value.toFixed(2)} USD`;

    document.querySelectorAll('.extra-options').forEach((el) => {
      el.innerHTML = '';
      el.classList.remove('active');
    });

    const units = parseInt(radio.dataset.units);
    const container = radio.closest('.card').querySelector('.extra-options');
    container.classList.add('active');


    const labelRow = document.createElement('div');
    labelRow.className = 'label-row';

    const sizeLabel = document.createElement('span');
    sizeLabel.textContent = 'Size';

    const colorLabel = document.createElement('span');
    colorLabel.textContent = 'Colour';

    labelRow.appendChild(sizeLabel);
    labelRow.appendChild(colorLabel);
    container.appendChild(labelRow);

    for (let i = 1; i <= units; i++) {
      const row = document.createElement('div');
      row.className = 'options-row';

      const numLabel = document.createElement('label');
      numLabel.textContent = `#${i}`;
      numLabel.style.fontWeight = 'bold';
      numLabel.style.marginRight = '8px';
      numLabel.style.width = '30px';

      const sizeSelect = document.createElement('select');
      sizeOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        sizeSelect.appendChild(option);
      });

      const colorSelect = document.createElement('select');
      colorOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        colorSelect.appendChild(option);
      });

      row.appendChild(numLabel);
      row.appendChild(sizeSelect);
      row.appendChild(colorSelect);
      container.appendChild(row);
    }
  });
});
