document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const userId   = document.getElementById('userId').value.trim();
  const password = document.getElementById('password').value;

  // Dummy validation: user ID must be non-empty 
  if (!userId) {
    alert('User ID is required.');
    return;
  }

  // In a real setup you'd verify credentials via API.
  // Here we'll just simulate a successful login and redirect.
  console.log(`Authenticating ${userId}…`);
  setTimeout(() => {
    // On success:
    window.location.href = 'dashboard.html';
  }, 800);
});
