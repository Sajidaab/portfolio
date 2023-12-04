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