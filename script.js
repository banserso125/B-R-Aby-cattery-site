function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

<script>
fetch('/content.json')
  .then(res => res.json())
  .then(data => {
    if (data.hero_title) document.getElementById('hero-title').innerText = data.hero_title;
    if (data.hero_subtitle) document.getElementById('hero-subtitle').innerText = data.hero_subtitle;
    if (data.hero_image) document.getElementById('hero-image').src = data.hero_image;
    if (data.kitten_text) document.getElementById('kitten-text').innerText = data.kitten_text;

    if (data.cats && Array.isArray(data.cats)) {
      const wrap = document.getElementById('cats-container');
      wrap.innerHTML = '';
      data.cats.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'warm-card group p-3';
        div.innerHTML = `
          <div class="aspect-[3/4] overflow-hidden rounded-[1.5rem]">
            <img src="${cat.image}" class="w-full h-full object-cover" />
          </div>
          <div class="text-center font-serif text-xl mt-2">${cat.name}</div>
        `;
        wrap.appendChild(div);
      });
    }
  });
</script>

