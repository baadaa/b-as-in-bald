---
layout: portfolio
title: "영 앤 루비캠 그룹"
header_image: "yrg-pattern.png"
header_color: "#003B75"
header_noshadow: true
breadcrumb_bg: true
date: 2017-03-24
lang: ko
ref: yrg
permalink: "/k/portfolio/:title/"
description: "Corporate identity system"
tags:
  - identity design
  - visual design
tile_image: "yrg-442x330.jpg"
images:
  - thumb: "yrg-business-442x330.jpg"
    link: "yrg-business-card.jpg"
    alt: "Business cards"
  - thumb: "yrg-website-442x330.jpg"
    link: "yrg-website.jpg"
    alt: "Website layout"
  - thumb: "yrg-graphics-442x330.gif"
    link: "yrg-graphics.png"
    alt: "Identity graphics"
  - thumb: "yrg-banner-442x330.jpg"
    link: "yrg-banners.jpg"
    alt: "Standing banners"
  - thumb: "yrg_glass_marker_442x330.jpg"
    link: "yrg_glass_marker_r1_1.jpg"
    alt: "Glassdoor markers"
  - thumb: "yrg-glassdoor-442x330.jpg"
    link: "yrg-glassdoor-drawing.png"
    alt: "Interior drawing"
category:
  - identity
  - visual
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
    <p>This responsive web app finds the nearest access you have, whether it's subway entrance, WiFi signal, or a public restroom that you need. Taking advantage of <a href="https://opendata.cityofnewyork.us/" target="_blank">NYC Open Data</a> and a handful of NYC restroom datasets available online <em>(<a href="http://www.toiletfinder.com/" target="_blank">here</a>, <a href="http://diaroogle.com/toilets" target="_blank">here</a>, and <a href="http://m3.mappler.net/nyrestroom/" target="_blank">here</a>)</em>, I mapped out each geolocation details. Users can simply drag the map and click each icon, or search location by address or/and zip code. For smoother user experience and reduce server requests, each API call response is stored at <code>localStorage</code>, which ensures to minimize unnecessary API calls and thus faster response to user actions.
    </p>
  </section>
</section>
