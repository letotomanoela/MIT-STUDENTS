import React, { useState, useEffect } from "react";
import NavbarLanding from "../Components/NavbarLanding/NavbarLanding";
import { motion } from "framer-motion";
import { container, item } from "../Components/animation";
import ProfileCard from "../Components/ProfileCard/ProfileCard";
import { v4 as uuidv4 } from "uuid";
import { Navigate, Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { BsBook } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { GiDiploma } from "react-icons/gi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useAuthUser } from "react-auth-kit";

const sectionData = [
  {
    title: "Excellence académique",
    icon: <GiDiploma />,
    color: "primary",

    content:
      "Le MIT est mondialement reconnu pour son excellence dans l'enseignement et la recherche. En choisissant notre plateforme de gestion des notes, vous bénéficiez d'un système qui correspond aux plus hauts standards académiques.",
  },
  {
    icon: <TbCertificate />,
    color: "success",
    title: "Facilité d'utilisation",
    content:
      "Notre interface conviviale et intuitive rend la gestion des notes simple et efficace.Les étudiants ont un accès clair à leurs notes et à leurs performances.",
  },
  {
    icon: <BsBook />,
    color: "warning",
    title: "Centralisation des données",
    content:
      "Notre système centralise toutes les informations liées aux notes des étudiants, ce qui facilite le suivi et l'analyse. ",
  },
  {
    icon: <BsBook />,
    color: "info",
    title: "Confidentialité et sécurité",
    content:
      "Nous accordons une grande importance à la confidentialité des données. Vos informations personnelles et vos résultats scolaires sont sécurisés et accessibles uniquement aux personnes autorisées. ",
  },
  {
    icon: <GiDiploma />,
    color: "danger",
    title: "Personnalisation",
    content:
      "Notre système de gestion des notes peut être adapté aux besoins spécifiques du MIT. Nous offrons des fonctionnalités personnalisables pour répondre aux exigences académiques uniques de votre institution.",
  },
  {
    icon: <GiDiploma />,
    color: "default",
    title: "Support et assistance",
    content:
      "Notre équipe de support est là pour vous accompagner tout au long de votre expérience. Si vous avez des questions, des problèmes techniques ou des demandes spécifiques, nous sommes prêts à vous aider rapidement et efficacement.",
  },
];

const LandingPage = () => {
  document.title = "MIT";
  const { token } = useSelector((state) => ({
    ...state.AuthReducer,
  }));

  const auth = useAuthUser()
  const userId = auth()?.userId

  return userId ? (
    <Navigate to="/dashboard" />
  ) : (
    <>
      <NavbarLanding />
      <section className="min-h-[500px] w-full pt-12 px-12 flex space-x-5 mb-8 ">
        <div className="w-1/2 h-full pr-4">
          <motion.p
            initial={{ translateX: -300 }}
            animate={{ translateX: 0 }}
            transition={{ type: "spring", damping: 80, stiffness: 300 }}
            className="text-5xl f font-bold"
          >
            Bienvenue sur le site du MIT (Massachusetts Institute of Technology)
          </motion.p>
          <motion.p
            initial={{ translateX: -300 }}
            animate={{ translateX: 0 }}
            transition={{ type: "spring", damping: 80, stiffness: 300 }}
            className="mt-5"
          >
            Au MIT, nous sommes dévoués à la gestion attentive des étudiants et
            de leurs notes, en veillant à leur progression académique. Grâce à
            notre système intégré, nous assurons transparence, équité et soutien
            optimal pour favoriser leur réussite.
          </motion.p>
          <motion.p
            variants={container}
            initial="hidden"
            animate="visible"
            className="h-full flex items-center space-x-4 mt-8"
          >
            {["Se connecter", "S'inscrire"].map((y) => (
              <Link to={y === "Se connecter" ? "/login" : "/signup"}>
                <motion.button
                  key={uuidv4()}
                  variants={item}
                  className={`border  border-gray-900 py-2 px-5 rounded ease-in-out duration-300 ${
                    y === "S'inscrire"
                      ? " hover:bg-gray-900 hover:text-slate-50 hover:ease-in-out hover:duration-500"
                      : " bg-gray-900 text-slate-50 "
                  } `}
                >
                  {y}
                </motion.button>
              </Link>
            ))}
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="mt-10 flex -space-x-3"
          >
            {[1, 3, 4, 5, 6, "p"].map((a) => (
              <motion.div key={uuidv4()} variants={item}>
                {typeof a === "number" && (
                  <ProfileCard
                    name={`image${a}.jpg`}
                    last={Number(a) === 6 && true}
                  />
                )}
                {typeof a === "string" && (
                  <p className="ml-6 font-bold w-32 text-sm flex items-center h-full ">
                    Plus de 500 étudiants
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="w-1/2 h-[500px] flex space-x-5"
        >
          {[1, 2].map((num) => (
            <motion.div
              key={uuidv4()}
              variants={Number(num) === 1 ? item : container}
              className={`h-full w-1/2 rounded-lg overflow-hidden relative ${
                Number(num) === 2 && "space-y-2"
              }`}
            >
              {Number(num) === 1 && (
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={"images/image6.jpg"}
                  alt=""
                  className="z-10 w-full h-full object-cover "
                />
              )}
              {Number(num) === 2 &&
                [3, 4, 5].map((number) => (
                  <motion.div
                    key={uuidv4()}
                    variants={item}
                    className="h-1/3 w-full space-y-2 rounded-lg overflow-hidden shadow-md"
                  >
                    <img
                      src={`images/image${number}.jpg`}
                      alt=""
                      className="z-10 w-full h-full object-cover "
                    />
                  </motion.div>
                ))}
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Stats />
      <Section2 />
      <StudentSays />
      <Footer/>
    </>
  );
};

export default LandingPage;

function Section2({}) {
  return (
    <section className="min-h-[500px] w-full px-12 bg-slate-50 py-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap"
      >
        <motion.div variants={item} className="w-96 h-72 mr-6 mt-5 ">
          <h1 className="text-4xl font-bold ">
            Pourquoi nous sommes les meilleurs ?
          </h1>
          <p className="text-gray-500">
            En choisissant notre plateforme de gestion des notes, vous optez
            pour une solution fiable, efficace et adaptée aux exigences
            académiques du MIT. Rejoignez-nous dès aujourd'hui et profitez des
            avantages de notre système de gestion des notes pour une expérience
            académique optimisée.
          </p>
        </motion.div>
        {sectionData.map((itemSection) => (
          <Card
            key={itemSection.content}
            title={itemSection.title}
            color={itemSection.color}
            icon={itemSection.icon}
            content={itemSection.content}
            variant={item}
          />
        ))}
      </motion.div>
    </section>
  );
}

function Card({ color, icon, title, content, variant }) {
  return (
    <motion.div
      variants={variant}
      className="w-64 h-68 shadow-lg rounded-lg px-4  py-4 bg-white flex-shrink-0 m-2"
    >
      <div>
        <div
          className={`w-12 h-12 mb-2 ${color} flex items-center justify-center text-3xl rounded`}
        >
          {icon}
        </div>
        <h2 className="font-medium text-sm">{title}</h2>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </motion.div>
  );
}

const statsAnim = [
  { number: "800", title: "Nombres d'étudiants" },
  { number: "180", title: "Nombres de matières" },
  { number: "5", title: "Nombres de classes" },
  { number: "7810", title: "Nombres des notes" },
];

function Stats() {
  return (
    <div className="w-full h-36 info ">
      <motion.div
        className="flex justify-center items-center h-full"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        {statsAnim.map((stat) => (
          <NumberStats
            key={stat.title}
            variant={item}
            title={stat.title}
            number={stat.number}
          />
        ))}
      </motion.div>
    </div>
  );
}

function NumberStats({ number, title, variant }) {
  return (
    <motion.div
      variants={variant}
      className="w-max px-6 h-full flex flex-col items-center justify-center text-white"
    >
      <div className="text-5xl">{number}</div>
      <p>{title}</p>
    </motion.div>
  );
}

function StudentSays() {
  const [data, setData] = useState([
    {
      size: "w-16 h-16",
      image: "landing.jpg",
      position: "top-[10%] ",
      name: "Jane Doe",
      text: "Le site de gestion de notes au MIT est extrêmement convivial et intuitif. Il facilite grandement le suivi de mes résultats académiques et me permet de rester organisé.",
    },
    {
      size: "w-24 h-24",
      image: "landing1.jpg",
      position: "top-1/3 left-[15%]",
      name: "John Doe",
      text: "J'apprécie particulièrement la fonctionnalité du site de gestion de notes au MIT qui me permet de comparer mes performances avec celles de mes camarades de classe. Cela me motive à me surpasser et à atteindre de meilleurs résultats.",
    },
    {
      size: "w-16 h-16",
      image: "landing2.jpg",
      position: "top-[10%] transform-y-[10%] left-[30%] transform-x-[30%] ",
      name: "Jean Gray",
      text: "Le site de gestion de notes au MIT offre une transparence totale en ce qui concerne mes évaluations. Je peux accéder instantanément à mes notes, aux commentaires des professeurs et à toutes les informations nécessaires pour évaluer ma progression académique.",
    },
    {
      size: "w-48 h-48",
      image: "landing3.jpg",
      position: "top-[20%] -transform-y-[20%] left-[44%] -transform-x-[44%] ",
      name: "Dana Jane",
      text: "Le site de gestion de notes au MIT simplifie le processus de suivi de mes résultats sur plusieurs semestres. Je peux facilement consulter mes relevés de notes passés, ce qui me permet de visualiser ma progression et d'identifier les domaines dans lesquels je dois m'améliorer.",
    },
    {
      size: "w-16 h-16",
      image: "landing4.jpg",
      position: "top-[10%] -transform-y-[10%] left-[68%] -transform-x-[68%] ",
      text: "Le site de gestion de notes au MIT me permet de garder une trace précise de mes performances académiques. Je peux suivre mes résultats par matière, ce qui me permet de mieux cibler mes efforts d'étude et d'identifier mes points forts et faibles.",
      name: "Tanya Lane",
    },
    {
      size: "w-24 h-24",
      image: "landing5.jpg",
      position: "top-1/3 transform-y-1/3 left-[79%] -transform-x-[79%]",
      text: "Grâce au site de gestion de notes du MIT, je peux facilement générer des rapports détaillés sur mes résultats. Cela me permet de visualiser mes performances sur une période donnée, d'analyser mes tendances et de préparer des rapports pour mes conseillers académiques ou potentiels employeurs",
      name: "Hope Van Dyne",
    },
    {
      size: "w-16 h-16",
      image: "landing6.jpg",
      position: "top-[10%] transform-x-[10%] left-[90%] transform-x-[90%]",
      name: "Daniel Atlas",
      text: `"Le site de gestion de notes au MIT offre également des fonctionnalités de rétroaction et de communication. J'apprécie pouvoir échanger directement avec mes professeurs sur les évaluations et recevoir des commentaires constructifs qui m'aident à améliorer ma compréhension et mes compétences dans chaque matière.`,
    },
  ]);

  const [current, setCurrent] = useState("prev");
  const [counter, setCounter] = useState(3);

  const prev = () => {
    setCurrent("prev");
    if (counter === 0) {
      setCounter(6);
    }
    if (counter > 0 && counter <= 6) {
      setCounter(counter - 1);
    }
  };

  const prevVariant = {
    hidden: {
      translateX: 300,
    },
    visible: {
      translateX: 0,
    },
    exit: {
      translateX: -300,
    },
  };
  const nextVariant = {
    hidden: {
      translateX: -300,
    },
    visible: {
      translateX: 0,
    },
    exit: {
      translateX: 300,
    },
  };
  const next = () => {
    setCurrent("next");
    if (counter === 6) {
      setCounter(0);
    }
    if (counter >= 0 && counter < 6) {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {}, [counter]);

  return (
    <section className="w-full min-h-max py-6 px-12 bg-white">
      <h1 className="text-4xl font-bold text-center">
        Ce que disent nos étudiants
      </h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="min-h-[500px] w-full relative overflow-hidden px-8"
      >
        {data.map((x) => (
          <Avatar
            key={x.image}
            size={x.size}
            image={x.image}
            position={x.position}
            variant={item}
          />
        ))}

        <motion.div
          variants={item}
          className="top-[60%] absolute h-max w-full mt-3 flex justify-center items-center overflow-hidden"
        >
          <motion.p
            variants={current === "prev" ? prevVariant : nextVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={uuidv4()}
            className="mt-2 font-bold italic"
          >
            {data[counter].name}
          </motion.p>
        </motion.div>
        <motion.div variants={item} className="top-[65%] absolute h-max w-full mt-3 flex justify-center items-center space-x-3">
          <div
            onClick={prev}
            className="primary cursor-pointer flex-shrink-0 w-8 h-8 rounded-full text-lg overflow-hidden flex items-center justify-center"
          >
            <AiOutlineLeft />
          </div>
          <motion.p
            key={uuidv4()}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "ease-in-out" }}
            className="text-center w-[500px] cursor-pointer py-2"
          >
            {data[counter].text}
          </motion.p>
          <div
            onClick={next}
            className="primary flex-shrink-0 w-8 h-8 rounded-full text-lg overflow-hidden flex items-center justify-center"
          >
            <AiOutlineRight />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Avatar({ size, image, position, variant }) {
  return (
    <motion.div
      variants={variant}
      className={`${size} overflow-hidden ${position} rounded-full absolute`}
    >
      <img src={image} className="w-full h-full object-cover " />
    </motion.div>
  );
}

function Footer(){
  return(
    <footer className="w-full py-8 text-center bg-gray-900 text-lg text-white ">
      Copyright 2023
    </footer>
  )
}