const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = modeToggle.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
});
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    // Get user input
    var username = document.getElementById('username').value;
    var userComment = document.getElementById('userComment').value;

    // Create a new comment element
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    
    // Create HTML structure for the comment
    var commentHTML = '<strong>' + username + ':</strong> ' + userComment;
    commentElement.innerHTML = commentHTML;

    // Append the comment to the comments section
    document.getElementById('commentsSection').appendChild(commentElement);

    // Clear input fields after submitting
    document.getElementById('username').value = '';
    document.getElementById('userComment').value = '';
});
const recipes = [
    { name: 'Pasta Carbonara', category: 'Italian' },
    { name: 'Chicken Curry', category: 'Indian' },
    { name: 'Chocolate Cake', category: 'Dessert' },
    // Add more recipes as needed
  ];
  
  function displayFilteredRecipes(searchTerm) {
    const filteredRecipes = recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             recipe.category.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
    const recipeListDiv = document.getElementById('recipeList');
    recipeListDiv.innerHTML = '';
  
    filteredRecipes.forEach(recipe => {
      const recipeDiv = document.createElement('div');
      recipeDiv.textContent = `${recipe.name} (${recipe.category})`;
      recipeListDiv.appendChild(recipeDiv);
    });
  }
  
  document.getElementById('searchInput').addEventListener('input', function(event) {
    const searchValue = event.target.value;
    displayFilteredRecipes(searchValue);
  });
  document.getElementById('searchInput').addEventListener('input', function(event) {
    console.log('Search input changed'); // Add this line
    const searchValue = event.target.value;
    displayFilteredRecipes(searchValue);
  });