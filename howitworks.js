$(document).ready(function(){
  $('#howitworks').hover(function(){
    // console.log("hi");
    // $("#howitworksdiv").toggle();
    // console.log($('[data-toggle="popover"]'));
    $('[data-toggle="popover"]').popover({title:"Calculating Password Strength", content:'A password is considered strong when:<br>It has more than 8 characters,,It has at least one lower case characterIt has at least one upper case character,It has at least one non alphanumeric character,It has more than 12 charactersEach of these criteria gives the password 1 point. A password is considered:0 points: terrible1 points: weak2 points: meh meh3 points: good4 points: strong5 points: awesome!'});
  });

});

