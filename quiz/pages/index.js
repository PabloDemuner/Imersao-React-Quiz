import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
//Import retirado da framework https://www.framer.com/motion/
import { motion } from 'framer-motion';


import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

/*const BackgroundImage = styled.div`
background-image: url(${db.bg})
flex:1;
background-size: cover;
background-position: center;
`;*/




export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
     <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
        //Animações retirada da framework https://www.framer.com/motion/
        as={motion.section}
        //Tempo aproximado para começar a acontecer o efeito
        transition={{ display: 0.1, duration: 0.1}}
        //Estados de animação - Y é o eixo vertical
        variants={{ 
          show: {opacity: 1, y: `0`},
          hidden: {opacity: 0, y: `90%`},
        }}
        //Valor Inicial que é o valor que começa o estado (hidden:0)
        initial= "hidden"
        animate= "show"
        >
        <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
               {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
           //Animações retirada da framework https://www.framer.com/motion/
           as={motion.section}
           //Tempo aproximado para começar a acontecer o efeito
           transition={{ display: 0.5, duration: 0.5}}
           //Estados de animação 
           variants={{ 
             show: {opacity: 1},
             hidden: {opacity: 0},
           }}
           //Valor Inicial que é o valor que começa o estado (hidden:0)
           initial= "hidden"
           animate= "show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((linkExterno) =>{
                const [projectName, githubUser] = linkExterno
                .replace(/\//g, ``)
                .replace(`https:`, ``)
                .replace(`.vercel.app`, ``)
                .split(`.`);

                return (
                  <li key={linkExterno}>
                    <Widget.Topic 
                    as={Link}
                    href={`/quiz/${projectName}___${githubUser}`}
                    >
                  {`${githubUser}/${projectName}`}
                  </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer 
         //Animações retirada da framework https://www.framer.com/motion/
         as={motion.footer}
         //Tempo aproximado para começar a acontecer o efeito
         transition={{ display: 0.5, duration: 0.5}}
         //Estados de animação 
         variants={{ 
           show: {opacity: 1},
           hidden: {opacity: 0},
         }}
         //Valor Inicial que é o valor que começa o estado (hidden:0)
         initial= "hidden"
         animate= "show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/PabloDemuner"/>
    </QuizBackground>
  );
}
