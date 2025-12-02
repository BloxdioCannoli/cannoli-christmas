> [!Note]
> **Credit is appreciated.** To credit, mention _Bloxdio Cannoli on YT_ in the video title/description/pinned comment or any other visible place you'd like!

# Day 1
Video link: https://youtube.com
```
/*
Cannoli Christmas Day 1

All code by Bloxdio Cannoli on YT
*/

// Set to a number to have a max amount of snowspawns. This can help with lag.
maxSnow=null

// Tweak these values to change the snow spawning frequency.
maxconsec=1; // Max amount of consecutive ticks.
waitfor=2; // Time to wait after `maxconsec` consecutive ticks.

defaultsnow={dir1: [-0.05,-0.3,0.05],dir2: [0.05,-0.8,-0.05],pos1: [0, 0, 0],pos2: [0 + 1, 0 + 1,0 + 1],texture: "square_particle",minLifeTime:5,maxLifeTime:5,minEmitPower:3,maxEmitPower:2,minSize:0.1,maxSize:0.1,manualEmitCount: 20,gravity: [0, 0, 0],colorGradients: [{timeFraction: 0,minColor: [255, 255, 255, 1],maxColor: [200, 200, 255, 1],},],velocityGradients: [{timeFraction: 0,factor: 1,factor2: 1,},],blendMode: 1,};input={};wandPos1={};wandPos2={};queuedSnowCoords=[];queueNum=0;function onPlayerClick(myId, rc) {facingBlockCoords=api.getPlayerTargetInfo(myId)?.position;if (facingBlockCoords) {if (!rc) {wandPos1[myId]=facingBlockCoords;api.sendMessage(myId, `Set pos1 to ${facingBlockCoords}`)} else {wandPos2[myId]=facingBlockCoords;api.sendMessage(myId, `Set pos2 to ${facingBlockCoords}`)};if (wandPos1[myId]&&wandPos2[myId]) {input[myId]={};input[myId].txt="snowY";input[myId].pos1=[...wandPos1[myId]];input[myId].pos2=[...wandPos2[myId]];wandPos1[myId]=null;wandPos2[myId]=null;api.sendMessage(myId, `Please say (in chat) how many blocks above the selected space you would like to spawn the snow.`);}}};function onPlayerChat(myId, txt) {if (input[myId]?.txt=="snowY") {if (!isNaN(txt)) {let ipos1=input[myId].pos1;let ipos2=input[myId].pos2;let iy=Number(txt);ipos1[1]=ipos1[1]+iy;ipos2[1]=ipos2[1]+iy;queuedSnowCoords.push([input[myId].pos1, input[myId].pos2]);input[myId]=null;api.sendMessage(myId, `Spawned snow!`);return false;} else {api.sendMessage(myId, `Please enter a number. "${txt}" is not valid.`);return false;}}};consec=0;wait=0; function tick() { if (wait>0) {wait--;return}; if (consec>=maxconsec) {wait=(consec/maxconsec)*waitfor;consec=0}; consec++;if (queuedSnowCoords.length) {coords=queuedSnowCoords[queueNum];length=queuedSnowCoords.length;queueNum=(queueNum+1)%((maxSnow<length&&maxSnow) ? maxSnow : length);if (coords.length==2) {playSnow(coords[0], coords[1])} else {playSnow(coords, coords)}}};function playSnow(pos1, pos2) {let [x1, y1, z1]=pos1;let [x2, y2, z2]=pos2;defaultsnow.pos1=[x1,y1+2,z1];defaultsnow.pos2=[x2+1,y2+1.5,z2+1];defaultsnow.texture="generic_2";defaultsnow.minSize=0.5;defaultsnow.maxSize=0.5;defaultsnow.manualEmitCount=5;api.playParticleEffect(defaultsnow);defaultsnow.texture="square_particle";defaultsnow.minSize=0.1;defaultsnow.maxSize=0.1;defaultsnow.manualEmitCount=20;api.playParticleEffect(defaultsnow);};holding={};onInventoryUpdated=(myId) => {let held=api.getHeldItem(myId);holding[myId]=held?.attributes?.customDisplayName;if (holding[myId]=="Wand of Snow") {api.setClientOptions(myId, {canChange: false,cantChangeError: [{str: "Can't edit blocks while holding ", style: {color: "white"}},{str: "Wand of Snow", style: {color: "lightgray"}},]})} else {api.setClientOptions(myId, {canChange: true,cantChangeError: "Can't change here."})}}
```

# Day 2
Video link: https://youtube.com
```
// no code yet!
```

# Day 3
Video link: https://youtube.com
```
// no code yet!
```

# Day 4
Video link: https://youtube.com
```
// no code yet!
```

# Day 5
Video link: https://youtube.com
```
// no code yet!
```

# Day 6
Video link: https://youtube.com
```
// no code yet!
```

# Day 7
Video link: https://youtube.com
```
// no code yet!
```

# Day 8
Video link: https://youtube.com
```
// no code yet!
```

# Day 9
Video link: https://youtube.com
```
// no code yet!
```

# Day 10
Video link: https://youtube.com
```
// no code yet!
```

# Day 11
Video link: https://youtube.com
```
// no code yet!
```

# Day 12
Video link: https://youtube.com
```
// no code yet!
```

# Day 13
Video link: https://youtube.com
```
// no code yet!
```

# Day 14
Video link: https://youtube.com
```
// no code yet!
```

# Day 15
Video link: https://youtube.com
```
// no code yet!
```

# Day 16
Video link: https://youtube.com
```
// no code yet!
```

# Day 17
Video link: https://youtube.com
```
// no code yet!
```

# Day 18
Video link: https://youtube.com
```
// no code yet!
```

# Day 19
Video link: https://youtube.com
```
// no code yet!
```

# Day 20
Video link: https://youtube.com
```
// no code yet!
```

# Day 21
Video link: https://youtube.com
```
// no code yet!
```

# Day 22
Video link: https://youtube.com
```
// no code yet!
```

# Day 23
Video link: https://youtube.com
```
// no code yet!
```

# Day 24
Video link: https://youtube.com
```
// no code yet!
```
