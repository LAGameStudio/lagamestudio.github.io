# [indiedev.space](https://indiedev.space)

Not sure why you are here?  Maybe visit the  [website](https://indiedev.space/) first.

Home of the IndieDev.space Independent Developer Space, a place for free marketing for indie games, and where indie game developers can gather with a community of other indie game developers, and where indie game players can come to explore what's out there in the independent gaming space.  We mean truly independent developers.  Generally, we do not consider mid-sized software companies to be "indie" but there are always exceptions.  This place was created for the "little ones" of the indie space.

IndieDev.space provides a place for small time developers to be discovered by each other, gamers, influencers, and media outlets.  It was founded by Lost Astronaut Studios.  It was inspired by HackerNews, and iiRcade Dev Spot discord.

## If you don't mind a delay, feel free not to follow this readme

Alternatively to creating a pull request (recommended and preferred), you can fill out the Google Intake Form, though it may cause a brief delay.  It also requires you to have a verified email to upload your required image file.  It's ok to use this, it's just not as easy for us to approve.

The alternate Google Intake Form for IndieDev.space is [right here](https://docs.google.com/forms/d/e/1FAIpQLSfvpeEIMIuZLacTq4gUBMSEiijRkqpXAExWKJ-KEXmvvMay6Q/viewform?usp=sf_link)

## Are you an indie developer?

To add yourself to the Indie Dev Space, so you can market your existence, and get a link back to your website, you must create a Pull Request, adding an entry to ``data.js``, that contains at least an image and some text.  You can see the [Wiki](https://github.com/LAGameStudio/lagamestudio.github.io/wiki) for other options you can add to the JSON.

Generally entries in ``data.js`` are to games or to game developers.

Your pull request will be merged if:
* You are an indie game developer or you make game development tools or open source
* You have at least 1 title published on at least one platform.  Qualifying platforms are:  GoG, Steam, Itch, Switch, Atari VCS Store, and perhaps others.
* Your pull request fits within the guidelines for decency and appropriateness.  Basically, it's a game or press or game company linkback, and it does not contain obscene words.  The link is validated manually, and your descriptive content matches our content style.
* You are already a member of our Discord and have a Discord Featured Channel dedicated to you.  See the Discord for how to obtain this. Your submission must  include your featured Discord channel as a tag, so your posts can be grouped.
* Your entry is not determined to be redundant.  You may post once and one time only for your company, and once and one time only for each game.  If you have too many games listed, a new game listing should replace an older game listing.  You may link to a franchise or series of games as a game listing.
* Your submission must include a web optimized image no bigger than 15mb and it must have a unique name and appear in the images/ folder.
* Your submission must link to your game or your website, only.  No URL shorteners are permitted.  "Your website" can be a linke to a profile on a major platform like Steam or Itch, or your X.com (Twitter) profile, or your IG (Instagram) profile, etc.
* Your submission must contain a title and paragraph in English, but may also be translated to one or more other languages optionally.  Language is detected by the browser, but defaults to English.
* Your submission should include the current date.
* Your submission should include your location as originating country, and, optionally, city/state/province or other identifying information, but not your real name, address or telephone number.
* If this is your first pull request, the user account on github will become our primary way to validate changes in the future as an origination point.  You should include your Discord username (for the one on the Discord) If something changes, let us know by contacting us in [Issues](https://github.com/LAGameStudio/lagamestudio.github.io/issues) here on this github.

The only other kind of pull request we entertain are corrections or revisions.

We reserve the right to reject or remove entries at any time for any reason.  Most of the time is due to dead links or malware.

## JSON Template

The required skill is that you should understand how to create JSON by following the template below as part of your pull request.  Ask around on the Discord for help regarding this if you aren't sure.  You need to add to the top of the ``data.js`` file.


```
 {
   kind: "company",
   title: "Lost Astronaut Studios",
   image: "images/LALogo.png",
   date: "9-24-2024",
   location: "United States",
   channel: "#lost-astronaut",
   linkback: "https://lostastronaut.com", 
   links: [
     { kind: "discord", url: "https://discord.gg/9vkNPJr" },
     { kind: "steam", url: "https://store.steampowered.com/dev/lost" },
     { kind: "facebook", url: "https://www.facebook.com/lostastro/" },
     { kind: "github", url: "https://github.com/LAGameStudio" },
     { kind: "twitter", url: "x.com/LAGameStudio" },
     { kind: "twitch", url: "https://www.twitch.tv/lostastronautstudios" },
     { kind: "youtube", url: "https://www.youtube.com/@LAGameStudio/playlists" }
   ],
   paragraph: "Lost Astronaut Studios is a Pittsburgh-based independent game company founded by a Carnegie Mellon alum in 2006, and continues producing retro-inspired science fiction games.  Support local and independent software producers like Lost Astronaut by purchasing Apolune 2 on Steam. Join our Discord to interact more closely with us and our community. Lost Astronaut Studios produces open source software to help the junior and independent game developer community."
 },
```

* When making a pull request, place at the top of the file after the first comment, inside the array, and make sure to include the trailing comma.
* All fields are required.
* The "date" field is in the format DD-MM-YYYY
* Under "kind", for the main post, it can be "company", "game", "tool" (for indie dev tool makers) or "source" (for open source releases)
*  Under "links", you are not required to have all of the ones listed.   Current supported social media types are: "discord", "steam", "itch", "facebook", "gog", "github", "twitter", "twitch" and "instagram"
* Content "paragraph" should be a single line of text in quotes.  You may use basic HTML only; only the "B" and "I" tags to bold and italicize.

## Support

Use the [Issues](https://github.com/LAGameStudio/lagamestudio.github.io/issues) section to report anything, make a suggestion or ask for help.  You can also locate us on the Discord, but we will most likely direct you here if you have issues with the website.
