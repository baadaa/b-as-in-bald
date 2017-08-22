---
layout: portfolio
title: "뉴욕 라이프 리스트 앱"
header_image: "nyc-lifelist.jpg"
header_color: "#000"
header_noshadow: true
breadcrumb_bg: true
tile_image: "nyc-life-list-442x330.gif"
lang: ko
ref: lifelist
date: 2017-02-16
permalink: "/k/portfolio/:title/"
description: "Open source web app that finds three crucial elements in New York street life: wifi, subway, and restrooms."
tags:
  - UX/UI 디자인
  - 프론트엔드
images:
  - thumb: "nyc-life-01_thumb.jpg"
    link: "nyc-life-01.jpg"
    alt: "반응형 레이아웃"
  - thumb: "nyc-life-02_thumb.jpg"
    link: "nyc-life-02.jpg"
    alt: "검색 오버레이 스크린"
  - thumb: "nyc-life-03_thumb.jpg"
    link: "nyc-life-03.jpg"
    alt: "장소 세부사항 화면"
  - thumb: "nyc-life-04_thumb.gif"
    link: "nyc-life-04.gif"
    alt: "브라우저 창에 따른 반응형 구조"
category:
  - interactive
---
<section class="project-summary">
  <h1>막상 필요할 때면 보이지 않는, 뉴욕 일상 활동에서 가장 필요한 세 가지를 손쉽게 찾아주는 오픈소스 툴: <em>와이파이, 전철역, 화장실.</em></h1>
  <section class="info">
    <h3>역할:</h3>
    <p>디자인, 프로그래밍</p>
  </section>
  <section class="info">
    <h3>언어:</h3>
    <p>JavaScript, <small>HTML/(S)CSS</small></p>
  </section>
  <section class="info">
    <h3>도구:</h3>
    <p>구글맵 API, NYC 오픈데이터 API, Geocod.io, csvjson.com</p>
  </section>
  <section class="info">
    <h3>상황:</h3>
    <p>도보 이동이 막대한 도시인 뉴욕에서 거주하고 생활하려면, 당연히 거리에서 소모하는 시간의 비중도 높아집니다. 하지만 이동중에 반드시 필요한 자원들이 평상시엔 흔하디 흔한 것 같다가도, 막상 찾으려고 보면 눈에 띄지 않을 때가 흔하지요. 공공 와이파이, 지하철 출입구, 개방된 화장실들을 간편히 찾을 수 있는 뉴욕 맞춤형 웹앱이 있다면 얼마나 편리할까요.
    </p>
  </section>
  <section class="info">
    <h3>솔루션:</h3>
    <p>뉴욕시에서 직접 관리하는 <a href="https://opendata.cityofnewyork.us/" target="_blank">뉴욕 오픈데이터</a> 서비스와 기존에 공개된 몇 가지 뉴욕 공중화장실 데이터 세트(<a href="http://www.toiletfinder.com/" target="_blank">여기</a>, <a href="http://diaroogle.com/toilets" target="_blank">여기</a>, <a href="http://m3.mappler.net/nyrestroom/" target="_blank">여기</a>)를 종합해서, 위치정보를 구글맵 상에 표시하는 웹 애플리케이션을 구축하였습니다. 맵을 드래그하거나 주소/우편번호를 입력함으로써 손쉽게 원하는 지역의 원하는 자원을 검색할 수 있습니다.
    </p>
  </section>
  <section class="info">
    <h3>기타 사항:</h3>
    <p>서버 리퀘스트를 최소화하고 사용자 대기 시간을 단축시키기 위해서, 각각의 API세션은 <code>localStorage</code> 기반으로 사용자 브라우저에 저장하도록 설계하였습니다. 
    </p>
  </section>
</section>

<div class="buttons">
  <span class="unselectable">
  <a href="https://baadaa.github.io/nyc-life-list/" title="Launch live app" target="_blank">Launch Live App</a></span>
  <span class="unselectable"><a href="https://github.com/baadaa/NYC-Life-List" title="GitHub repo" target="_blank">View GitHub Repo</a></span>
</div>
