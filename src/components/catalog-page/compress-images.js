export  function compressImages() {
    let images = document.querySelectorAll('.slider_container img');

    images.forEach(function(image) {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        let compressedImage = canvas.toDataURL('image/jpeg', 0.6); // 0.6 - это качество сжатия (от 0 до 1)

        image.src = compressedImage;
    });
}