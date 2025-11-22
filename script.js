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

  const currentDay = 1

  const special = rootStyles.getPropertyValue("--special");

  const specialDays=[4, 8, 12, 16, 20, 24]


  const calendar = document.getElementById("calendar")
  for (let cb = 0; cb < 24; cb++) {
    let isActive = (currentDay > cb)
    let isCurrent = (currentDay == cb+1)
    let isSpecial = (specialDays.includes(cb+1))
    
    calendar.insertAdjacentHTML("beforeend", `
  <div class="calendar-box">
    <span class="day-display">Day ${cb + 1}</span>
      <div class="cropped-box">
        <div class="image-cover"></div>
        <img height="250" alt="Screenshot 2025-11-21 at 1 13 08 PM" src="https://github-production-user-asset-6210df.s3.amazonaws.com/229039173/517528065-4a23be0c-ffda-4016-9599-3ae7ed71a0c3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251122T153849Z&X-Amz-Expires=300&X-Amz-Signature=b3e2667953f3bb21174217a5dd20486b19b7980a49b02b488e2147b18a0842e7&X-Amz-SignedHeaders=host" />
      </div>
  </div>
  `)
    document.getElementsByClassName("cropped-box")[cb].style.filter = (currentDay > cb + 1) ? `blur(0)` : `blur(${(cb + 1) - currentDay}px)`

    if (!isActive) {
      document.getElementsByClassName("calendar-box")[cb].style.cursor = "not-allowed"
      document.getElementsByClassName("cropped-box")[cb].style.filter = `blur(${((cb + 1) - currentDay-3 <= 9) ? (cb + 1) - currentDay +3 : 9}px)`
      document.getElementsByClassName("cropped-box")[cb].style.backgroundColor = `rgba(0,0,0,0.5)`
      document.getElementsByClassName("image-cover")[cb].style.background = `rgba(0, 0, 0, 0.3)`
      if (isSpecial) {
        //document.getElementsByClassName("image-cover")[cb].style.background = `rgba(150, 150, 0, 0.3)`
        document.getElementsByClassName("day-display")[cb].style.fontWeight="600"
        document.getElementsByClassName("day-display")[cb].style.fontSize="15px"
      }
    } else {
      document.getElementsByClassName("calendar-box")[cb].style.cursor = "pointer"
      document.getElementsByClassName("cropped-box")[cb].style.filter = `blur(0)`
      document.getElementsByClassName("cropped-box")[cb].style.backgroundColor = `rgba(255,255,255,0.5)`
      document.getElementsByClassName("image-cover")[cb].style.background = `rgba(255, 255, 255, 0.1)`

      document.getElementsByClassName("calendar-box")[cb].onclick=function() {window.open(`https://bloxdiocannoli.github.io/cannoli-christmas/codes/codes?${cb+1}`)}

      if (isSpecial) {
        //document.getElementsByClassName("image-cover")[cb].style.background = `rgba(255, 255, 0, 0.3)`
        document.getElementsByClassName("day-display")[cb].style.fontWeight="600"
        document.getElementsByClassName("day-display")[cb].style.fontSize="15px"
      }

      if (isCurrent) {
        document.getElementsByClassName("day-display")[cb].style.textDecoration="underline"
        
      }
    }
  }

  const spec = window.location.href.split("?")[1]?.split(",")
  if (spec.includes("hideteaser")) {
    document.getElementById("teaser").style.display="none"
  }
}
