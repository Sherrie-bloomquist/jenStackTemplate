console.log( 'genero sourced' );

$( document ).ready( function(){
  console.log( 'JQ' );

  // test get function
  var getData = function(){
    console.log( 'in getData' );
    $.ajax({
      type: 'GET',
      url: '/testGet',
      success: function( response ){
        console.log( 'back from get call:', response );
        $('#what').append(response.field0);
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end getData

  // test get function
  var postData = function(){
    console.log( 'in postData' );
    // assemble object to send
    var eventInput = $('#eventName').val();
    var athleteInput = $('#athleteName').val();
    var awardInput = $('#award').val();
    var objectToSend={
      eventName: eventInput,
      athlete: athleteInput,
      award: awardInput

    }; // end object to send
    console.log(objectToSend);


    $.ajax({
      type: 'POST',
      url: '/testPost',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from post call:', response );
        var outputText = '';
          for (var i = 0; i < response.length; i++) {
          outputText +=  '<p>' + response[i].athlete + ' ' + response[i].award + ' ' + response[i].eventName + '</p>';
          }
        $('#displayArray').append(outputText);
      },
      error: function(){
        console.log( 'error with ajax call...');

      }
    });
  }; // end getData

  /// - buttons to test - ///
  $( '#testGetButton' ).on( 'click', function(){
    console.log( 'in testGetButton on click' );
    getData();
  }); // end testGetButton
  $( '#testPostButton' ).on( 'click', function(){
    console.log( 'in testPostButton on click' );
    postData();
  }); // end testGetButton

}); //end doc ready
