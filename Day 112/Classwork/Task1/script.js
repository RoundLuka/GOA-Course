const main = document.querySelector("main");

const fetchData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/posts')
        const data = await response.json();
        renderInfo(data)
        

        
    } catch (error){
        console.log("Error:", error);
    }
}



function renderInfo(data){
    const posts = data.posts
    for(let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const title = post.title;
        const body = post.body;
        const tags = post.tags;
        const reactions = post.reactions;
        const views = post.views;

        const postDiv = document.createElement("div");
        postDiv.className = "postDiv"
        
        const titleHeader = document.createElement("h3");
        titleHeader.textContent = title;
        const bodyP = document.createElement("p");
        bodyP.textContent = body;

        const tagsLabel = document.createElement("h4");
        tagsLabel.textContent = "Tags";
        const tagsList = document.createElement("ul");
        for(let i = 0; i < tags.length; i++){
            const tagP = document.createElement("li");
            tagP.textContent = tags[i];
            tagsList.append(tagP);
        }
        
        const reactionsDiv = document.createElement("div");
        const likes = reactions.likes;
        const dislikes = reactions.dislikes;

        const likesP = document.createElement("p");
        likesP.textContent = "Likes: " + likes;
        likesP.className = "Likes";

        const dislikesP = document.createElement("p");
        dislikesP.textContent = "Dislikes: " + dislikes;
        likesP.className = "Dislikes";

        reactionsDiv.append(likesP);
        reactionsDiv.append(dislikesP);

        const viewsP = document.createElement("p");
        viewsP.textContent = "Views: " + views;


        postDiv.append(titleHeader);
        postDiv.append(bodyP);
        postDiv.append(tagsLabel);
        postDiv.append(tagsList);
        postDiv.append(reactionsDiv);
        postDiv.append(viewsP);

        main.append(postDiv);
    }
}


document.addEventListener("DOMContentLoaded", fetchData);