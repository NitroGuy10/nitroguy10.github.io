<script lang="ts" setup>
  import nitroguy from "@/data/nitroguy.json";
</script>

<template>
  <div id="projects">
    <h2 class="font-semibold text-3xl">A List of Some of My Projects With Informal Commentary</h2>
    <p>Hello! This is a list of some of my programming projects in roughly chronological order. This includes software, plugins, web apps, microcontroller projects, et cetera. Let me know if you have questions about anything and hope you enjoy!</p>
    <ProjectsEntry
    title="Slither"
    timeframe="LDJHASLKDJHLAISDUHFLIKSDULFKJHDSLKJFHL"
    languages="TypeScript"
    technologies="Svelte, SvelteKit, TailwindCSS, PostgreSQL"
    >
      <p></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Rev Your Engines"
    timeframe="LDJHASLKDJHLAISDUHFLIKSDULFKJHDSLKJFHL"
    languages="Godot/GDScript"
    >
      <p>A fun little dodge-the-obstacles game made as an easter egg for the <NuxtLink to="https://hh23.tamuhack.org">HowdyHack2023</NuxtLink> website (drag the car to the right!) This game was made in like 2 days and I remember making the <NuxtLink :to="nitroguy.socials.github.link + '/Rev_Your_Engines/raw/main/assets/Music/electric_lounge.mp3'">music</NuxtLink> at 1 AM and spending 4 hours on it. The music for this game is actually up there with my favorite tracks I've made. The sprites, however, are kind of an eyesore and this is why I'm not an artist :p</p>
      <p class="project-link"><NuxtLink to="https://hh23.tamuhack.org">HowdyHack2023</NuxtLink> (Drag the car to the right!)</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/Rev_Your_Engines'">Rev Your Engines on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="My Website"
    timeframe="3 January 2023 - Ongoing"
    languages="HTML, TypeScript"
    technologies="Vue, Nuxt, TailwindCSS"
    >
      <p>It's a website! It's made with Vue and Nuxt! And Tailwind! Yaaay!!!</p>
      <p>Um, I mean this iteration of my website is meant to be a more cohesive and clean construction than my previous one. It utilizes Vue to replace the template rendering from my previous website, and Nuxt makes it all static with practically zero JavaScript in the final build!</p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Heart2Heart"
    timeframe="24 February 2023 - Ongoing"
    languages="Godot/GDScript"
    image-link="/images/projects/titlescreen.apng"
    image-alt="The Heart2Heart Title Screen"
    >
      <p>Heart2Heart is a game made for the 48-hour <NuxtLink to="https://itch.io/jam/chillennium-2023">Chillennium 2023 Game Jam</NuxtLink>. It's a cutsey puzzle-platformer where you control two characters and gain abilities by touching certain words, giving your characters emotions. It was super fun to make and it won Best In Originality at the game jam!</p>
      <p>This project would not have been possible without my amazing friends Anish, Lizzy, and Kat! I did the coding and music, Anish did the story and level design, Lizzy and Kat did the art and animations, and we all worked on the concept together. The game is made in the Godot Engine and is playable online at the link below. Give it a try!</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.website.link + '/Heart2Heart'">Heart2Heart</NuxtLink></p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/Chillennium2023'">Heart2Heart (source) on GitHub</NuxtLink></p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/Heart2Heart'">Heart2Heart (hosting repo) on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Xylem"
    timeframe="4 February 2023 - 5 February 2023"
    languages="Python, Registry Editor"
    technologies="FFmpeg"
    >
      <p>Xylem is yet another iteration entry in my longstanding tradition of making frontends to <NuxtLink to="https://ffmpeg.org/">FFmpeg</NuxtLink> that make it even more simple and convenient to use than it already is. Since I work with audio and video a lot, FFmpeg is extremely valuable to me and I am soooo thankful that it exists.</p>
      <p>Many years ago, I wrote some Windows Batch scripts that let me drag and drop files onto the scripts to have them automatically convert audio files to the format I want and the bitrate I want. Since then, I've found that I sometimes need some more fine-tuned control over the conversions. Xylem is my attempt to attain that without sacrificing simplicity and ease-of-use.</p>
      <p>More specicially, it's a Python CLI tool that's super customizable and supports many ways to invoke it, like drag-and-drop (on Windows), stdout, and args. I even did some Registry Editor scripting to get it appear in Windows right-click menus! The GitHub repo's <NuxtLink :to="nitroguy.socials.github.link + '/Xylem#readme'">README</NuxtLink> does a much better job of explaining everything so go check it out!</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/Xylem'">Xylem on GitHub</NuxtLink></p>
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
      <p class="project-link"><NuxtLink to="https://github.com/tamuhack-org/helpR">HelpR on GitHub</NuxtLink></p>
      <p class="project-link"><NuxtLink to="https://github.com/tamuhack-org/helpr-frontend">HelpR Frontend on GitHub</NuxtLink></p>
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
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/Compara2r'">Compara2r on GitHub</NuxtLink></p>
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
      <p class="project-link"><NuxtLink to="https://github.com/prydt/recommends">recommends on GitHub</NuxtLink></p>
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
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/overthere'">overthere on GitHub</NuxtLink></p>
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
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/overthere'">overthere on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Supremely_Hexagonal"
    timeframe="28 October 2021 - 1 November 2021"
    languages="Java"
    technologies="Processing"
    image-link="/images/projects/supremely_hexagonal_gameplay.gif"
    image-alt="Gameplay from Supremely_Hexagonal"
    >
      <p>Supremely_Hexagonal is a simplistic remake of <NuxtLink to="https://superhexagon.com/">Super Hexagon</NuxtLink> by Terry Cavanagh in Processing. I actually make <NuxtLink to="https://drive.google.com/drive/folders/1ybSnsOlCGJLBSq4J3zse6883kvYxB3lb?usp=sharing"> a LOT of stuff for fun</NuxtLink> in <NuxtLink to="https://processing.org/">Processing</NuxtLink> but I don't post it on GitHub because most of it isn't exactly useful software lol.</p>
      <p>This one actually has a story. I was sitting in class with my roommate and he was playing Super Hexagon on his phone. I watched him play for a while and then said, "I bet I could make that". So that night I did. We both had just taken a math test and while any normal person would have been relaxing, I was coding for fun like a weirdo. I finished the MVP that night and was completely done two days later!</p>
      <p>I find it kind of ridiculous that I was able to make this in such a short amount of time. Though, this same phenomenon crops up a lot when writing music for me (and many others I'm sure). You could spend months and years on something and never quite get it the way you want it, but then one day you get inspired, start something new, and completely finish it in a day or two. That was not supposed to rhyme.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/Supremely_Hexagonal'">Supremely_Hexagonal on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Peekaboo"
    timeframe="1 October 2021 - 21 October 2021"
    languages="Java"
    >
      <p>Another short and sweet one. Peekaboo lets you take screenshots from the terminal using Java's Robot class. That is all.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/Peekaboo'">Peekaboo on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Peekaboo"
    timeframe="26 July 2021 - 16 August 2021"
    languages="C#"
    technologies="Windows Forms, VEGAS Pro Script API"
    image-link="/images/projects/oscillator_randomizer_gui.png"
    image-alt="The GUI of my plugin VEGAS_Oscillator_Randomizer"
    >
      <p>When I first started using MAGIX VEGAS Pro 18, I found it generally very advanced and feature rich, but at the same time lacking in certain effects that are standard in most editing software I've used. When I found out how easy it was to make plugins for VEGAS, I kind of got a little obsessed and made a whole bunch of 'em! This actually was my first time ever making plugins and while there is hardly any information or tutorials online on how to make VEGAS plugins, I must say the API and docs- er... <em>doc</em> is quite good. Mostly.</p>
      <p>This was also my first time working with C# outside of Unity and I quite like it. It also helps that it was really easy to pick up since its syntax is exceptionally similar to Java except for the Capitalization Of Everything. Working with Windows Forms was also very fun. There's something I can't really explain about the look of those default Windows dialog boxes that's somewhat nostalgic and just generally cool to work with; I get that same feeling with Java's Swing using the default look-and-feel. I don't know what it is. Maybe I'm just weird like that. I definitely envision myself using C# for something else in the future.</p>
      <p>I guess I should talk about the actual plugins, huh? Well there are a couple of really simple ones like one that selects everything after the playhead and one that adds a VEGAS Picture In Picture effect to everything (because yes, I wanted a script for that). The big and complex ones include a "screen shake" effect, a super janky "chromatic aberration" effect, and a plugin that can animate any parameter of a video effect based on an oscillator, random number generator, or noise.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/Vegas-Scripts#readme'">VEGAS_Scripts on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="nitroguy10.github.io"
    timeframe="11 December 2016 - Ongoing (TODO sunset date hehe)"
    languages="Python, HTML, Sass, JavaScript"
    technologies="Jinja"
    >
      <p>Imagine doing web development for over 5 years without touching React or Vue anything like that, right guys? Heh heh heh (that was me). I did this big restructuring of my website in 2020 that used Jinja templates for all the pages! It was a pretty interesting learning process and it felt like a pretty clean solution... at the time. Either way, it was a very fun and enlightening project&mdash;so much so that I wrote a whole article about it back when I did it. Check it out!</p>
      <p class="project-link"><NuxtLink to="/articles/about_website.html">How This Website Was Made, A Story</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="ERS-OL"
    timeframe="24 June 2021 - 3 July 2021"
    languages="Python, HTML, CSS, JavaScript"
    technologies="Flask, Socket.io"
    image-link="/images/projects/ers-ol.png"
    image-alt="Egyptian Rat Screw Online"
    >
      <p>ERS-OL (Egyptian Rat Screw Online) is an online multiplayer web game version of my favorite card game, Egyptian Rat Screw. The game isn't actually being hosted anywhere right now so if you want to play it, you'd have to clone the repository and run the server yourself. It uses Python for the server and, unsurprisingly, JavaScript for the client.</p>
      <p>At the time, I was super proud of this project. I had never come close to doing a project involving networking at this scale or even at all. It took me an unprecedented amount of time and effort to complete it and I was very happy with the final product... if it weren't for the ping.</p>
      <p>*sigh* yeah... in practice this game is rather unplayable over the internet because the ping gives the host a massive advantage. Actually, this game runs quite well if played over LAN, but if you're able to play this over LAN, THEN WHY NOT JUST PLAY THE ACTUAL CARD GAME AHAHHAHAHAH.</p>
      <p>Despite all that, I'm really happy I was able to finish this project. At the very least, it reassured me that game development is not the career path for me :P</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/ERS-OL'">ERS-OL on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="ColorSplitter"
    timeframe="28 June 2021 - 29 June 2021"
    languages="Java"
    technologies="Swing"
    image-link="/images/projects/colorsplitter.png"
    image-alt="The GUI of ColorSplitter"
    >
      <p>ColorSplitter takes an input folder of images and isolates certain colors from that image (generating "whitemasks") and outputs them into a folder. I originally made it in Processing but then I realized I only used like 2 things from Processing so I remade it in pure Java. I'm not entirely sure what the applications for this are lol. I actually made this upon request from one of my friends. He needed a program that generated whitemasks for his game sprites or something so that program I did make.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/ColorSplitter'">ColorSplitter on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="DocLCD"
    timeframe="2 June 2021 - 4 June 2021"
    languages="Python, Arduino"
    technologies="PySerial, Pygame"
    >
      <p>DocLCD is a "word processor" of sorts for 20x4 character LCDs with I2C drivers. It's controlled by a Python program running on a Raspberry Pi which talks via serial to an Arduino program. The Arduino program then controls the character LCD through the LCD's I2C driver. The Python program accepts keyboard input and allows you type characters and traverse around the LCD screen.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/DocLCD'">DocLCD on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="TimeRefresher"
    timeframe="2 June 2021"
    languages="Java"
    technologies="Swing"
    image-link="/images/projects/timerefresher.png"
    image-alt="The GUI of TimeRefresher"
    >
      <p>I needed TimeRefresher for one very specific thing. "Press F5 at a certain time". Yep, that's it. I lovejust making programs to solve these tiny little inconveniences. Knowing how to code really <em>is</em> likehaving superpowers.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/TimeRefresher'">TimeRefresher on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="RoundUp"
    timeframe="7 May 2021 - 23 May 2021"
    languages="Python"
    image-link="/images/projects/roundup_visual.png"
    image-alt="A visual of what RoundUp does"
    >
      <p>RoundUp is a single Python script that copies all files from a directory tree into a single folder. The <NuxtLink :to="nitroguy.socials.github.link + '/RoundUp#readme'">README</NuxtLink> does a better job of explaining this so check it out if you're interested. Just like with TimeRefresher, I created this to automate a process I often have had to do manually. Specifically, to deal with photos that were automatically organized into folders by programs against my will.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/RoundUp'">RoundUp on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="tuscon"
    timeframe="21 March - 9 April 2021"
    languages="Python"
    technologies="BeautifulSoup"
    >
      <p>tuscon (yes, you read that right, that really is the name) is a super-simple web-templating library. All it is is HTML files with parameters, if statements, and for loops. I talk about my (unfortunate) reason for creating tuscon in that <NuxtLink to="./articles/about_website.html">old article about my website</NuxtLink>.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/tuscon'">tuscon on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="fructose"
    timeframe="19 June 2020"
    languages="Python, HTML, CSS, JavaScript"
    technologies="Flask, SQLite"
    image-link="/images/projects/fructose.png"
    image-alt="The fructose homepage"
    >
      <p>A sweet and simple file hosting service.</p>
      <p>This is another one-day project made by <NuxtLink to="https://prydt.xyz/">prydt</NuxtLink> and myself. You could call it a "sequel" to docbox. Making these two were super fun and I definitely learned a lot in the process. They were like mini self-run hackathons!</p>
      <p class="project-link"><NuxtLink to="https://github.com/woke-oats/fructose">fructose on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="docbox"
    timeframe="13 June 2020"
    languages="Python, HTML, CSS, JavaScript"
    technologies="Flask, SQLite"
    image-link="/images/projects/docbox.png"
    image-alt="The docbox homepage"
    >
      <p>A text storage server for you and all your friends. It's Pastebin basically.</p>
      <p><NuxtLink to="https://prydt.xyz/">prydt</NuxtLink> and I made this in one day during the 2020 COVID lockdown. This was my first experience working on a full-stack web app, albeit a simple one.</p>
      <p class="project-link"><NuxtLink to="https://github.com/woke-oats/docbox">docbox on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Pi555"
    timeframe="ca. 2016 - 22 December 2019"
    languages="Java"
    technologies="MIDICSV, Pi4J, Raspberry Pi GPIO"
    >
      <p>Pi555 was my first Computer Engineering, microcontroller-type project thing and boy oh boy did I bite off more than I could chew with this one. Though intimidating, I was able to finish this project and I used to consider it my <em>magnum opus</em>. It is VERY cool, trust me.</p>
      <p>...okay so I can't exactly <em>show</em> it to you but I guess I can describe what it is. So, a <NuxtLink href="https://en.wikipedia.org/wiki/555_timer_IC">555 timer</NuxtLink> is a chip that can be used to generate a square wave at a given frequency. With the right configuration, you can get it to play a tone on a speaker. My goal for this project was to play music using the tone generated by the 555 timer. The way you'd change the pitch of the tone is by changing the resistance between two of the chip's pins and I used a digital potentiometer for this.</p>
      <p>As if I hadn't already had my work cut out for me, knowing hardly anything about Computer Engineering stuff,I wanted to be able to use MIDI files as the source for the music. What all of this ultimately resulted inwas a Java program (probably should've used Python though) that read through a MIDI file and translated itinto something that the "music player" Java program could use. This "music player" program (which ran on aRaspberry PI) played the correct notes at the correct times on the 555 timer by sending bytes to the digitalpotentiometer through its GPIO pins.</p>
      <p>And... yeah. It worked. And it was awesome. I really wish I had something else to show you here. Sorry!</p>
    </ProjectsEntry>
    <ProjectsEntry
    title="ClickType"
    timeframe="6 May 2019 - 8 May 2019"
    languages="HTML, CSS, JavaScript"
    technologies="p5.js"
    >
      <p>Let's go straight from awesome and complex back to simple and ridiculous. Ever wanted to hear an annoying click sound every time you press a key? No? Too bad; ClickType. Now you can experience the cacophony of blue mechanical keyboard switches at no cost to you!</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.website.link + '/ClickType'">ClickType</NuxtLink></p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/ClickType'">ClickType on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="ResistorTool"
    timeframe="5 August 2018"
    languages="HTML, CSS, JavaScript"
    technologies="Bootstrap"
    >
      <p>Tired of memorizing vulgar acronyms to help you read the resistance values of resistors from the colored stripes? Or maybe you're just too lazy to learn them at all? Just input the colors into this tool and be enlightened.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.website.link + '/ResistorTool'">ResistorTool</NuxtLink></p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/ResistorTool'">ResistorTool on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="RoboPlato 2000"
    timeframe="ca. January 2018"
    >
      <p>Tired of memorizing vulgar acronyms to help you read the resistance values of resistors from the colored stripes? Or maybe you're just too lazy to learn them at all? Just input the colors into this tool and be enlightened.</p>
      <p class="project-link"><NuxtLink to="/articles/roboplato.html">The Essential Wisdom of RoboPlato 2000</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Jumpy"
    timeframe="17 April 2017 - 4 December 2018"
    languages="HTML, CSS, JavaScript"
    image-link="/images/projects/jumpy.gif"
    image-alt="A gif of Jumpy gameplay"
    >
      <p>Memories, memories. Jumpy is a game I "made" by half following a tutorial and half doing my own thing. I was a rather unexperienced but quickly-learning programmer at the time and I remember being so happy when I made a nested for-loop that read through the 2D arrays that stored the levels. I showed this game to a bunch of people at school and it was so awesome to see them all play it and subsequently rage at how hard it was. To this day I still have the list on my phone that contains the names of the people I knew who beat Jumpy. All 13 of them.</p>
      <p>The game itself is a pretty basic HTML5 canvas web game. It's a typical 2D platformer with positively asinine level design. The difficulty curve is outta wack. What's funny is that whenever I found a bug with the physics, instead of fixing it, I designed levels that used that bug. The epitome of "it's not a bug, it's a feature". There's also a level creator, which is pretty awesome.</p>
      <p>P.S. If you're one of my friends from school and you came to my website just to look for Jumpy, you found it! Congrats and welcome home! :)</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.website.link + '/Jumpy'">Jumpy</NuxtLink></p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/Jumpy'">Jumpy on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="Dodge3"
    timeframe="18 March 2017 - 15 June 2017"
    languages="HTML, CSS, JavaScript"
    image-link="/images/projects/dodge3.gif"
    image-alt="A gif of Dodge3 gameplay"
    >
      <p>Another HTML5 canvas web game. This one's remarkably less ...remarkable than Jumpy. Just dodge the red rectangles. Not much else to say besides that this was my first big foray into JavaScript. Oh, and I made <NuxtLink :to="nitroguy.socials.github.link + '/Dodge3/blob/master/music.mp3?raw=true'">music</NuxtLink> for this game that doesn't play anymore because of autoplay restrictions and poor implementation lol.</p>
      <p>And by the way, can we talk about what a horrible name "Dodge3" is? It sounds like it's the third entry in the "Dodge" series but nope. It's called that because there are 3 positions you can move to. How fun.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.website.link + '/Dodge3'">Dodge3</NuxtLink></p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/Dodge3'">Dodge3 on GitHub</NuxtLink></p>
    </ProjectsEntry>
    <ProjectsEntry
    title="CalcGames"
    timeframe="5 January 2017 - 11 July 2017"
    languages="TI-Basic"
    image-link="/images/projects/serpent.gif"
    image-alt="A gif of Serpent gameplay"
    image-2-link="/images/projects/matrix.gif"
    image-2-alt="A gif of Matrix Racer gameplay"
    >
      <p>TI-Basic programming is a confusing mess that I absolutely love. There's a huge active community dedicated to programming for TI-84 calculators, and I decided to take part by making some of my own games. If you too want to waste your time programming for these calculators, it's super fun and I highly recommend learning if you're interested. Here's an <NuxtLink to="http://tibasicdev.wikidot.com/starter-kit">awesome wiki</NuxtLink> with tons of good information.</p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.website.link + '/CalcGames'">CalcGames</NuxtLink></p>
      <p class="project-link"><NuxtLink :to="nitroguy.socials.github.link + '/CalcGames'">CalcGames on GitHub</NuxtLink></p>
    </ProjectsEntry>
  </div>
</template>
