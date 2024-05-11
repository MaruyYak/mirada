export function compressImages() {
  
    let images = document.querySelectorAll('.card_photo');
    
    images.forEach(function(image) {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        let compressedImage = canvas.toDataURL('image/jpeg', 0.6);

        image.src = compressedImage;
    });
}