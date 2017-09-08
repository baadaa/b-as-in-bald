---
layout: portfolio
title: "무비나잇 iOS 앱"
header_image: "pamn-header.jpg"
header_color: "#000!important"
header_noshadow: true
breadcrumb_bg: true
date: 2017-01-16
lang: ko
ref: pamn
description: "친구들과 모여 즐기는 영화관람 이벤트를 손쉽게 기획하고 싶은 사람들을 위해서. 참석 인원의 취향을 종합 분석해서 최적의 영화 타이틀을 추천해 주고 시간/장소를 관리해 주는 iOS 앱."
permalink: "/k/portfolio/:title/"
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
  <h1>친구들과 모여 즐기는 영화관람 이벤트를 손쉽게 기획하고 싶은 사람들을 위해서. 참석 인원의 취향을 종합 분석해서 최적의 영화 타이틀을 추천해 주고 시간/장소를 관리해 주는 iOS 앱.</h1>
  <section class="info">
    <h3>역할:</h3>
    <p>UX 디자인, 프론트엔드 개발 <em>(MVC 패턴에 따른 <small>VIEW</small> 컴포넌트)</em></p>
  </section>
  <section class="info">
    <h3>언어:</h3>
    <p><small>SWIFT</small></p>
  </section>
  <section class="info">
    <h3>도구:</h3>
    <p>Xcode <small>IDE</small></p>
  </section>
  <section class="info">
    <h3>배경:</h3>
    <p>지인들을 모아 영화관람 이벤트를 추진할 때면, 다같이 즐겁게 볼 수 있는 영화를 고르기가 가장 큰 난관이 됩니다. 참가자가 많으면 많을수록, <em>모두의 마음에 들만한</em> 선택을 하기는 그만큼 더 까다로워지지요. 친구들을 모으고, 시간과 장소를 정하고, 가장 중요한 영화 상영 옵션을 고르는 과정을 수월하게 해줄 방법은 없을까요?
    </p>
  </section>
  <section class="info">
    <h3>대응책:</h3>
    <p>핵심 아이디어는 사람들의 영화 취향을 누적적으로 취합해서 비교 분석해주는 추천 알고리즘 엔진을 구현하는 것이었습니다. 사용자들이 평상시에 영화 정보를 검색하고 살펴보면서 남겼던 피드백을 기반으로 기능을 구현하기 위해서, <small><a href="https://www.themoviedb.org/" target="_blank">TheMovieDB API</a></small>를 통해 수많은 영화 정보를 제시하고 사용자들로 하여금 간단한 답변을 남기게끔 하였습니다: <span><small>1) 이 영화를 본 적이 있나요? 2) 친구들과 함께 이 영화를 볼 의향이 있나요? 3) 이 영화를 얼마나 보고 싶은가요?</small></span> 이벤트를 추진하고 싶을 때는, 페이스북에 연동된 이벤트 기능을 통해 간단히 시간과 장소를 설정하고 참가자들을 초대만 하고 나면, 관람할 영화 옵션은 앱이 알아서 분석/계산하고 추천해주게 됩니다.
    </p>
  </section>
  <section class="info">
    <h3>역할 분담:</h3>
    <p>팀 인원은 총 4명이었고, MVC패턴에 따라 <small>MODEL</small>, <small>VIEW</small>, <small>CONTROLLER</small>를 담당하는 식으로 역할을 나누었습니다. <strong>제가 책임진 역할은</strong> <small><b>VIEW</b></small> 컴포넌트를 디자인하고 프로그래밍하는 것으로, 1) 사용자 흐름과 UX를 기획하고, 2) 인터페이스와 레이아웃을 디자인하여, 3) 최종적으로 프론트엔드 뷰를 <small>SWIFT</small> 언어로 구현해내는 일이었습니다. 그 과정동안 다른 팀원들은 따로 <small>MODEL</small>과 <small>CONTROLLER</small>의 핵심 알고리즘과 백엔드 기능 모듈들을 개발한 다음, 마지막으로 프론트엔드 <small>VIEW</small>에 연결하기로 기획하였습니다.
    </p>
  </section>
  <section class="info">
    <h3>한계:</h3>
    <p>아이디어 구상 회의를 마치고 총 3주간 작업 과정을 거쳐 프론트엔드 틀을 완성하였지만, 최종적인 앱 개발까지는 완성되지 못하고 말았습니다. 페이스북과 TMDB에 대한 <small>API</small> 연결은 매끄럽게 진행되고 있었으나, 앱의 핵심 알고리즘인 분석/추천 모듈을 개발하던 팀원들이 다른 업무(생업)로 시간을 할애하기 어려워지면서 개발 과정이 더뎌지다가 프로젝트 전체가 잠정적으로 중단된 상태입니다.    </p>
  </section>
</section>

<div class="buttons">
  <span class="unselectable">
  <a href="/download/pamn_draft_r1.pdf" title="Download initial UX draft" target="_blank">UX 최초시안 PDF 다운로드</a></span>
  <span class="unselectable"><a href="https://github.com/baadaa/plan-a-movie-night" title="GitHub repo" target="_blank">깃허브 저장소 바로가기</a></span>
</div>
