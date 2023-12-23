import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    
        {
            "id": 1,
            "title": "KPC Streaming",
            "img": "/KPC.PNG",
            "desc": "An app designed to be scalable and become a future streaming platform. Technologies used: REACT, TAILWIND, MYSQL, NEXT.JS, PRISMA, TSX.",
            "demo": "https://kpc-jet.vercel.app/"
        },
        {
            "id": 2,
            "title": "NOTE",
            "img": "/note.PNG",
            "desc": "An application to save your notes. Have fun saving notes, adding colors, and editing them anytime, anywhere. Technologies used: JAVASCRIPT, TAILWIND, API.",
            "demo": "https://note-happy.vercel.app/",
            "git": "https://github.com/Futuredevkev/note-Kevin-Moreira"
        },
        {
            "id": 3,
            "title": "News",
            "img": "/noticia.PNG",
            "desc": "An application to stay informed about what's happening in the world around you. Search and filter news from any part of the world. Technologies used: REACT, JSX, TAILWIND.",
            "demo": "https://noticias-api-phi.vercel.app/",
            "git": "https://github.com/Futuredevkev/NoticiasAPI"
        },
        {
            "id": 5,
            "title": "Sushi APP",
            "img": "/sushi.PNG",
            "desc": "A landing page about a sushi website. Just enjoy my design attempt and test the shopping cart! Technologies used: REACT, API, CONTEXT.",
            "demo": "https://sushirush.vercel.app/",
            "git": "https://github.com/Futuredevkev/SushiLanding"
        }
    ]
    



const Single = ({item}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref})

    const y = useTransform(scrollYProgress, [0,1], [-300, 300])

    return (
        <section>
            <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                   <a href={item.demo} target="_blank"><button>Watching Demo</button></a>
                    <a href="" className="imagen-git">
                    <img src="/git.svg" alt="git" />
                    </a>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

export default function Portfolio() {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className="portfolio" ref={ref}>
    <div className="progress">
        <h1>My works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
    </div>
        {items.map((item) => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}
