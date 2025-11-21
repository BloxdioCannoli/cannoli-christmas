window.onload = () => {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  const width = canvas.width = window.innerWidth
  const height = canvas.height = window.innerHeight
  const centerX = width / 2
  const centerY = height / 2

  const rectHeight = 100;
  const speed = 0.05;
  const rotation = 25;


  let offset = -centerY;

  const rootStyles = getComputedStyle(document.documentElement);

  const primary = rootStyles.getPropertyValue("--primary");
  const secondary = rootStyles.getPropertyValue("--secondary");


  colors = [primary, secondary]

  ctx.rotate((Math.PI / 180) * rotation)
  ctx.translate(centerX, centerY)

  setInterval(function() {
    ctx.clearRect(0 - centerX, 0 - centerY, width + centerX, height - centerY)

    for (let r = -1; r <= (height + -offset) / rectHeight; r++) {
      ctx.fillStyle = colors[(r + 1) % colors.length];
      ctx.fillRect(0 - centerX, rectHeight * r - -offset - centerY, width + centerX, rectHeight + centerY);
    }

    offset -= speed;

  }, 1)

  const calendar = document.getElementById("calendar")
  for (let cb = 0; cb < 24; cb++) {
    calendar.innerHTML += `
  <div class="calander-box">
    Day ${cb+1}
  </div>
  `
  }

  const spec = window.location.href.split("?")[1]?.split(",")
  alert(spec)
  if (spec.includes("hideteaser")) {
    document.getElementById("teaser").style.display="none"
  }
}
