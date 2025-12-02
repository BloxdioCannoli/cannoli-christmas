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

  function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  const codebox = document.getElementById("codebox")
  const codetitle = document.getElementById("codetitle")
  const codedesc = document.getElementById("codedesc")
  const copycode = document.getElementById("copycode")
  const video = document.getElementById("video")

  const daynum = window.location.href.split("?")[1]

  video.href=code[daynum-1].url
  codebox.style.display="none"
  
  if (daynum && isNumeric(daynum) && daynum >= 1 && daynum <= 31) {
    codetitle.innerHTML = `${code[daynum-1].name != "" ? code[daynum-1].name : "???"} | Day #${daynum}`

    codedesc.innerHTML = `
    ${code[daynum-1].desc != "" ? `${code[daynum-1].desc}` : "Check back later for the name, description, video, and code!"}
    `

    codebox.innerHTML = `
/*
Cannoli Christmas 2025, Code #${daynum}<br>
Credit to Bloxdio Cannoli on YT
*/
${code[daynum-1].code}
    `

    codebox.style.display="none"

    copycode.onclick = async function() {
      /*try {
        await navigator.clipboard.writeText(codebox.innerHTML.replaceAll("<br>", ""));
        alert("Code copied!");
      } catch (err) {
        alert("Failure to copy:", err);
      }*/
      window.open(code[daynum-1].copycode)
    }
  } else {
    window.open("https://bloxdiocannoli.github.io/cannoli-christmas/", "_parent")
  }
}

code = [
  {
    code: document.getElementById("day1").innerHTML,
    url: "https://www.youtube.com/shorts/kDvezB_fhB8",
    name: "Snow Spawner",
    desc: "Spawn snow with a magic snow wand! See the video for more details.",
    copycode: "https://github.com/BloxdioCannoli/cannoli-christmas/blob/main/codes.md#day-1"
  }, // 1
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 2
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 3
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 4
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 5
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 6
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 7
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 8
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 9
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 10
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 11
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 12
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 13
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 14
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 15
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 16
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 17
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 18
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 19
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 20
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 21
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 22
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 23
  {
    code: ``,
    url: "",
    name: "",
    desc: "",
  }, // 24
]
