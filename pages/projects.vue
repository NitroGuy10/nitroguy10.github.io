<script lang="ts" setup>
  import nitroguy from "@/data/nitroguy.json";
</script>

<template>
  <div id="projects">
    <h2 class="font-semibold text-3xl">A List of Some of My Projects With Informal Commentary</h2>
    <p>Hello! This is a list of some of my programming projects in roughly chronological order. This includes software, plugins, web apps, microcontroller projects, et cetera. Let me know if you have questions about anything and hope you enjoy!</p>
    <ProjectsEntry
    title="HelpR 1.0"
    timeframe="22 January 2022 - 1 October 2022"
    languages="HTML, CSS, JavaScript"
    technologies="Node.js, Express, PostgreSQL, TypeORM, Socket.io, React, Next.js, TailwindCSS"
    image-link="/images/projects/helpr.png"
    >
      <p>HelpR is a web app where hackathon participants can submit help tickets if they get stuck while making their project. The tickets get answered in real-time as mentors at the event will find hackers based on the location they attached to their ticket, and provide the assistance the hackers need. It's also a spiritual successor to <NuxtLink to="https://github.com/ehzhang/HELPq" class="underline">HELPq</NuxtLink>.</p>
      <p>This might be the largest-scale project I've worked on thus far! It was made in a team 3 for use at TAMUhack hackathons. It was first deployed at HowdyHack 2022 on 1-2 October 2022 for use by 200+ hackers, and it worked amazingly with practically no hitches! (Sorry for all the exclamation marks. I'm really excited about this one if you can't tell :p)</p>
      <p>I was completely responsible for writing the backend for this app. I created a robust REST API with Express and used a PostgreSQL database to store users and tickets. I didn't make the frontend but, in case you were wondering, it's made using React, Next.js, and TailwindCSS. This project took months of development but it definitely paid off ...and we're not even done! We're gonna rewrite the whole thing in TypeScript soon. Wish us luck!</p>
    </ProjectsEntry>
  </div>
</template>
