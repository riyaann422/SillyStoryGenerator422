const stories = [
  "Once upon a time, :name: went to space and fought a dancing alien.",
  ":name: accidentally became the king of a pizza planet.",
  "A talking cat told :name: to never trust flying bananas.",
  ":name: found a magical shoe that could sing karaoke.",
  "One day, :name: turned into a superhero made of jelly."
];

function generateStory() {
  const name = document.getElementById("nameInput").value || "Someone";

  const randomIndex = Math.floor(Math.random() * stories.length);
  let story = stories[randomIndex];

  story = story.replaceAll(":name:", name);

  document.getElementById("storyBox").innerText = story;
}