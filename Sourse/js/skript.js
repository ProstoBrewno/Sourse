const images = document.getElementsByClassName('image');
const fullscreenImage = document.createElement('img');
fullscreenImage.id = 'fullscreen-image';

for (let i = 0; i < images.length; i++) 
{
  images[i].addEventListener('click', function() 
  {
    fullscreenImage.src = images[i].src;
    fullscreenImage.style.display = 'block';
    document.body.appendChild(fullscreenImage);
  });
}

fullscreenImage.addEventListener('click', function() 
{
  fullscreenImage.style.display = 'none';
});

