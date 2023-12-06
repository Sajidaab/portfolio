// Footer
const footerText = document.getElementById('footer-text');
const currentYear = new Date().getFullYear();
footerText.innerHTML = `&copy; ${currentYear} Sajida Aboudaye`;
// Alert Button
var alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', function() {
    alert('Welcome to my webpage ❤️');
});

alertButton.addEventListener('mouseover', function() {
    alertButton.textContent = 'Look at me Hover! Now Click ;)';
    alertButton.style.backgroundColor = '#F06EA9';
});

alertButton.addEventListener('mouseout', function() {
    alertButton.textContent = 'Hi!';
    alertButton.style.backgroundColor = '';
});
// Increment Button
let count = 1;

const btnCounter = document.getElementById('btn-counter');
const txtCounter = document.getElementById('txt-counter');

btnCounter.onclick = () => {
    count = count + 1;
    txtCounter.innerHTML = 'Number: ' + count;

// If Else
    if (count % 2 === 0) {
        txtCounter.classList.remove('odd');
        txtCounter.classList.add('even');
    } else {
        txtCounter.classList.remove('even');
        txtCounter.classList.add('odd');
    }
};

btnCounter.addEventListener('mouseenter', function() {
    btnCounter.style.backgroundColor = '#F06EA9'; // Change to a different color on hover
    btnCounter.textContent = 'Green is even, Red is odd :)'
});

btnCounter.addEventListener('mouseleave', function() {
    btnCounter.style.backgroundColor = ''; // Revert to the default color on mouseleave
    btnCounter.textContent = 'How many times can you click?'
});

// Create a new ordered list with id "numbers" in HTML
const orderedList = document.createElement('ol');
orderedList.id = 'numbers';

// Append the ordered list to the body or any other parent element
document.body.appendChild(orderedList);

// Using a for loop to populate the ordered list with 100 child elements
for (let i = 1; i <= 100; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `${i} - ${i % 2 === 0 ? 'even' : 'odd'}`;
  listItem.style.color = i % 2 === 0 ? 'green' : 'red';
  orderedList.appendChild(listItem);
}

// Append the ordered list to the "numbers-container" within the "main" section
const numbersContainer = document.getElementById('numbers-container');
numbersContainer.appendChild(orderedList);


