const scrollHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  burger.classList.toggle('active');
});



function handleKeyDown(event, inputId) {
    if (event.keyCode === 13) { // 13 adalah kode untuk tombol "Enter"
      event.preventDefault(); // Mencegah aksi default dari tombol "Enter" (misalnya submit form)
      searchParagraph(inputId);
    }
  }
  
  function searchParagraph(inputId) {
    console.log(inputId);
    var input = document.getElementById(inputId).value.toLowerCase();
    var paragraphs = document.getElementsByTagName("p");
    var titles = document.getElementsByTagName("h1");
    var foundParagraph = false;
    var foundTitles = false;

    for (var i = 0; i < titles.length; i++) {
      var titlesText = titles[i].innerText.toLowerCase();
  
      if (titlesText.includes(input)) {
        titles[i].scrollIntoView({ behavior: "smooth", block: "center" });
        foundParagraph = true;
      } 
    }

    for (var i = 0; i < paragraphs.length; i++) {
      var paragraphText = paragraphs[i].innerText.toLowerCase();
  
      if (paragraphText.includes(input)) {
        paragraphs[i].scrollIntoView({ behavior: "smooth", block: "center" });
        foundParagraph = true;
      } 
    }
  
    if (!foundParagraph && !foundTitles) {
      alert("Paragraf tidak ditemukan");
    }
  }
  
  function openInstagramPopup() {
    window.open("https://www.instagram.com/kampusmerdeka.ri/", "Instagram Pop-up", "width=500,height=500");
  }

  function openYoutubePopup() {
    window.open("https://www.youtube.com/@kampus.merdeka", "Youtube Pop-up", "width=500,height=500");
  }

  function openWebPopup() {
    window.open("https://kampusmerdeka.kemdikbud.go.id/", "Youtube Pop-up", "width=500,height=500");
  }

  function openYoutubeProgramUnggulanPopup() {
    window.open("https://www.youtube.com/watch?v=mtuardJqJBk", "Youtube Pop-up", "width=500,height=500");
  }