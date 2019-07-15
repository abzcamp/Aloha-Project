var elem = document.querySelector('.grid-slider-wrap');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  groupCells: true
});


function check(email_id){

let a = "@";

if(email_id.value.includes(a))
	{
		alert("Thanks for Subscribing");
	}
	else{
		alert("Please Enter Valid Email");
	}
}