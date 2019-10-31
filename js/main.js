// INITIALIZE AND ADD THE MAP
function initMap() {
  // YOUR LOCATION
  const loc = { lat: 6.444550, lng: 7.490180 };
  // CENTERED MAP ON LOCATION
  const map = new google.maps.Map(document.querySelector('.map')
    , {
      zoom: 14,
      center: loc
    });
  // THE MARKER, POSITIONED AT LOCATION
  const marker = new google.maps.Marker({ position: loc, map: map });
}


// STICKY MENU BACKGROUND
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
})

// SMOOTH SCROLLING
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});