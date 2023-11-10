fetch('http://mongodb://localhost:27017/api/blogposts')
  .then(response => response.json())
  .then(blogPosts => {
    // Iterate over 'blogPosts' and display them in your HTML
    blogPosts.forEach(post => {
      const postContainer = document.createElement('div');
      postContainer.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p>Author: ${post.author}</p>
      `;
      document.getElementById('blog').appendChild(postContainer); // 'blog' is an example container element in your HTML
    });
  })
  .catch(error => {
    console.error('Error fetching blog posts:', error);
  });
