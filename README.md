# athcal - open calendar components for athletics

This project will contain some pure front-end components to display competition listings in athletics.

The idea is to produce pages suitable for inclusion with iframes, or as web components, in other
web sites - such as clubs. 

## Examples

[VueJS calendar with clickable months](https://opentrack.run/athcal/caldisplay_vue.html)
[Vanilla JS calendar ](https://opentrack.run/athcal/caldisplay_vanilla.html) (unstyled)


## sample data

Data is sourced from OpenTrack, and will be 100% open data.  Thus, it only knows of competitions where someone has added that to
the Opentrack database.  However we are confident that this will be pretty big in 2021 due to a growing
number of agreements.

An initial sample data file is available at https://file.opentrack.run/live/euroath/european_calendar_2020.json

This site serves CORS-safe files which are suitable for loading from JS pages, behind Amazon Cloudfront CDN - so there will be no impact on OpenTrack to people loading the data up, and calendars should .

OpenTrack will make more available in the same format - most likely by country and year - in the next few days; most probably as nightly jobs which create JSON files meeting particular criteria.

## Contributing

We welcome ideas and contributions.  If you have a nice idea for presenting calendar data, feel free to make a page up and contribute it.  Let's explore the easiest ways to find a competition.

OpenTrack uses VueJS, which has a plethora of nice components available - but we're open to other ideas too.  Contributions can be a subdirectory if there's a build process, or just an HTML page if it's all inline.


