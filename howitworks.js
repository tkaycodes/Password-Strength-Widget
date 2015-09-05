$(document).ready(function(){
    // console.log("hi");
    // $("#howitworksdiv").toggle();
    // console.log($('[data-toggle="popover"]'));
    $('[data-toggle="popover"]').popover({title:"Calculating Password Strength", content:'A password is considered strong when:<br> <ul><li>It has more than 8 characters</li><li>It has at least one lower case character</li><li>It has at least one upper case character</li><li>It has at least one non alphanumeric character</li><li>It has more than 12 characters</li></ul>Each of these criteria gives the password <strong>1 point</strong>.<br><br> A password is considered: <ul><li>0 points: terrible</li><li>1 points: weak</li><li>2 points: meh meh</li><li>3 points: good</li><li>4 points: strong</li><li>5 points: awesome!</li></ul>', html: true});
    // $('[data-toggle="popover"]').popover({title:"Calculating Password Strength", content: 'data-template'});
});

