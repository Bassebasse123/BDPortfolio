import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.main
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="contactForm"
    >
      <h1>Contact Form</h1>
      <p>Please let me know how I can help you!</p>
      <form method="POST" action="https://register-demo.freecodecamp.org">
        <fieldset>
          <div class="text-input">
            <label for="first-name">First Name: </label>
            <input id="first-name" name="first-name" type="text" required />
            <span class="separator"> </span>
          </div>

          <div class="text-input">
            <label for="last-name">Last Name: </label>
            <input id="last-name" name="last-name" type="text" required />
            <span class="separator"> </span>
          </div>

          <div class="text-input">
            <label for="age">Age (years): </label>
            <input id="age" type="number" name="age" min="13" max="120" />
            <span class="separator"> </span>
          </div>

          <div class="text-input">
            <label for="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <span class="separator"> </span>
          </div>

          <div class="text-input">
            <label for="new-password">Create a New Password:</label>
            <input
              id="new-password"
              name="new-password"
              type="password"
              pattern="[a-z0-5]{8,}"
              required
            />
            <span class="separator"> </span>
          </div>
        </fieldset>
        <fieldset>
          <label for="personal-account">
            <input
              id="personal-account"
              type="radio"
              name="account-type"
              class="inline"
            />{" "}
            Personal request
          </label>
          <label for="business-account">
            <input
              id="business-account"
              type="radio"
              name="account-type"
              class="inline"
            />{" "}
            Business request
          </label>
          <label for="terms-and-conditions">
            <input
              id="terms-and-conditions"
              type="checkbox"
              required
              name="terms-and-conditions"
              class="inline"
            />{" "}
            I accept that my data will be stored, but not shared.
          </label>
        </fieldset>
        <fieldset>
          <label for="request-file">
            Upload a file for your request:{" "}
            <input id="request-file" type="file" name="file" />
          </label>

          <div class="text-input">
            <label for="referrer">
              How did you hear about me?
              <select id="referrer" name="referrer">
                <option value="">choose one</option>
                <option value="1">Application</option>
                <option value="2">LinkedIn</option>
                <option value="3">Digital Career Institute</option>
                <option value="4">Agentur fuer Arbeit</option>
                <option value="5">Search Engine</option>
                <option value="6">Industrial Fair</option>
                <option value="7">Other</option>
              </select>
            </label>
          </div>

          <div class="text-input">
            <label for="bio">What's your request about?</label>
            <textarea
              id="bio"
              name="bio"
              rows="3"
              cols="30"
              placeholder="..."
            ></textarea>
            <span class="separator"> </span>
          </div>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </motion.main>
  );
};

export default ContactPage;
