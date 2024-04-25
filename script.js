function highlight() {
    // Get all <strong> elements in the paragraph
    const boldElements = document.querySelectorAll('p strong');

    // Change the color of each bold element to green
    boldElements.forEach(element => {
        element.style.color = 'green';
    });
}

function return_normal() {
    // Get all <strong> elements in the paragraph
    const boldElements = document.querySelectorAll('p strong');

    // Revert the color of each bold element back to black
    boldElements.forEach(element => {
        element.style.color = 'black';
    });
}
