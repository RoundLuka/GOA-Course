const form = document.querySelector('form');
const main = document.querySelector('main');

const renderInfo = (posts) => {
  main.innerHTML = '';
  for(const post of posts){
    main.innerHTML += `
      <div>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <p>Views: ${post.views}</p>
        <p>Likes ${post.reactions.likes}. Dislikes ${post.reactions.dislikes}</p>
        <p>Tags: ${post.tags}</p>
        <hr />
      </div>
    `
  }
}

const fetchInfo = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    renderInfo(data.posts)

  } catch(error) {
    console.log(`My code error: ${error}`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchInfo(`https://dummyjson.com/posts`);
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  main.innerHTML = "";
    fetchInfo(`https://dummyjson.com/posts?q=${e.target.post.value}`);
})