import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./Blog.css";

const Blog = () => {
  return (
    <Container className="blog-container">
      <div className="blog p-4 mb-5 shadow rounded">
        <div className="question-container">
          <h4>What is Cors?</h4>
        </div>
        <div className="ans-container">
          <p>
            <FaArrowRight /> Cross-Origin Resource Sharing (CORS) is an
            HTTP-header based mechanism that allows a server to indicate any
            origins (domain, scheme, or port) other than its own from which a
            browser should permit loading resources. CORS also relies on a
            mechanism by which browsers make a "preflight" request to the server
            hosting the cross-origin resource, in order to check that the server
            will permit the actual request. In that preflight, the browser sends
            headers that indicate the HTTP method and headers that will be used
            in the actual request.
          </p>
        </div>
      </div>
      <div className="blog p-4 mb-5 shadow rounded">
        <div className="question-container">
          <h4>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h4>
        </div>
        <div className="ans-container">
          <p>
            <FaArrowRight /> There are some intuitive use cases of firebase to
            be used in any application. Such as:
            <li>
              Give users a quick, intuitive sign-in process with Firebase
              Authentication.
            </li>
            <li>Easy sign-in with any platform</li>
            <li>Comprehensive and strong security</li>
            <li>Fast implementation of the authentication system.</li>
            <br />
            Although, firebase offers an increasingly sophisticated array of
            services that takes care of various development requirements, it's
            not always the easiest, fastest, or most affordable option. There
            are some alternatives of firebase.
            <li>Back4App</li>
            <li>Backendless</li>
            <li>Kuzzle</li>
            <li>Aws Amplify</li>
            <li>Heroku</li>
          </p>
        </div>
      </div>
      <div className="blog p-4 mb-5 shadow rounded">
        <div className="question-container">
          <h4>How does the private route work?</h4>
        </div>
        <div className="ans-container">
          <p>
            <FaArrowRight /> The private route component renders the child
            component inside it based on the condition if the user is logged in,
            otherwise it returns to the page where we want the user to send.
            That's how the private route works.
          </p>
        </div>
      </div>
      <div className="blog p-4 mb-5 shadow rounded">
        <div className="question-container">
          <h4>What is Node? How does Node work?</h4>
        </div>
        <div className="ans-container">
          <p>
            <FaArrowRight /> Node.js is an open-source, cross-platform
            JavaScript runtime environment and library for running web
            applications outside the client's browser. Ryan Dahl developed it in
            2009, and its latest iteration, version 15.14, was released in April
            2021. Developers use Node.js to create server-side web applications,
            and it is perfect for data-intensive applications since it uses an
            asynchronous, event-driven model.
            <br />
            Node js is used as a backend service where javascript works on the
            server side of the application. Node.js runs on chrome v8 engine
            which converts javascript code into machine code. <br />
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
