fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => renderTable(data));

    // Fetch data using async/await
    async function fetchDataAsync() {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const data = await response.json();
      renderTable(data);
    }

    // Render table
    function renderTable(data) {
      const tableBody = document.getElementById('cryptoBody');
      tableBody.innerHTML = ''; // Clear existing data

      data.forEach(coin => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = coin.name;
        row.insertCell(1).innerText = coin.id;
        row.insertCell(2).innerHTML = `<img src="${coin.image}" alt="${coin.name}" width="30">`;
        row.insertCell(3).innerText = coin.symbol;
        row.insertCell(4).innerText = coin.current_price;
        row.insertCell(5).innerText = coin.total_volume;
      });
    }

    // Search function (dummy function, needs implementation)
    function search() {
      alert('Implement search functionality');
    }

    // Sort function (dummy function, needs implementation)
    function sort() {
      alert('Implement sorting functionality');
    }
