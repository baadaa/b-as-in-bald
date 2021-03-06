---
layout: portfolio
title: "NYC Life List App"
header_image: "nyc-lifelist.jpg"
header_color: "#000"
header_noshadow: true
breadcrumb_bg: true
tile_image: "nyc-life-list-442x330.gif"
lang: en
ref: lifelist
date: 2017-02-16
description: "Open source web app that finds three crucial elements in New York street life: wifi, subway, and restrooms."
tags:
  - UX/UI design
  - front-end development
images:
  - thumb: "nyc-life-01_thumb.jpg"
    link: "nyc-life-01.jpg"
    alt: "Responsive layout as rendered on mobile devices"
  - thumb: "nyc-life-02_thumb.jpg"
    link: "nyc-life-02.jpg"
    alt: "Search overlay"
  - thumb: "nyc-life-03_thumb.jpg"
    link: "nyc-life-03.jpg"
    alt: "Location details overlay"
  - thumb: "nyc-life-04_thumb.gif"
    link: "nyc-life-04.gif"
    alt: "Layout responding to window resize"

category:
  - interactive
---
<section class="project-summary">
  <h1>Open source web app that finds three crucial elements in New York street life: <em>wifi, subway, and restrooms.</em></h1>
  <section class="info">
    <h3>Duties:</h3>
    <p>design, develop</p>
  </section>
  <section class="info">
    <h3>Languages:</h3>
    <p>JavaScript, <small>HTML/(S)CSS</small></p>
  </section>
  <section class="info">
    <h3>Tools:</h3>
    <p>Google Maps API, NYC Open Data API, Geocod.io, csvjson.com</p>
  </section>
  <section class="info">
    <h3>Challenge:</h3>
    <p>Living and working in New York city means spending quite some time on the streets, and there are three most needed elements in New York street life that just can't be found when we desperately need them: <em>Wifi hotspots, subway entrances, and restrooms</em>.
    </p>
  </section>
  <section class="info">
    <h3>Solution:</h3>
    <p>This responsive web app finds the nearest access you have, whether it's subway entrance, WiFi signal, or a public restroom that you need. Taking advantage of <a href="https://opendata.cityofnewyork.us/" target="_blank">NYC Open Data</a> and a handful of NYC restroom datasets available online <em>(<a href="http://www.toiletfinder.com/" target="_blank">here</a>, <a href="http://diaroogle.com/toilets" target="_blank">here</a>, and <a href="http://m3.mappler.net/nyrestroom/" target="_blank">here</a>)</em>, I mapped out each geolocation details. Users can simply drag the map and click each icon, or search location by address or/and zip code.
    </p>
  </section>
  <section class="info">
    <h3>Dev notes:</h3>
    <p>For smoother user experience and reduce server requests, each API call response is stored at <code>localStorage</code>, which ensures to minimize unnecessary API calls and thus faster response to user actions. Practical usage could be limited by how actively the data feed is maintained.
    </p>
  </section>
</section>
<div class="buttons">
  <span class="unselectable">
  <a href="https://baadaa.github.io/nyc-life-list/" title="Launch live app" target="_blank">Launch Live App</a></span>
  <span class="unselectable"><a href="https://github.com/baadaa/NYC-Life-List" title="GitHub repo" target="_blank">View GitHub Repo</a></span>
</div>
