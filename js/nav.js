
let btn = document.querySelector('#btn'); 
let sidebar = document.querySelector('.sidebar');
let listItems = document.querySelectorAll('.list-item'); // Utiliser querySelectorAll pour obtenir une liste d'éléments

btn.onclick = function() {
    sidebar.classList.toggle('active');
}

function activeLink() {
    listItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

listItems.forEach(item => item.onclick = activeLink);


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById('ouvrir-pdf').addEventListener('click', function() {
  window.open('./documents/CV_HF.pdf', '_blank');
});




