const norris = require('./norris');

test('gets a random joke from the API', () => {
    const joke = norris.getRandomJoke();
    const keys = ["icon_url", "id", "url", "value"];

    expect(Object.keys(joke)).toBe(keys);
});

test('gets the joke categories from API', () => {
    const categories = [
      "animal",
      "career",
      "celebrity",
      "dev",
      "explicit",
      "fashion",
      "food",
      "history",
      "money",
      "movie",
      "music",
      "political",
      "religion",
      "science",
      "sport",
      "travel"
    ];

    expect(norris.getJokeCategories()).toBe(categories);
});