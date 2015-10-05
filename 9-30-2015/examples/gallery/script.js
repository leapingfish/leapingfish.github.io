// Array with name of images
var imageNames = ['fall.jpg', 'winter.jpg', 'grass.jpg', 'desert.jpg'];

var imageIndex = 0;

// ON LOAD give image a proper source
// $('.image-wrapper img').attr('src', 'images/' + imageNames[0]);

// Add click handler
$('.change-image').on('click', changeImage);

function changeImage() {
    $('.image-wrapper img').attr('src', 'images/' + imageNames[imageIndex]);
    // Every time we run this function,
    // lets add 1 to our images index
    // imageIndex = imageIndex + 1;
    imageIndex ++;
    if(imageIndex == 4) {
        imageIndex = 0;
    }
    console.log(imageIndex);
}

changeImage();