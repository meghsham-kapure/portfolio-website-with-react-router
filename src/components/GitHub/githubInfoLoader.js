export default async function githubInfoLoader() {
  return fetch("https://api.github.com/users/meghsham-kapure")
    .then((jsonString) => jsonString.json())
    .then((githubData) => {
      return {
        login: githubData["login"],
        avatarUrl: githubData["avatar_url"],
        url: githubData["url"],
        htmlUrl: githubData["html_url"],
        reposUrl: githubData["repos_url"],
        name: githubData["name"],
        company: githubData["company"],
        blog: githubData["blog"],
        location: githubData["location"],
        email: githubData["email"],
        hireable: githubData["hireable"],
        bio: githubData["bio"],
        twitterUsername: githubData["twitter_username"],
      };
    });
}
