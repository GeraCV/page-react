import React from 'react';
import "./scss/styles.scss";
import "./components/banner";
import Banner from './components/banner';
import Card from './components/cards';

function App() {
  return (
    <>
      <Banner />
      <div className="ed-grid m-grid-3">
        <Card
          name="React desde cero"
          image="https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png"
          teacher="Beto Quiroga"
          price="600 MXN"
        />
        <Card
          name="React: Manejo del estado de aplicación"
          image="https://edteam-media.s3.amazonaws.com/courses/original/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png"
          teacher="Beto Quiroga"
          price="700 MXN"
        />
        <Card
          name="Plataforma de eduación online con React"
          image="https://edteam-media.s3.amazonaws.com/courses/original/4ff27f76-96a9-44ab-bb7f-ed0e17263e7c.png"
          teacher="Beto Quiroga"
          price="800 MXN"
        />
        <Card
          name="JavaScript POO"
          image="https://edteam-media.s3.amazonaws.com/courses/original/321a7716-9234-492f-8879-f7adc122624a.png"
          teacher="Alexys Lozada y Beto Quiroga"
          price="500 MXN"
        />
        <Card
          name="AJAX y WebSockets"
          image="https://edteam-media.s3.amazonaws.com/courses/original/d0bcb278-de79-4d58-8068-f2c05c5125b5.jpg"
          teacher="Alexys Lozada y Beto Quiroga"
          price="700 MXN"
        />
        <Card
          name="Single Page Application"
          image="https://edteam-media.s3.amazonaws.com/courses/original/7e44f68b-ee45-4b8b-8faf-30d0958af6dc.jpg"
          teacher="Alexys Lozada y Beto Quiroga"
          price="800 MXN"
        />

      </div>
    </>
  );
}

export default App;
