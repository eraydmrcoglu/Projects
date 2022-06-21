import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { projectsList } from "../components/data";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faArrowLeft, } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Project({ projectObject }) {
  const controls = useAnimation();

  const page = {
    hidden: {
      opacity: 0,
    },
    pageShow: {
      opacity: 1,
    },
  };

  useEffect(() => {
    controls.stop("pageShow");
    controls.set("hidden");
    document.body.style.overflowY = "auto";
    controls.start("pageShow");
  }, [projectObject]);

  return (
    <motion.div exit={{ opacity: 0 }} className="container">
      <Head>
        <meta
          name="description"
          content={`${projectObject.description}`}
        ></meta>
        <meta
          property="url"
          content={`https://eraydmrcoglu.com/${projectObject.project}`}
        />
        <meta property="type" content="website" />
        <meta
          property="site_name"
          content="Celal Eray Demircioglu | Software Engineer"
        />
        <meta property="locale" content="en" />
        <title>{projectObject?.name} | Celal Eray Demircioglu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="project-nav">
          <div className="space-between">
            <Link href={`/?project=${projectObject.project}`}>
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
      <motion.main
        initial="hidden"
        animate={controls}
        exit={{ opacity: 0 }}
        variants={page}
        className="project-main"
      >
        <div className="text-content">
          <motion.a
            href={projectObject?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {projectObject?.name}
            </motion.h1>
          </motion.a>

          {projectObject?.longDescription
            ? projectObject?.longDescription
                .split("\n")
                .map((str, index) => <p key={index}>{str}</p>)
            : projectObject?.description
                .split("\n")
                .map((str, index) => <p key={index}>{str}</p>)}
        </div>
        {projectObject && projectObject?.figma && projectObject?.old ? (
          <div className="comparison-container">
            <div className="image-compare gsap-1">
              <img
                src={projectObject.old}
                alt={`${projectObject.name} Old Site`}
              />
              <h2>Old Version</h2>
            </div>
            <div className="image-compare gsap-2">
              <img
                src={projectObject.figma}
                alt={`${projectObject.name} Design Mockup`}
              />
              <h2>Design Mockup</h2>
            </div>
            <div className="image-compare gsap-1">
              <img
                src={projectObject.image}
                alt={`${projectObject.name} Live Site`}
              />
              <h2>Live Version</h2>
            </div>
          </div>
        ) : projectObject?.figma ? (
          <div className="comparison-container">
            <div className="image-compare gsap-1">
              <img
                src={projectObject.figma}
                alt={`${projectObject.name} Design Mockup`}
              />
              <h2>Design Mockup</h2>
            </div>
            <div className="image-compare gsap-2">
              <img
                src={projectObject.image}
                alt={`${projectObject.name} Live Site`}
              />
              <h2>Live Version</h2>
            </div>
          </div>
        ) : (
          <div className="comparison-container">
            <div className="image-compare gsap-3">
              <img src={projectObject?.image} alt={projectObject?.name} />
            </div>
          </div>
        )}

        <nav className="page-navigation">
          {projectObject?.id > 1 ? (
            <Link href={projectsList[projectObject.id - 2].project}>
              <motion.button
                className="previous-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Previous Project"
              >
                <FontAwesomeIcon className="prev-arrow" icon={faChevronLeft} />
                Previous
              </motion.button>
            </Link>
          ) : (
            <button className="disabled-btn previous-btn" disabled>
              <FontAwesomeIcon className="prev-arrow" icon={faChevronLeft} />
              Previous
            </button>
          )}
          {projectObject?.id < projectsList.length ? (
            <Link href={projectsList[projectObject.id].project}>
              <motion.button
                className="next-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Next Project"
              >
                Next
                <FontAwesomeIcon className="next-arrow" icon={faChevronRight} />
              </motion.button>
            </Link>
          ) : (
            <button className="disabled-btn next-btn" disabled>
              Next
              <FontAwesomeIcon className="next-arrow" icon={faChevronRight} />
            </button>
          )}
        </nav>
        {projectObject && (
          <div className="bottom-links">
            <div className="project-links">
              {projectObject.link && (
                <motion.a
                  href={projectObject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={`Open site of ${projectObject.name}`}
                >
                  Open Site
                </motion.a>
              )}
              {projectObject.GitHub && (
                <motion.a
                  href={projectObject.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={`View Code for ${projectObject.name}`}
                >
                  View Code
                </motion.a>
              )}
            </div>

            <Link href="/">
              <div className="project-back">
                <FontAwesomeIcon icon={faArrowLeft} /> Back Home
              </div>
            </Link>
          </div>
        )}
      </motion.main>
    </motion.div>
  );
}

export async function getServerSideProps(context) {
  const { project } = context.query;

  let projectObject = {};
  projectObject = projectsList.find((el) => el.project === project);

  return {
    props: {
      projectObject,
    },
  };
}
