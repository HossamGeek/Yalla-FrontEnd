/*$(document).ready(function(){

});*/

(function ($,document,window) {
$(function () {


  $('.pic1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: false,
    nextArrow:false,
    infinite: true,
    fade: true,
    cssEase: 'linear'
  });

  $('#show-login').click(function () {
    if($(".login-page").css('display') === "none"){
      $(".login-page").css('display','block');
    }else{
      $(".login-page").css('display','none');
    }
  })

  window.addEventListener('load', doitfirst);
  function doitfirst() {
      map = document.getElementById('map');
      mapLable = document.getElementById('mapLable');

  }
/*  sumit(){
    alert("o0oki9ki9");
  }*/
  function getmyposition() {
      // 1- check availaiblity of geolocation in navigator
      if(navigator.geolocation)
      {
          // get permission
          navigator.geolocation.getCurrentPosition(getposition, errorhandeler);
      }
      else
      {
          // geolocation not availaible
          map.innerText = 'Sorry , Update your brwoser and try Agian !!';
      }
  }
  function getposition(position) {

      // console.log(position);
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      // 1- create LATLON google object
      mylocation = new google.maps.LatLng(lat, lon);
      // 2- create attributes for returned image
      myattributes = { zoom: 17, center: mylocation , mapTypeId: google.maps.MapTypeId.ROADMAP};
      var myimg = new Image();
      myimg.src = new google.maps.Map(map, myattributes);
      var maps = new google.maps.Map(map, myattributes);
      // TestMarker();
      map.appendChild(myimg);
         var marker = new google.maps.Marker({
          position:mylocation,
            map: maps,
            draggable: true,
          title:"Hello World!"
      });
        marker.addListener('drag', function() {
             mapLable.value=marker.getPosition();
          });




  }
  function errorhandeler(error)
  {
      switch(error.code)
      {
          case error.PERMISSION_DENIED:
              map.innerText = 'PERMISSION_DENIED';
              break;
          case error.POSITION_UNAVAILABLE:
              map.innerText = 'POSITION_UNAVAILABLE';
              break;
          case error.TIMEOUT:
              map.innerText = 'TIMEOUT';
              break;
          case error.UNKOWN_ERROR:
               map.innerText = 'UNKOWN_ERROR';
              break;
      }
  }


  function TestMarker() {
  mylocation= new google.maps.LatLng(lat, lon);
  addMarker(mylocation);
  }





});
})(window.jQuery,document,window);
