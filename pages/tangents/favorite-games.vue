<script lang="ts" setup>
  type Game = {
    name: string;
    link: string;
  }

  const games: Game[] = [
    {
      name: "Minecraft",
      link: "https://en.wikipedia.org/wiki/Minecraft"
    },
    {
      name: "Rollercoaster Tycoon",
      link: "https://en.wikipedia.org/wiki/RollerCoaster_Tycoon_(video_game)"
    },
    {
      name: "Rollercoaster Tycoon 2",
      link: "https://en.wikipedia.org/wiki/RollerCoaster_Tycoon_2"
    },
    {
      name: "Rollercoaster Tycoon 3",
      link: "https://en.wikipedia.org/wiki/RollerCoaster_Tycoon_3"
    },
    {
      name: "Factorio",
      link: "https://en.wikipedia.org/wiki/Factorio"
    },
    {
      name: "Terraria",
      link: "https://en.wikipedia.org/wiki/Terraria"
    },
    {
      name: "Team Fortress 2",
      link: "https://en.wikipedia.org/wiki/Team_Fortress_2"
    },
    {
      name: "Black Mesa",
      link: "https://en.wikipedia.org/wiki/Black_Mesa_(video_game)"
    },
    {
      name: "Undertale",
      link: "https://en.wikipedia.org/wiki/Undertale"
    },
    {
      name: "Deltarune",
      link: "https://en.wikipedia.org/wiki/Deltarune"
    },
    {
      name: "Phoenix Wright: Ace Attorney",
      link: "https://en.wikipedia.org/wiki/Phoenix_Wright:_Ace_Attorney"
    },
    {
      name: "Phoenix Wright: Ace Attorney - Justice for All",
      link: "https://en.wikipedia.org/wiki/Phoenix_Wright:_Ace_Attorney_%E2%80%93_Justice_for_All"
    },
    {
      name: "Phoenix Wright: Ace Attorney - Trials and Tribulations",
      link: "https://en.wikipedia.org/wiki/Phoenix_Wright:_Ace_Attorney_%E2%80%93_Trials_and_Tribulations"
    },
    {
      name: "osu!",
      link: "https://en.wikipedia.org/wiki/Osu!"
    },
    {
      name: "Overwatch",
      link: "https://en.wikipedia.org/wiki/Overwatch_(video_game)"
    },
    {
      name: "LEGO City Undercover",
      link: "https://en.wikipedia.org/wiki/Lego_City_Undercover"
    },
    {
      name: "Animal Crossing: New Leaf",
      link: "https://en.wikipedia.org/wiki/Animal_Crossing:_New_Leaf"
    },
    {
      name: "Run 2",
      link: "https://www.kongregate.com/games/player_03/run-2"
    },
    {
      name: "Chris Sawyer's Locomotion",
      link: "https://en.wikipedia.org/wiki/Chris_Sawyer's_Locomotion"
    },
    {
      name: "Stardew Valley",
      link: "https://en.wikipedia.org/wiki/Stardew_Valley"
    },
    {
      name: "Toy Bot Diaries Compilation",
      link: "https://web.archive.org/web/20150215085709/http://iugome.com/games.html"
    },
    {
      name: "Spy Bot",
      link: "https://web.archive.org/web/20150215085709/http://iugome.com/games.html"
    },
    {
      name: "Rick Rocketson",
      link: "https://web.archive.org/web/20180807125155/https://rickrocketson.com/"
    },
    {
      name: "Super Mario 64",
      link: "https://en.wikipedia.org/wiki/Super_Mario_64"
    },
    {
      name: "Renzhe",
      link: "https://drive.google.com/file/d/1zQQOUiHAPPSZsygorh3nFKmGVHl1z01e/view?usp=sharing"
    },
    {
      name: "Chocolatier 2: Secret Ingredients",
      link: "https://en.wikipedia.org/wiki/Chocolatier_2%3A_Secret_Ingredients"
    },
    {
      name: "Chocolatier 3: Decadence by Design",
      link: "https://en.wikipedia.org/wiki/Chocolatier%3A_Decadence_by_Design"
    },
    {
      name: "Omori",
      link: "https://en.wikipedia.org/wiki/Omori_(video_game)"
    }
  ];
  games.sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <div id="favorite-games">
    <h2 class="font-semibold text-3xl">Tangent: Favorite Games</h2>
    <p>These are some of my favorite games (in lexicographic order). They're on this list because I loved them and/or they had a significant impact on my life.</p>
    <ul class="list-disc leading-relaxed">
      <li v-for="game in games" :key="game.name">
        <NuxtLink :to="game.link">{{ game.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
