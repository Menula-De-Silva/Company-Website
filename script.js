// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }
  
  
  
  // Get the modal
  var modal = document.getElementById('id01');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  
  function myfuntion(){
      window.alert("You Sign In To The Page! Click Close To Close This");
      console.log("Sign in Sucess");
  }
  
  
  
  
  
  
  
  var modal = document.getElementById('id02');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  
  function mafunction(){
    window.alert("The Message Sented Sucessfully  To menuladesilva2008@gmail.com 💬💬💬");
    console.log("Message Sented To menuladesiva2008@gmail.com");
  }
  
  
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let radius = canvas.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 0.90
  setInterval(drawClock, 1000);
  
  function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
  }
  
  function drawFace(ctx, radius) {
    const grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  }
  
  function drawNumbers(ctx, radius) {
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(let num = 1; num < 13; num++){
      let ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
  }
  
  function drawTime(ctx, radius){
      const now = new Date();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
      //hour
      hour=hour%12;
      hour=(hour*Math.PI/6)+
      (minute*Math.PI/(6*60))+
      (second*Math.PI/(360*60));
      drawHand(ctx, hour, radius*0.5, radius*0.07);
      //minute
      minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
      drawHand(ctx, minute, radius*0.8, radius*0.07);
      // second
      second=(second*Math.PI/30);
      drawHand(ctx, second, radius*0.9, radius*0.02);
  }
  
  function drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }
  
  
  
  
  
  
  var WIDTH = window.innerWidth - 30,
      HEIGHT = window.innerHeight - 30;
   
  var angle = 45,
      aspect = WIDTH / HEIGHT,
      near = 0.1,
      far = 3000;
  
  var container = document.getElementById('con');
  
  var camera = new THREE.PerspectiveCamera(angle, aspect, near, far);
  camera.position.set(0, 0, 0);
  var scene = new THREE.Scene();
  
  var light = new THREE.SpotLight(0xFFFFFF, 1, 0, Math.PI / 2, 1);
  light.position.set(4000, 4000, 1500);
  light.target.position.set (1000, 3800, 1000);
  
  scene.add(light);
  
  var earthGeo = new THREE.SphereGeometry (30, 40, 400), 
      earthMat = new THREE.MeshPhongMaterial(); 
  
  // diffuse map
  earthMat.map = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/earthmap.jpg');
  
  // bump map
  earthMat.bumpMap = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/bump-map.jpg');
  earthMat.bumpScale = 8;
  
  var earthMesh = new THREE.Mesh(earthGeo, earthMat);
  earthMesh.position.set(-100, 0, 0); 
  earthMesh.rotation.y=5;
  
  scene.add(earthMesh);
  
  camera.lookAt( earthMesh.position );
  
  //renderer
  var renderer = new THREE.WebGLRenderer({antialiasing : true});
  renderer.setSize(WIDTH, HEIGHT);
  renderer.domElement.style.position = 'relative';
  
  container.appendChild(renderer.domElement);
  renderer.autoClear = false;
  renderer.shadowMapEnabled = true;
  
  function animate() {
     requestAnimationFrame(animate);
     render(); 
  }
  
  function render() {
     var clock = new THREE.Clock();
     var delta = clock.getDelta(); 
  
     earthMesh.rotation.y += 0.2 * delta;
     renderer.render(scene, camera);
  }
  
  animate();
  
  
  
  
  
  $(function(){
    $('.one form .btn').on('click',function(){ 
       $(this).parents('.one').animate({
            top : '-500px'
          },500);
      
                                            $(this).parents('.one').siblings('.two').
       animate({
            top : '0px'
          },500);
      return false;
    });
  
  $('.two .close').on('click',function(){
    $(this).parent().animate({
     top : '-500px'
    },500);
    
    $(this).parent().siblings('.one').animate({
     top : '0px'
    },500);
    return false;
   });
  });



function noti(){
  window.alert("Now You Can Get Updates From This Site")
}
