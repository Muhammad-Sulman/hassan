// Toggle action for navbar

document.getElementById('icon').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('show');
});

// logo animation
const logo = document.getElementById('movingLogo');

function moveLogo() {
    logo.style.transform = 'translateX(50px)';
    setTimeout(() => {
        logo.style.transform = 'translateX(0)';
    }, 1000);
}


setInterval(moveLogo, 2000);


// banner page 
const textToType = "Hassan";
const spanElement = document.getElementById('typedText');
let currentIndex = 0;

function typeText() {
    if (currentIndex < textToType.length) {
        spanElement.textContent += textToType.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeText, 500);
    } else {

        setTimeout(() => {
            spanElement.textContent = '';
            currentIndex = 0;
            typeText();
        }, 1000);
    }
}

typeText();


//about me 

function zoomIn(element) {
    element.style.transform = "scale(1.1)"; 
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
}


// project section


const cardsList = document.getElementById('cardsList');

const cardData = [
    { imgSrc: 'Project/psproject.jpg', detail: 'Photoshop Project... ', buttonText: 'Detail', projectlink: 'Project/detailsps.jpg' },
    { imgSrc: 'Project/canvaproject.jpg', detail: 'Canva Project... ', buttonText: 'Detail', projectlink: 'Project/detailcanva.jpg' },
    { imgSrc: 'Project/maxtabledesign.jpg', detail: 'Max Project 1... ', buttonText: 'Detail', projectlink: 'https://github.com/Hassan-Jalees/Table-Max' },
    { imgSrc: 'Project/maxparksitting.jpg', detail: 'Max Project 2. ', buttonText: 'Detail', projectlink: 'https://github.com/Hassan-Jalees/Park-sitting' },
    { imgSrc: 'Project/hh.jpg', detail: 'Max Project 3. ', buttonText: 'Detail', projectlink: 'https://github.com/Hassan-Jalees/Max-Kitkat' },
    // Add similar data for other cards
];

cardData.forEach((data, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${data.imgSrc}" alt="Card Image ${index + 1}">
    <div class="card-detail">
      <p class="detail-color">${data.detail}</p>
      <a href="${data.projectlink}" target="_blank" class="detail-button">${data.buttonText}</a>
    </div>
  `;
    cardsList.appendChild(card);
});


// Scroll function 

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}




