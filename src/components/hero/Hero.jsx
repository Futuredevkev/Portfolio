import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity:0,
        y:10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
        }
    }
}


export default function Hero() {
  return (
    <div className="hero">
    <div className="wrapper">
 <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
        <motion.h2 variants={textVariants}>Kevin Moreira</motion.h2>
        <motion.div variants={textVariants} className="buttons">
            <a href="https://github.com/Futuredevkev" target="_blank"><motion.button variants={textVariants}>See my github</motion.button></a>
            <a href="mailto:kevinsitosoyyoguadateamo1212@outlook.com" target="_blank"><motion.button variants={textVariants}>Contact Me</motion.button></a>
    </motion.div>
        <motion.img variants={textVariants} src="/scroll.png" animate="scrollButton" alt="scroll" />
  </motion.div>
  <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        FreeLancer
  </motion.div>
  </div>
        <div className="imageContainer">
            <img src="/hero.png" alt="Me" />
        </div>
    </div>
  )
}
