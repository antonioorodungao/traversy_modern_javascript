class Github {
  async getUser(username) {
    const result = await fetch(
      `https://api.github.com/search/users?q=${username}`
    );
    const data = await result.json();
    return data;
  }
}
