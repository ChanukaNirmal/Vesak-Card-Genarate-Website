// Load images dynamically
const imageGrid = document.getElementById('imageGrid');
const previewImage = document.getElementById('previewImage');
const text1Input = document.getElementById('text1');
const text2Input = document.getElementById('text2');
const overlayText1 = document.getElementById('overlayText1');
const overlayText2 = document.getElementById('overlayText2');
const flipCard = document.getElementById('flipCard');
const sendButton = document.getElementById('sendButton');

for (let i = 1; i <= 50; i++) {
  const img = document.createElement('img');
  img.src = `images/card${i}.jpg`;
  img.alt = `Card ${i}`;
  img.addEventListener('click', () => {
    document.querySelectorAll('.image-grid img').forEach(img => img.classList.remove('selected'));
    img.classList.add('selected');
    previewImage.src = img.src;
  });
  imageGrid.appendChild(img);
}

// Update overlay texts
text1Input.addEventListener('input', () => {
  overlayText1.textContent = text1Input.value ? `${text1Input.value} විසින්` : 'යවන්නාගේ නම';
});

text2Input.addEventListener('input', () => {
  overlayText2.textContent = text2Input.value ? `${text2Input.value} වෙත` : 'ලබන්නාගේ නම';
});

// Flip card on click
flipCard.addEventListener('click', () => {
  flipCard.classList.toggle('flipped');
});

// Send button functionality
sendButton.addEventListener('click', () => {
  const imageSrc = previewImage.src;
  const text1 = text1Input.value;
  const text2 = text2Input.value;
  const params = new URLSearchParams({
    image: imageSrc,
    text1: text1,
    text2: text2
  });
  const resultUrl = `result.html?${params.toString()}`;
  window.open(resultUrl, '_blank');
});
