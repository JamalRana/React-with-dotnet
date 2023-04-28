import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


const subHeaderStyle = { color: "grey", backgroundColor: "darkgray" }

function MainHeader() {
  return (<h1 className='card-header'>
    React Course
  </h1>);
}
function SubHeader() {
  return (<p className='card-body'>This will be an exciting course.</p>);
}
function Header() {
  return (
    <div className='card'>
      <MainHeader />
      <SubHeader />
    </div>

  );
}


function Footer() { return (<p className='btn btn-primary'>Happy Coding....</p>); }

function MainBody() {

  return (
    <div className='card-text'>
      <p >In this course, i will learn everything related to react</p>
      <ul>
        <li>Pray Call</li>
        <li>Go To Masjid</li>
      </ul>
    </div>
  );
}


root.render(
  <>
    <Header />
    <MainBody />
    <Footer />
  </>



);

