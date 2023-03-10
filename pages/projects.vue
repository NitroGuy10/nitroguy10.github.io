<script lang="ts" setup>
  import nitroguy from "@/data/nitroguy.json";
</script>

<template>
  <div id="projects">
    <h2 class="font-semibold text-3xl">A List of Some of My Projects With Informal Commentary</h2>
    <p>Hello! This is a list of some of my programming projects in roughly chronological order. This includes software, plugins, web apps, microcontroller projects, et cetera. Let me know if you have questions about anything and hope you enjoy!</p>
    <ProjectsEntry
    title="Heart2Heart"
    timeframe="24 February 2023 - Ongoing"
    languages="Godot/GDScript"
    >
      <p>todo todo todo</p>
      <p><NuxtLink :to="nitroguy.socials.website.link + '/Heart2Heart'">Heart2Heart</NuxtLink></p>
      <p><NuxtLink :to="nitroguy.socials.github.link + '/Chillennium2023'">Heart2Heart (source) on GitHub</NuxtLink></p>
      <p><NuxtLink :to="nitroguy.socials.github.link + '/Heart2Heart'">Heart2Heart (hosting repo) on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Xylem"
    timeframe="4 February 2023 - 5 February 2023"
    languages="Python, Registry Editor"
    technologies="FFmpeg"
    >
      <p>Xylem is yet another iteration entry in my longstanding tradition of making frontends to <NuxtLink to="https://ffmpeg.org/">FFmpeg</NuxtLink> that make it even more simple and convenient to use than it already is. Since I work with audio and video a lot, FFmpeg is extremely valuable to me and I am soooo thankful that it exists.</p>
      <p>Many years ago, I wrote some Windows Batch scripts that let me drag and drop files onto the scripts to have them automatically convert audio files to the format I want and the bitrate I want. Since then, I've found that I sometimes need some more fine-tuned control over the conversions, and Xylem is my attempt to attain that without sacrificing simplicity and ease-of-use.</p>
      <p>More specicially, it's a Python CLI tool that's super customizable and supports many ways to invoke it, like drag-and-drop (on Windows), stdout, and args. I even did some Registry Editor scripting to get it appear in Windows right-click menus! The GitHub repo's <NuxtLink :to="nitroguy.socials.github.link + '/Xylem#readme'">README</NuxtLink> does a much better job of explaining everything so go check it out!</p>
      <p><NuxtLink :to="nitroguy.socials.github.link + '/Xylem'">Xylem on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="HelpR 1.0"
    timeframe="22 January 2022 - 1 October 2022"
    languages="HTML, CSS, JavaScript"
    technologies="Node.js, Express, PostgreSQL, TypeORM, Socket.io, React, Next.js, TailwindCSS"
    image-link="/images/projects/helpr.png"
    image-alt="The HelpR landing page"
    >
      <p>HelpR is a web app where hackathon participants can submit help tickets if they get stuck while making their project. The tickets get answered in real-time as mentors at the event will find hackers based on the location they attached to their ticket, and provide the assistance the hackers need. It's also a spiritual successor to <NuxtLink to="https://github.com/ehzhang/HELPq">HELPq</NuxtLink>.</p>
      <p>This might be the largest-scale project I've worked on thus far! It was made in a team 3 for use at TAMUhack hackathons. It was first deployed at HowdyHack 2022 on 1-2 October 2022 for use by 200+ hackers, and it worked amazingly with practically no hitches! Sorry for all the exclamation marks... I'm really excited about this one if you can't tell :D</p>
      <p>I was completely responsible for writing the backend for this app. I created a robust REST API with Express and used a PostgreSQL database to store users and tickets. I didn't make the frontend but, in case you were wondering, it's made using React, Next.js, and TailwindCSS. This project took months of development but it definitely paid off!</p>
      <p><NuxtLink to="https://github.com/tamuhack-org/helpR">HelpR on GitHub</NuxtLink></p>
      <p><NuxtLink to="https://github.com/tamuhack-org/helpr-frontend">HelpR Frontend on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Compara2r"
    timeframe="3 March 2022 - 10 May 2022"
    languages="HTML, CSS, JavaScript"
    technologies="Node.js, Express, PostgreSQL, TailwindCSS"
    image-link="/images/projects/compara2r.png"
    image-alt="A Compara2r prompt"
    >
      <p>Compara2r (pronounced "comparator") is a web app which you can use to find out the best thing among a dataset through 1-vs-1 comparisons. Users are shown a random comparison and are prompted to vote on which item they think is better. Users can vote as many times as they want and can also flag inappropriate items. Server admins can download the results and find out once and for all the best ...whatever... of all time.</p>
      <p>This was the first time I ever created a full-stack web app from scratch all by myself! It was super fun and I learned lot about creating backend servers, using databases, and deployment. Speaking of, I actually deployed Compara2r on Heroku using a free dyno which doesn't exist anymore because, sadly but understandably, Heroku are not offering their services for free anymore. Also TailwindCSS is awesome.</p>
      <p><NuxtLink :to="nitroguy.socials.github.link + '/Compara2r'">Compara2r on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="recommends"
    timeframe="25 December 2021 - 4 January 2022"
    languages="Python, HTML, CSS, JavaScript"
    technologies="Flask, Jinja, SQLite, PyNaCl"
    image-link="/images/projects/recommends.png"
    image-alt="A user's page on recommends"
    >
      <p>A social media site where users can recommend books, movies, etc. to their friends. <NuxtLink to="https://prydt.xyz/">Pry</NuxtLink> and I made this in a couple days using Flask, Jinja, SQLite, PyNaCl, and the usual HTML/CSS/JavaScript shebang. I mainly worked on the frontend and pry worked on the login and database stuff. Overall, I'm pretty happy with how this turned out. It's quite minimal, but I feel like it has a lot of potential if we were ever to come back and polish/expand/deploy it.</p>
      <p><NuxtLink to="https://github.com/prydt/recommends">recommends on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="overthere"
    timeframe="19 December 2021 - 24 December 2021"
    languages="Python, HTML, CSS, JavaScript"
    technologies="Flask, SQLite"
    image-link="/images/projects/overthere.png"
    image-alt="The interface of overthere"
    >
      <p>I sat thinking hard and long about my life and my future. Finally, I came to a realization: "Hm, I should probably make something with a database." And overthere was born.</p>
      <p>overthere is bit.ly/tinyurl clone-ish that lets you post multiple links on one page. It also has fun, memorable URLs like "exquisite-cow"&mdash;a feature inspired by <NuxtLink to="https://magic-wormhole.readthedocs.io/">Magic-Wormhole</NuxtLink>.</p>
      <p><NuxtLink :to="nitroguy.socials.github.link + '/overthere'">overthere on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="overthere"
    timeframe="19 December 2021 - 24 December 2021"
    languages="Python, HTML, CSS, JavaScript"
    technologies="Flask, SQLite"
    image-link="/images/projects/overthere.png"
    image-alt="The interface of overthere"
    >
      <p>I sat thinking hard and long about my life and my future. Finally, I came to a realization: "Hm, I should probably make something with a database." And overthere was born.</p>
      <p>overthere is bit.ly/tinyurl clone-ish that lets you post multiple links on one page. It also has fun, memorable URLs like "exquisite-cow"&mdash;a feature inspired by <NuxtLink to="https://magic-wormhole.readthedocs.io/">Magic-Wormhole</NuxtLink>.</p>
      <p><NuxtLink :to="nitroguy.socials.github.link + '/overthere'">overthere on GitHub</NuxtLink></p>
    </ProjectsEntry>
  </div>
</template>
