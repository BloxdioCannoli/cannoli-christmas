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

  const daynum = window.location.href.split("?")[1]
  if (daynum && isNumeric(daynum) && daynum >= 1 && daynum <= 31) {
    codetitle.innerHTML = `${code[daynum-1].name != "" ? code[daynum-1].name : "???"} | Day #${daynum}`

    codedesc.innerHTML = `
    ${code[daynum-1].desc != "" ? code[daynum-1].desc : "Check back later for the name, description, video, and code!"}
    `

    codebox.innerHTML = `
/*
Cannoli Christmas 2025, Code #${daynum}<br>
Credit to Bloxdio Cannoli on YT
*/
${code[daynum-1].code}
    `

    copycode.onclick = async function() {
      try {
        await navigator.clipboard.writeText(codebox.innerHTML.replaceAll("<br>", ""));
        alert("Code copied!");
      } catch (err) {
        alert("Failure to copy:", err);
      }
    }
  } else {
    window.open("https://bloxdiocannoli.github.io/cannoli-christmas/", "_parent")
  }
}

code = [
  {
    code: `/*
Cannoli Christmas Day 1

All code by Bloxdio Cannoli on YT
*/

// Gives every player that joins a special wand!
function onPlayerJoin(myId) {
api.giveItem(myId, "Stick", 1, {

customDisplayName: "Wand of Snow",
customDescription: "Click on a block while holding me to get it snow!",

customAttributes: {
enchantmentTier: "Tier 5",
}

})
}

// Set to a number to have a max amount of snowspawns. This can help with lag.
maxSnow=null

// Tweak these values to change the snow spawning frequency.
maxconsec=1; // Max amount of consecutive ticks.
waitfor=2; // Time to wait after 'maxconsec' consecutive ticks.

defaultsnow={dir1: [-0.05,-0.3,0.05],dir2: [0.05,-0.8,-0.05],pos1: [0, 0, 0],pos2: [0 + 1, 0 + 1,0 + 1],texture: "square_particle",minLifeTime:5,maxLifeTime:5,minEmitPower:3,maxEmitPower:2,minSize:0.1,maxSize:0.1,manualEmitCount: 20,gravity: [0, 0, 0],colorGradients: [{timeFraction: 0,minColor: [255, 255, 255, 1],maxColor: [200, 200, 255, 1],},],velocityGradients: [{timeFraction: 0,factor: 1,factor2: 1,},],blendMode: 1,};input={};wandPos1={};wandPos2={};queuedSnowCoords=[];queueNum=0;function onPlayerClick(myId, rc) {facingBlockCoords=api.getPlayerTargetInfo(myId)?.position;if (facingBlockCoords) {if (!rc) {wandPos1[myId]=facingBlockCoords;api.sendMessage(myId, \`Set pos1 to ${facingBlockCoords}\`)} else {wandPos2[myId]=facingBlockCoords;api.sendMessage(myId, \`Set pos2 to ${facingBlockCoords}\`)};if (wandPos1[myId]&&wandPos2[myId]) {input[myId]={};input[myId].txt="snowY";input[myId].pos1=[...wandPos1[myId]];input[myId].pos2=[...wandPos2[myId]];wandPos1[myId]=null;wandPos2[myId]=null;api.sendMessage(myId, \`Please say (in chat) how many blocks above the selected space you would like to spawn the snow.\`);}}};function onPlayerChat(myId, txt) {if (input[myId]?.txt=="snowY") {if (!isNaN(txt)) {let ipos1=input[myId].pos1;let ipos2=input[myId].pos2;let iy=Number(txt);ipos1[1]=ipos1[1]+iy;ipos2[1]=ipos2[1]+iy;queuedSnowCoords.push([input[myId].pos1, input[myId].pos2]);input[myId]=null;api.sendMessage(myId, \`Spawned snow!\`);return false;} else {api.sendMessage(myId, \`Please enter a number. "${txt}" is not valid.\`);return false;}}};consec=0;wait=0; function tick() { if (wait>0) {wait--;return}; if (consec>=maxconsec) {wait=(consec/maxconsec)*waitfor;consec=0}; consec++;if (queuedSnowCoords.length) {coords=queuedSnowCoords[queueNum];length=queuedSnowCoords.length;queueNum=(queueNum+1)%((maxSnow<length&&maxSnow) ? maxSnow : length);if (coords.length==2) {playSnow(coords[0], coords[1])} else {playSnow(coords, coords)}}};function playSnow(pos1, pos2) {let [x1, y1, z1]=pos1;let [x2, y2, z2]=pos2;defaultsnow.pos1=[x1,y1+2,z1];defaultsnow.pos2=[x2+1,y2+1.5,z2+1];defaultsnow.texture="generic_2";defaultsnow.minSize=0.5;defaultsnow.maxSize=0.5;defaultsnow.manualEmitCount=5;api.playParticleEffect(defaultsnow);defaultsnow.texture="square_particle";defaultsnow.minSize=0.1;defaultsnow.maxSize=0.1;defaultsnow.manualEmitCount=20;api.playParticleEffect(defaultsnow);};holding={};onInventoryUpdated=(myId) => {let held=api.getHeldItem(myId);holding[myId]=held?.attributes?.customDisplayName;if (holding[myId]=="Wand of Snow") {api.setClientOptions(myId, {canChange: false,cantChangeError: [{str: "Can't edit blocks while holding ", style: {color: "white"}},{str: "Wand of Snow", style: {color: "lightgray"}},]})} else {api.setClientOptions(myId, {canChange: true,cantChangeError: "Can't change here."})}}`,
    url: "https://www.youtube.com/shorts/kDvezB_fhB8",
    name: "Snow Spawner",
    desc: "Spawn snow with a magic snow wand! See the video for more details.",
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
