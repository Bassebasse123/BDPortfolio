import React from "react";

const LandingPage = () => {
  return (
    <main class="allContent">
      <section class="marginSection">
        <p class="backgroundHtmlElement">&lt;html&gt;</p>
        <p class="backgroundHtmlElement">&lt;body&gt;</p>
        <p class="backgroundHtmlElement">&lt;h1&gt;</p>
        <h1 class="typewriter">
          Hi,<br></br>I'm <span className="colorfulLetter">B</span>
          <span>astian Dammann,</span>
          <br></br>web developer
        </h1>
        <p class="backgroundHtmlElement">&lt;h1&gt;</p>
        <p class="backgroundHtmlElement">&lt;p&gt;</p>

        <p class="headingAddition">
          React, Javascript / SASS / HTML / Bootstrap / Node / Express
        </p>
        <p class="backgroundHtmlElement">&lt;/p&gt;</p>
        <button class="contactButton">Contact me</button>
      </section>

      <section class="marginSection"></section>
      <section class="marginSection"></section>
      <section class="marginSection"></section>
    </main>
  );
};

export default LandingPage;
