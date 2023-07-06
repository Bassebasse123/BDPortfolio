import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="landingPage">
      <section className="marginSection">
        <motion.p
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="backgroundHtmlElement"
        >
          &lt;html&gt;
        </motion.p>
        <motion.p
          initial={{ x: 800, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="backgroundHtmlElement"
        >
          &lt;body&gt;
        </motion.p>
        <motion.p
          initial={{ x: 1200, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="backgroundHtmlElement"
        >
          &lt;h1&gt;
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hi,<br></br>I'm <span className="colorfulLetter">B</span>astian
          Dammann,
          <br></br>
          <span>web developer</span>
        </motion.h1>
        <motion.p
          initial={{ x: 1200, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="backgroundHtmlElement"
        >
          &lt;/h1&gt;
        </motion.p>
        <motion.p
          initial={{ x: 1200, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="backgroundHtmlElement"
        >
          &lt;p&gt;
        </motion.p>

        <motion.p
          initial={{ x: 1200, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="headingAddition"
        >
          React /Javascript / SASS / HTML / Bootstrap / Node / Express
        </motion.p>
        <motion.p
          initial={{ x: 1200, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="backgroundHtmlElement"
        >
          &lt;/p&gt;
        </motion.p>
        <motion.p
          initial={{ x: 800, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="backgroundHtmlElement"
        >
          &lt;button&gt;
        </motion.p>

        <NavLink to={"/BDPortfolio/contact"}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="contactButton"
          >
            Contact me
          </motion.button>
        </NavLink>
        <motion.p
          initial={{ x: 800, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="backgroundHtmlElement"
        >
          &lt;/button&gt;
        </motion.p>
        <motion.p
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="backgroundHtmlElement"
        >
          &lt;/html&gt;
        </motion.p>
      </section>
    </main>
  );
};

export default LandingPage;
