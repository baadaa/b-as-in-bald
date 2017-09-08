---
layout: portfolio
title: "Movie Night iOS App"
header_image: "pamn-header.jpg"
header_color: "#000"
header_noshadow: true
breadcrumb_bg: true
date: 2017-01-16
lang: en
ref: pamn
description: "iOS app that help organize movie night events by assessing participants' tastes and suggesting the best film to watch together."
tags:
  - UX/UI design
  - front-end development
tile_image: "pamn-442x330.gif"
images:
  - thumb: "pamn_sketch-thumb.jpg"
    link: "pamn_sketch.jpg"
    alt: "initial UX hand-sketches"
  - thumb: "pamn-keyscreens_thumb.png"
    link: "pamn-keyscreens.jpg"
    alt: "key screens at a glance"
  - thumb: "pamn-auth-thumb.gif"
    link: "pamn-auth.gif"
    alt: "Login with Facebook"
  - thumb: "pamn-movie-sections_thumb.gif"
    link: "pamn-movie-sections.gif"
    alt: "Browsing various movie sections"
  - thumb: "pamn-movie-details-thumb.gif"
    link: "pamn-movie-details.gif"
    alt: "Viewing movie details and entering insight"
  - thumb: "pamn-rsvp_thumb.gif"
    link: "pamn-rsvp.gif"
    alt: "Browsing events and RSVPing"
category:
  - interactive
  - visual
---
<section class="project-summary">
  <h1>iOS app that help organize movie night events by assessing participants' tastes and suggesting the best film to watch together.</h1>
  <section class="info">
    <h3>Duties:</h3>
    <p>UX design, front-end design &amp; development <em>(<small>VIEW</small> component of MVC pattern)</em></p>
  </section>
  <section class="info">
    <h3>Languages:</h3>
    <p><small>SWIFT</small></p>
  </section>
  <section class="info">
    <h3>Tools:</h3>
    <p>Xcode <small>IDE</small></p>
  </section>
  <section class="info">
    <h3>Challenge:</h3>
    <p>When organizing a movie night with friends, choosing the film to watch together can be a painful process. The larger the group, the harder to select the perfect movie that <em>everybody</em> would enjoy watching. How do you make it easy to gather friends, pick time and place, and most importantly, select the perfect film to screen?
    </p>
  </section>
  <section class="info">
    <h3>Solution:</h3>
    <p>The main idea was to devise an impeccable recommendation engine, which will collect users' preferences and insights on a variety of films and present the perfect selections for a movie night by cross-analyzing participants' taste database. Users can browse a huge list of movies provided through <small><a href="https://www.themoviedb.org/" target="_blank">TheMovieDB API</a></small>, and choose to leave quick insights on each film: <span><small>1) did you watch this film? 2) would you watch it with your friends? 3) how bad do you want to watch it?</small></span> When it's time for gathering, users can simply create an event by choosing the date and time, connected via Facebook Event, and inviting friends&mdash;and the app will take care of the rest by recommending the impeccable film to watch together.
    </p>
  </section>
  <section class="info">
    <h3>Execution:</h3>
    <p>A four-people team divided roles per MVC pattern: <small>MODEL</small>, <small>VIEW</small>, and <small>CONTROLLER</small>. <strong>My responsibility was</strong> to design and build the <small><b>VIEW</b></small> component&mdash;that is, to 1) architect the user experience, 2) design user interface and layout, and 3) ultimately program the front-end view of the application using iOS native <small>SWIFT</small>. The other members would separately develop <small>MODEL</small> and <small>CONTROLLER</small> components that handle recommendation engine and other back-end functionality, and plug them into the front-end <small>VIEW</small>.
    </p>
  </section>
  <section class="info">
    <h3>Limitation:</h3>
    <p>Three-week sprint resulted in functional front-end shell of the app, but the complete app never got to come to fruition. Although <small>API</small> integration was well on its way with Facebook and <small>TMDb</small>, the core recommendation engine development came to a halt as the responsible team members got pulled into other engagements.
    </p>
  </section>
</section>

<div class="buttons">
  <span class="unselectable">
  <a href="/download/pamn_draft_r1.pdf" title="Download initial UX draft" target="_blank">Download initial UX draft</a></span>
  <span class="unselectable"><a href="https://github.com/baadaa/plan-a-movie-night" title="GitHub repo" target="_blank">View GitHub Repo</a></span>
</div>
