const lights = document.querySelectorAll('.light');
let currentLight = 0;

function changeLight() {
  lights.forEach((light, index) => {
    light.classList.remove('active');
    if (index === currentLight) {
      light.classList.add('active');
    }
  });
  
  currentLight = (currentLight + 1) % lights.length;
}

setInterval(changeLight, 1500);
