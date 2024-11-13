
  // Combined data for rivers and waterfalls
  const items = [
    { name: 'Amazon River', type: 'river', image: 'https://via.placeholder.com/80?text=Amazon', map: 'https://www.google.com/maps?q=Amazon+River' },
    { name: 'Nile River', type: 'river', image: 'https://via.placeholder.com/80?text=Nile', map: 'https://www.google.com/maps?q=Nile+River' },
    { name: 'Yangtze River', type: 'river', image: 'https://via.placeholder.com/80?text=Yangtze', map: 'https://www.google.com/maps?q=Yangtze+River' },
    { name: 'Mississippi River', type: 'river', image: 'https://via.placeholder.com/80?text=Mississippi', map: 'https://www.google.com/maps?q=Mississippi+River' },
    { name: 'Yenisei River', type: 'river', image: 'https://via.placeholder.com/80?text=Yenisei', map: 'https://www.google.com/maps?q=Yenisei+River' },
    { name: 'Yellow River', type: 'river', image: 'https://via.placeholder.com/80?text=Yellow', map: 'https://www.google.com/maps?q=Yellow+River' },
    { name: 'Ob River', type: 'river', image: 'https://via.placeholder.com/80?text=Ob', map: 'https://www.google.com/maps?q=Ob+River' },
    { name: 'Paraná River', type: 'river', image: 'https://via.placeholder.com/80?text=Parana', map: 'https://www.google.com/maps?q=Parana+River' },
    { name: 'Congo River', type: 'river', image: 'https://via.placeholder.com/80?text=Congo', map: 'https://www.google.com/maps?q=Congo+River' },
    { name: 'Amur River', type: 'river', image: 'https://via.placeholder.com/80?text=Amur', map: 'https://www.google.com/maps?q=Amur+River' },
    { name: "Angel Falls, Venezuela", type: 'waterfall', description: "The world's highest uninterrupted waterfall...", mapLink: "https://www.google.com/maps?q=Angel+Falls,+Venezuela" },
    { name: "Niagara Falls, USA/Canada", type: 'waterfall', description: "Famous for its beauty and hydroelectric power...", mapLink: "https://www.google.com/maps?q=Niagara+Falls,+USA" },
    { name: "Iguazu Falls, Argentina/Brazil", type: 'waterfall', description: "A UNESCO World Heritage site...", mapLink: "https://www.google.com/maps?q=Iguazu+Falls,+Argentina" },
    { name: "Victoria Falls, Zambia/Zimbabwe", type: 'waterfall', description: "Known as 'The Smoke That Thunders'...", mapLink: "https://www.google.com/maps?q=Victoria+Falls,+Zambia" },
    { name: "Yosemite Falls, USA", type: 'waterfall', description: "One of the tallest waterfalls in North America...", mapLink: "https://www.google.com/maps?q=Yosemite+Falls,+USA" },
    { name: "Plitvice Waterfalls, Croatia", type: 'waterfall', description: "Part of the Plitvice Lakes National Park...", mapLink: "https://www.google.com/maps?q=Plitvice+Waterfalls,+Croatia" },
    { name: "Ban Gioc-Detian Falls, Vietnam/China", type: 'waterfall', description: "A spectacular waterfall on the border...", mapLink: "https://www.google.com/maps?q=Ban+Gioc+Falls,+Vietnam" },
    { name: "Sutherland Falls, New Zealand", type: 'waterfall', description: "One of the tallest waterfalls in the world...", mapLink: "https://www.google.com/maps?q=Sutherland+Falls,+New+Zealand" },
    { name: "Jog Falls, India", type: 'waterfall', description: "Known for its four distinct cascades...", mapLink: "https://www.google.com/maps?q=Jog+Falls,+India" },
    { name: "Kaieteur Falls, Guyana", type: 'waterfall', description: "One of the largest single-drop waterfalls...", mapLink: "https://www.google.com/maps?q=Kaieteur+Falls,+Guyana" }
  ];

  // Function to render the results on the page
  function renderItems(filteredItems) {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
    
    if (filteredItems.length > 0) {
      filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        if (item.type === 'river') {
          itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="details">
              <div class="name">${item.name}</div>
              <a href="${item.map}" target="_blank" class="map-link">View on Map</a>
            </div>
          `;
        } else {
          itemElement.innerHTML = `
            <strong>${item.name}</strong><br>
            ${item.description}<br>
            <a href="${item.mapLink}" target="_blank" class="map-link">View on Map</a>
          `;
        }
        resultList.appendChild(itemElement);
      });
      resultList.style.display = 'block';
    } else {
      resultList.style.display = 'none';
    }
  }

  // Filter function for searching rivers and waterfalls
  function filterItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchInput));
    renderItems(filteredItems);
  }

  // Initial rendering of items (empty initially)
  renderItems([]);
