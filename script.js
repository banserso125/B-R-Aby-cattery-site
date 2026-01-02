function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

fetch('/content.json')
  .then(res => res.json())
  .then(data => {
    // Hero
    document.getElementById('hero-title').textContent = data.hero_title;
    document.getElementById('hero-subtitle').textContent = data.hero_subtitle;
    document.getElementById('hero-image').src = data.hero_image;

    // Cats
    const catsContainer = document.getElementById('cats-container');
    catsContainer.innerHTML = '';
    data.cats.forEach(cat => {
      const div = document.createElement('div');
      div.className = 'cat-card';
      div.innerHTML = `
        <img src="${cat.image}" alt="${cat.name}">
        <p>${cat.name}</p>
      `;
      catsContainer.appendChild(div);
    });

    // Kittens text
    document.getElementById('kitten-text').textContent = data.kitten_text;
  });
