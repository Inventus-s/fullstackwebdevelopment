function getUser() {
    var username = document.getElementById("username").value;
    var url = "https://api.github.com/users/" + username;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayUser(data);
        })
        .catch(function (error) {
            console.log("Error:", error);
        });
}

function displayUser(user) {
    var userProfile = document.getElementById("userProfile");
    userProfile.innerHTML = "";

    var avatar = document.createElement("img");
    avatar.src = user.avatar_url;
    userProfile.appendChild(avatar);

    var name = document.createElement("h3");
    name.textContent = user.name;
    userProfile.appendChild(name);

    var location = document.createElement("p");
    location.textContent = "Location: " + (user.location ? user.location : "N/A");
    userProfile.appendChild(location);

    var followers = document.createElement("p");
    followers.textContent = "Followers: " + user.followers;
    userProfile.appendChild(followers);

    var publicRepos = document.createElement("p");
    publicRepos.textContent = "Public Repositories: " + user.public_repos;
    userProfile.appendChild(publicRepos);

    var bio = document.createElement("p");
    bio.textContent = "Bio: " + (user.bio ? user.bio : "N/A");
    userProfile.appendChild(bio);

    if (user.blog) {
        var portfolioLink = document.createElement("a");
        portfolioLink.href = user.blog;
        portfolioLink.textContent = "Portfolio";
        userProfile.appendChild(portfolioLink);
    }
}