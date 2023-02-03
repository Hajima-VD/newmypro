$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false ,
        margin: 48 ,
        loop: true
    });
  });

  const videoBtn = document.querySelector('#video-btn') ;
  const videoPicture = document.querySelector('.viseo__preview') ;
  const videoOverlay = document.querySelector('.video__video') ;
  const videoFile = document.querySelector('#video-file') ;
//   videoBtn.addEventListener('click' , function(){
//       videoPicture.classList.add('none');
//       videoOverlay.classList.remove('video__overlay');
//       videoBtn.classList.add('none');

// if(videoFile.paused) {
//     videoFile.play();
// }

//   })

  videoOverlay.addEventListener('click' , function(){

    if(videoFile.paused) {
      videoPicture.classList.add('none');
      videoOverlay.classList.remove('video__overlay');
      videoBtn.classList.add('none');        
      videoFile.play();
    } else {
         
        
        videoOverlay.classList.add('video__overlay');
        videoBtn.classList.remove('none');
        videoFile.pause();
            }
   
  })