import { useEffect, useState, useRef } from "react";
import { projectsList } from "../components/data";
import Head from "next/head";
import IntroOverlay from "../components/introOverlay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { faGithub, faLinkedin, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight,} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home({ project }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const projectsRef = useRef(null);

  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "auto";
  };

  const executeScroll = () => projectsRef.current.scrollIntoView();

  const scrollToProject = () => {
    if (typeof window !== "undefined") {
      if (project) {
        const element = document.getElementById(project);

        if (element) {
          element.scrollIntoView();
        }
      }
    }
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    let projects = gsap.utils.toArray(".project");
    let mediaQuery = window.matchMedia("(min-width: 967px)");

    const homeAnimation = (animation) => {
      if (!project) {
        tl.to(".ball", {
          duration: 2,
          y: "100vh",
          ease: "bounce.out",
        })
          .to(".ball", {
            duration: 1,
            scale: 30,
            ease: "power3.out",
            onComplete: animation,
          })
          .from(".after-animation", {
            duration: 0.8,
            opacity: 0,
            ease: "power3.out",
          })
          .from(".title", {
            duration: 0.5,
            y: 100,
            delay: 0.2,
            opacity: 0,
            ease: "power3.out",
          })
          .from(".dev-image", {
            duration: 0.5,
            y: 100,
            opacity: 0,
            ease: "power3.out",
          })
          .from(".job-title", {
            duration: 0.5,
            y: 100,
            opacity: 0,
            ease: "power3.out",
          })
          .from(".scroll-indicator", {
            duration: 0.5,
            y: 100,
            opacity: 0,
            ease: "power3.out",
          });
      } else {
        completeAnimation();
        scrollToProject();
      }

      if (mediaQuery.matches) {
        projects.forEach((project) => {
          let tlProject = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          });
          let projectImage = project.querySelector("img");
          let projectInfo = project.querySelector(".project-info");

          tlProject
            .from(projectImage, {
              x: -300,
              opacity: 0,
            })
            .from(projectInfo, {
              x: 300,
              opacity: 0,
            });
        });
      } else {
        projects.forEach((project) => {
          let tlProject = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          });
          let projectImage = project.querySelector("img");
          let projectInfo = project.querySelector(".project-info");

          tlProject
            .from(projectImage, {
              y: 100,
              opacity: 0,
            })
            .from(projectInfo, {
              y: 100,
              opacity: 0,
            });
        });
      }

      let tlFooter = gsap.timeline({
        scrollTrigger: {
          trigger: "footer",
          start: "top center",
          end: "top top",
          scrub: 1,
        },
      });

      tlFooter
        .from("footer h2", {
          y: 100,
          opacity: 0,
          duration: 0.6,
        })
        .from("footer .footer-links", {
          y: 100,
          opacity: 0,
          duration: 0.6,
        });
    };

    homeAnimation(completeAnimation);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Website for Celal Eray Demircioglu, a software engineer at the University of Maltepe. Skilled with React, JavaScript, TypeScript, Java, Python, Node.js, C#, PHP, Bootstrap, Angular.js, GraphQL."
        ></meta>
        <meta property="url" content="https://eraydmrcoglu.com" />
        <meta property="type" content="website" />
        <meta property="locale" content="en" />
        <title>Celal Eray Demircioglu | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {animationComplete === false && <IntroOverlay />}
      <div className="after-animation">
        <header>
          <nav className="home-nav">
            <div className="space-between">
              <Link href="/">
                <div className="logo">ED</div>
              </Link>

              <ul className="nav-list">
                <li>
                  <motion.a
                    href="https://github.com/eraydmrcoglu"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Go to Eray's GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <span className="header-hidden-text">GitHub</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://www.linkedin.com/in/eraydemircioglu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Connect with Eray on LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    <span className="header-hidden-text">Linkedin</span>
                  </motion.a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="main-home">
          <div className="cta">
            <h1 className="title">
              I create<span className="playful"> playful </span> projects.
            </h1>
            <img
              src="/images/dev.png"
              alt="My image"
              className="dev-image"
            />
          </div>

          <p className="job-title">
            <span className="text-reveal">
              Celal Eray Demircioglu / Software Engineer
            </span>
          </p>
          <button className="scroll-indicator" onClick={executeScroll}>
            <span>Projects</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </main>
        <div className="project-container" ref={projectsRef}>
          {projectsList.map(
            ({
              name,
              description,
              longDescription,
              image,
              link,
              project,
              GitHub,
              tools,
              i,
            }) => (
              <div className="project" key={i} id={project}>
                <Link href={project}>
                  <picture>
                    <source srcSet={image} media="(min-width: 1280px)" />
                    <img
                      className="project-image"
                      alt={name}
                    />
                  </picture>
                </Link>
                <div className="project-info">
                  <Link href={project}>
                    <h2>{name}</h2>
                  </Link>
                  {description.split("\n").map((str, index) => (
                    <p key={index}>{str}</p>
                  ))}
                  {longDescription && (
                    <Link href={project}>
                      <button className="project-read-more">
                        <span>Read More</span>{" "}
                        <div className="read-more-arrow">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                      </button>
                    </Link>
                  )}
                  <h3>Tools used:</h3>
                  <ul className="tools-list">
                    {tools.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <motion.div className="project-btns">
                    <motion.a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title={`Open site of ${name}`}
                      className="project-btn"
                    >
                      Open Site
                    </motion.a>
                    {GitHub && (
                      <motion.a
                        href={GitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title={`View Code for ${name}`}
                        className="project-btn"
                      >
                        View Code
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            )
          )}
        </div>
        <footer>
          <h2>Connect with Me</h2>
          <ul className="footer-links">
            <li>
              <motion.a
                href="https://github.com/eraydmrcoglu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Go to Eray's GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <span className="footer-hidden-text">GitHub</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/eraydemircioglu/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Connect with Eray on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <span className="footer-hidden-text">Linkedin</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://twitter.com/Flexnerr_"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Follow Eray on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <span className="footer-hidden-text">Twitter</span>
              </motion.a>
            </li>
          </ul>
        </footer>
      </div>
    </motion.div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const project = query?.project ?? false;

  return {
    props: {
      project,
    },
  };
}
