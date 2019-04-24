//SEANFINN
(function(){
  "use strict";
  window.onload = function(){
    let welcome = document.getElementById("welcome");
    let ourstory = document.getElementById("ourstory");
    let schedule = document.getElementById("schedule");
    let rpmap = document.getElementById("rpmap");
    let gallery = document.getElementById("gallery");
    let rsvp = document.getElementById("rsvp");
    let links = document.getElementById("links");



    let top = welcome.offsetTop;
    window.scrollTo(10,top-50);


    welcome.style.display = 'flex';
    ourstory.style.display = 'none';
    schedule.style.display = 'none';
    rpmap.style.display = 'none';
    gallery.style.display = 'none';
    rsvp.style.display = 'none';
    links.style.display = 'none';



    let homebutton = document.getElementById("HomeButton");
    let ourstorybutton = document.getElementById("OurStoryButton");
    let schedulebutton = document.getElementById("ScheduleButton");
    let rockypointmapbutton = document.getElementById("RockyPointMapButton");
    let gallerybutton = document.getElementById("GalleryButton");
    let rsvpbutton = document.getElementById("RSVPButton");
    let usefullinksbutton = document.getElementById("UsefulLinksButton");

    homebutton.onclick = showHide;
    ourstorybutton.onclick = showHide;
    schedulebutton.onclick = showHide;
    rockypointmapbutton.onclick = showHide;
    gallerybutton.onclick = showHide;
    rsvpbutton.onclick = showHide;
    usefullinksbutton.onclick = showHide;

    let submitButton = document.getElementById('submit');
    submitButton.onclick = submitClick;
    initCountDownTimer();
    initGallery();
    initMap();


  };

  /**
  jsdoc comment
  */
  function showHide(){
    let welcome = document.getElementById("welcome");
    let ourstory = document.getElementById("ourstory");
    let schedule = document.getElementById("schedule");
    let rpmap = document.getElementById("rpmap");
    let gallery = document.getElementById("gallery");
    let rsvp = document.getElementById("rsvp");
    let links = document.getElementById("links");

    welcome.style.display = 'none';
    ourstory.style.display = 'none';
    schedule.style.display = 'none';
    rpmap.style.display = 'none';
    gallery.style.display = 'none';
    rsvp.style.display = 'none';
    links.style.display = 'none';



    if (this['id'] == "HomeButton"){
      welcome.style.display = 'flex';
      let top = welcome.offsetTop;
      window.scrollTo(10,top-50);
    }
    else if (this['id'] == "OurStoryButton"){
      ourstory.style.display = 'flex';
      let top = ourstory.offsetTop;
      window.scrollTo(10,top-50);
    }
    else if (this['id'] == "ScheduleButton"){
      schedule.style.display = 'flex';
      let top = schedule.offsetTop;
      window.scrollTo(10,top-50);
    }
    else if (this['id'] == "RockyPointMapButton"){
      rpmap.style.display = 'flex';
      let top = rpmap.offsetTop;
      window.scrollTo(0,top -50);
    }
    else if (this['id'] == "GalleryButton"){
      gallery.style.display = 'flex';
      let top = gallery.offsetTop;
      window.scrollTo(10,top-50);
    }
    else if (this['id'] == "RSVPButton"){
      rsvp.style.display = 'flex';
      let top = rsvp.offsetTop;
      window.scrollTo(10,top-50);
    }
    else if (this['id'] == "UsefulLinksButton"){
      links.style.display = 'flex';
      let top = links.offsetTop;
      window.scrollTo(10,top-50);
    }



  }

  /**
  jsdoc comment
  */
  function initMap(){
    let rockypoint = {lat: 31.3268, lng: -113.5312};
    let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: rockypoint}
    );
    let marker = new google.maps.Marker(
      {position: rockypoint, map: map}
    );
  }

  /**
  jsdoc comment
  */
  function submitClick(){
    let form = document.getElementById("form");
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let plusfirst = document.getElementById("plusfirst");
    let pluslast = document.getElementById("pluslast");
    let themessage = document.getElementById("message");


    const message = {
      firstname: firstname.value,
      lastname: lastname.value,
      phone: phone.value,
      email: email.value,
      plusfirst: plusfirst.value,
      pluslast: pluslast.value,
      message: themessage.value
    };

    const fetchOptions = {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body : JSON.stringify(message)
    };

    let url = "http://weddingappseanfinn.herokuapp.com/";
    fetch(url, fetchOptions)
    .then(checkStatus)
    .then(function(responseText){
      console.log(responseText);
    });
    form.innerHTML = '';
    let a = document.createElement("h3");
    a.innerHTML = "Thank you for your response!";
    form.appendChild(a);

  }
  let slideIndex = 0;
  /**
  JSDOCCOMMENT
  */
  function initGallery(){
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1;}
    x[slideIndex-1].style.display = "block";
    setTimeout(initGallery, 2000); // Change image every 2 seconds
  }
  /**
  jsdoc comment
  */
  function initCountDownTimer() {
    let countDownDate = new Date("Oct 19, 2019 12:00:00").getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {

      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("countdowntimer").innerHTML = days + " : " + hours + " : "
      + minutes + " : " + seconds;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdowntimer").innerHTML = "EXPIRED";
      }
    }, 1000);

  }
  /**
  jsdoc comment
  * @param {string} response the response.
  * @returns {void}
  */
  function checkStatus(response){
    let feedback = document.getElementById("feedback");

    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    else if (response.status == 404) {
      feedback.innerHTML = "sorry, couldnt find that page";
      return Promise.reject(new Error("sorry, couldnt find that page"));
    }
    else if (response.status == 410){
      let msg = " The page you have requested no longer exists at that url.";
      feedback.innerHTML = msg;
      return Promise.reject(new Error(response.status+": "+response.statusText));
    }
    else {
      feedback.innerHTML = "No Messages To Display";
      return Promise.reject(new Error(response.status+": "+response.statusText));
    }
  }
})();
