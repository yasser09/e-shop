document.addEventListener("DOMContentLoaded", function () {
    // Fetch country data from REST Countries API and populate dropdown
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const countrySelect = document.getElementById('countrycode');

            // Iterate over each country data
            data.forEach(country => {
                const countryCode = country.cca2;
                const countryName = country.name.common;
                const flagIconClass = `flag-icon flag-icon-${countryCode.toLowerCase()}`;

                // Create option element
                const option = document.createElement('option');
                option.value = countryCode;
                option.dataset.country = countryCode;
                option.dataset.countryCode = `+${country.callingCodes[0]}`;
                option.classList.add('flag-icon', `flag-icon-${countryCode.toLowerCase()}`);
                option.textContent = `${countryName} (+${country.callingCodes[0]})`;

                // Append option to select
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching country data:', error));
});
