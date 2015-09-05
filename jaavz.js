$(document).ready(function(){
  // console.log('hi');

  // returns value of password field when the submit button is clicked
  $('input[type="button"]').click(function(){
    var password_value = $('input[type="text"][placeholder="Password"]').val();
    console.log(password_value);
  });

  $('input[type="text"][placeholder="Password"]').keyup(function()
    {
      // appends error message div if dosnt exist already
      if ($('#errormessage').length === 0 ){
      $('.background').prepend('<div class="textbox" id="errormessage" style="text-align:center;border-radius:0px;border:none;"></div>');
      }

      // original score
      var password_score = 0;
      // everytime key is pressed score is set to 0, it sets the score
      // based on the conditions below and then displays it



      // calculate score
      var password_value = $(this).val();
      // console.log(password_value);
      if (password_value.length > 12){
        console.log("Length greater than 12! (+1)");
        password_score +=1;
        // console.log("new score "+password_score);
      }
      if (password_value.length > 8){
        console.log("Length greater than 8! (+1)");
        password_score +=1;
        // console.log("new score "+password_score);
      }


      // match:  http://www.w3schools.com/jsref/jsref_match.asp
      // regexp: http://stackoverflow.com/questions/6053541/regex-every-non-alphanumeric-character-except-white-space-or-colon

      if (password_value.match(/[^a-zA-Z\d\s:]/)){
        password_score +=1;
        console.log("Contains at least one non alpha-num char! (+1)");
      }

      if (password_value.match(/[A-Z]/)){
        password_score +=1;
        console.log("Contains at least one upper-case char! (+1)");

      }

      if (password_value.match(/[a-z]/)){
        password_score +=1;
        console.log("Contains at least one lower-case char! (+1)");

      }

      // display score
      console.log(password_score);

      // display strength based on password_score
      // $('#errormessage').html("Password Score: " + password_score);

      if (password_score === 0){
        $('#errormessage').html("Password Strength: Terrible").attr("class", "alert alert-danger");
      }
      else if (password_score === 1){
        $('#errormessage').html("Password Strength: Very Weak").attr("class", "alert-danger");
      }
      else if (password_score === 2){
        $('#errormessage').html("Password Strength: Weak").attr("class", "alert-warning");
      }
      else if (password_score === 3){
        $('#errormessage').html("Password Strength: Good").attr("class", "alert-info");
      }
      else if (password_score === 4){
        $('#errormessage').html("Password Strength: Strong").attr("class", "alert-success");
      }
      else if (password_score === 5){
        $('#errormessage').html("Password Strength: Very Strong").attr("class", "alert-succes");
      }
    });



});


// 0 points: terrible
// 1 points: weak
// 2 points: meh meh
// 3 points: good
// 4 points: strong
// 5 points: awesome!