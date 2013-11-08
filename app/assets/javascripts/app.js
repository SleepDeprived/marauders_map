var App = App || {}

$(document).ready(function(){
  var $form = $("#new_user");
  $form.on("submit", function(e){
    e.preventDefault();
    App.createUser();
  });

  App.makeMap();

  $("#drop-pin").on("click", function(e){
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });

    marker.setMap(map);

    var current_bounds = map.getBounds();
    var marker_pos = marker.getPosition();

    map.setCenter(marker_pos);

    // if( !current_bounds.contains( marker_pos ) ){

    //   var new_bounds = current_bounds.extend( marker_pos );
    //   map.fitBounds( new_bounds );
    // }

  })


})

App.createUser = function() {

  var userName = $("#user_name").val()
  var userEmail = $("#user_email").val()

  var newUser = {
    user: {
      name: userName,
      email: userEmail,
    }
  }

  $.ajax({
    type: "POST",
    url: "/users",
    data: newUser,
    dataType: "json"
  }).done(function(data){
    $("#notice").html("Created " + data["name"]).fadeIn().fadeOut(2000);
  });

  $("#user_name")

}

App.makeMap = function() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}


