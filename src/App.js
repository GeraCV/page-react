import React from 'react';
import "./scss/styles.scss";
import "./components/banner";
import Banner from './components/banner';
import Card from './components/cards';
import Formulario from './components/formulario';

const cursos = [
  {
    "name": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
    "teacher": "Beto Quiroga",
    "price": "600"
  },
  {
    "name": "React: Manejo del estado de aplicación",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png",
    "teacher": "Beto Quiroga",
    "price": "700"
  },
  {
    "name": "Plataforma de eduación online con React",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/4ff27f76-96a9-44ab-bb7f-ed0e17263e7c.png",
    "teacher": "Beto Quiroga",
    "price": "800"

  },
  {
    "name": "JavaScript POO",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/321a7716-9234-492f-8879-f7adc122624a.png",
    "teacher": "Alexys Lozada y Beto Quiroga",
    "price": "500"
  },
  {
    "name": "AJAX y WebSockets",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/d0bcb278-de79-4d58-8068-f2c05c5125b5.jpg",
    "teacher": "Alexys Lozada y Beto Quiroga",
    "price": "700"
  },
  {
    "name": "Single Page Application",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/7e44f68b-ee45-4b8b-8faf-30d0958af6dc.jpg",
    "teacher": "Alexys Lozada y Beto Quiroga",
    "price": "800"
  },
  {
    "name": "Programación Reactiva con RxJS",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/5c9f5d5a-c678-4598-841b-6dd6cc9322c2.png",
    "teacher": "Jorge Cano",
    "price": "600"
  },
  {
    "name": "Google Cloud Platform",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/8de5c676-a2ab-454d-9ef6-46ec47e82e08.png",
    "teacher": "Manuel Rodriguez",
    "price": "700"
  },
  {
    "name": "Diseño UI",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/c280eaa2-c461-4306-82bf-29061e2829e5.png",
    "teacher": "Alvaro Felipe",
    "price": "800"
  }
]

function App() {
  return (
    <>
      <Banner />
      <Formulario />
      <div className="ed-grid m-grid-3">
        {
          cursos.map(el => <Card
            name={el.name}
            image={el.image}
            teacher={el.teacher}
            price={el.price} />
          )
        }
      </div>
    </>
  );
}

export default App;
