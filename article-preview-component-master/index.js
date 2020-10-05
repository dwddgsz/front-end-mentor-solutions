// VAIRABLES
const toggleSection = document.getElementById('toggle-section');
// WATCH MEDIA
const mediaQuery = window.matchMedia('(min-width:767px)');
// INITIALIZE FUNCTION THAT CHANGES CONTENT FROM AUTHOR-SECTION TO SHARE-SECTION (ON MOBILE DEVICES) OR SHOWS POPUP (ON DESKTOP)
let changeToShare = () => {};
// FUNCTION THAT CHANGES CONTENT OF SHARE-SECTION TO AUTHOR-SECTION (CAN BE USED ONLY ON MOBILE DEVICES)
const changeToAuthor = function () {
  toggleSection.style.backgroundColor = 'white';
  toggleSection.innerHTML = `
         <div class="author-data">
           <img src="./images/avatar-michelle.jpg" class="author-photo" alt="photo-of-author">
           <div class="author-text">
             <p class="author-name"> Michelle Appleton</p>
             <p class="author-date"> 28 Jun 2020</p>
           </div>
         </div>
         <div class="share-button" id="button" tabindex="0" onclick="changeToShare()"> <img src="./images/icon-share.svg" alt="share-button">
           <div class="share-popup" id="share-popup">
             <div class="share-popup-triangle"></div>
             <div class="share-data">
               <p class="share-text">Share</p>
               <div class="share-icons-container">
                 <img src="./images/icon-facebook.svg" alt="facebook-icon">
                 <img src="./images/icon-twitter.svg" alt="twitter-icon">
                 <img src="./images/icon-pinterest.svg" alt="pinterest-icon">
               </div>
             </div>
           </div> </div>
         `
}
// FUNCTION THAT CHANGES HOW changeToShare WORKS (FOR MOBILE)
const changeForMobile = () => {
  const popup = document.getElementById('share-popup');
  popup.classList.remove('popup-visible');
  changeToShare = () => {
    toggleSection.style.backgroundColor = 'hsl(217, 19%, 35%)';
    toggleSection.innerHTML = `<div class="share-data">
         <p class="share-text">Share</p>
         <div class="share-icons-container">
           <img src="./images/icon-facebook.svg" alt="facebook-icon">
           <img src="./images/icon-twitter.svg" alt="twitter-icon">
           <img src="./images/icon-pinterest.svg" alt="pinterest-icon">
         </div>
       </div>
       <div class="share-button" id="button" tabindex="0" onclick="changeToAuthor()"> <img src="./images/icon-share.svg" alt="share-button">
       </div>`;
  }
}
// FUNCTION THAT CHANGES HOW changeToShare WORKS (FOR DESKTOP). IT ALSO INVOKES changeToAuthor SO USER SECTION IS ALWAYS VISIBLE ON DESKTOP
const changeForDesktop = () => {
  changeToAuthor();
  changeToShare = () => {
    const popup = document.getElementById('share-popup');
    popup.classList.toggle('popup-visible')
  }
}
// FUNCTION THAT CHECKS FOR CHANGES DEPENDING ON MEDIA QUERIES
const checkForChanges = () => {
  if (mediaQuery.matches) {
    changeForDesktop();
  } else {
    changeForMobile();
  }
}
// INITIAL CHECK FOR MEDIA QUERIES
checkForChanges();
// LISTEN FOR MEDIA QUERIES
mediaQuery.addEventListener('change', checkForChanges);