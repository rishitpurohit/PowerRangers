
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image , function(img){
block_image_object = Img;;
block_image_width.scaleToWidth(block_y);
block_image_width.scaleToHeight(block_x);
block_image_object.set({
top:block_y , 
left:block_x
});
	canvas.add(block_image_object)
});

}


window.addEventListener("keydown" , my_keydown)

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image('rr.jpg');
		console.log('r')
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image('gr.jpg');
		console.log('g')
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image('yr.png');
		console.log('y')
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image('pr.jpg');
		console.log('p')
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_image('br.jpg');
		console.log('b');
	}
} 
