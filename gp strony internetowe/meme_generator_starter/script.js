const choosenPicture = document.querySelector('#select-picture');
const canvas = document.querySelector('#meme');
const textTop = document.querySelector('#text-top');
const textBottom = document.querySelector('#textBottom');

let picture;

choosenPicture.addEventListener("change", function (e) {
    const pictureUrl = URL.createObjectURL(e.target.files[0]);
    picture = new Image();
    picture.src = pictureUrl;
    picture.addEventListener("load", function () {
        console.log('wczytuje obrazek ...', pictureUrl);
        updateMeme(canvas, picture);
    });
});
function updateMeme(canvas, picture) {
    const ctx = canvas.getContext("2d");
    const canvasWidth = picture.width;
    const canvasHeight = picture.height;

    const fontsize = Math.floor(canvasWidth / 20);
    const offsetY = canvasHeight / 25;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.drawImage(picture,  0, 0);

}


