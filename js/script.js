function checkSelection(event) {
    event.preventDefault();
    const selected = document.querySelector('input[name="auth-selection"]:checked');
    if (selected && selected.value === 'human') {
      // Hide the auth overlay
      document.getElementById("authOverlay").style.display = "none";
    } else {
      alert(
        "Please confirm you're a human to proceed. | " +
        "Kérjük, erősítse meg, hogy emberi felhasználó, hogy folytathassa."
      );
    }
  }
  
  // No need to disable scrolling in this approach, because we overlay the entire page
  // If you still want to disable scrolling, you can set body.style.overflow = "hidden"
  // and then revert it after the user selects "human".
  
  function toggleLanguage(language) {
    const englishElements = document.querySelectorAll('.english');
    const hungarianElements = document.querySelectorAll('.hungarian');
    const travelSection = document.getElementById('travel'); // Get the travel section

    if (language === 'english') {
        englishElements.forEach(el => el.style.display = 'block');
        hungarianElements.forEach(el => el.style.display = 'none');
        travelSection.style.display = 'block'; // Ensure travel section is visible
    } else if (language === 'hungarian') {
        englishElements.forEach(el => el.style.display = 'none');
        hungarianElements.forEach(el => el.style.display = 'block');
        travelSection.style.display = 'none'; // Hide travel section completely
    }
}

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    // Toggle a class that shows/hides the nav links on mobile
    navLinks.classList.toggle('active');
  });