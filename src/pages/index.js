import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import logo from '../assets/Logo.png';
import { useState, useEffect } from 'react';
import { Button, Form, FormControl, Container, Navbar } from 'react-bootstrap';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [inputvalue, setInputValue] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
    if (/[0-9+\-*/.=]/.test(key)){
      event.preventDefault();
      handleButtonClick(key);
    } else if (key === 'Backspace') {
      event.preventDefault();
      handleDeleteButtonClick();
    } else if (key === 'Escape') {
      event.preventDefault();
      handleClearButtonClick();
    }
    };

    window.addEventListener('keydown', handleKeyPress);
    return() => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleButtonClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  }

  const handleClearButtonClick = () => {
    setInputValue('');
  }

  const handleDeleteButtonClick = () => {
    setInputValue(inputvalue.slice(0,-1));
  }

  const handleEqualsClick = () => {
    try {
      const result = eval(inputvalue);
      setInputValue(Number.isFinite(result) ? result.toString() : 'Invalid');
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar fixed="top" className="bg-color-tertiary">
          <Container id="containerh">
            <Navbar.Brand id="header" href="#Calculator">
              <Image src={logo} width={40} height={30} />{' '}
              Online Basic Calculator
            </Navbar.Brand>
          </Container>
        </Navbar>

        
      <main className={`${styles.main} ${inter.className}`}>
        <section id="Calculator" className="container">
          <div>
            <Form>
              <FormControl type="text" className="display" value={inputvalue} readOnly/>
            </Form>
            <div className="buttons">
              <Button variant="light" id="ac" style={{ color: 'green' }} className="operator" onClick={handleClearButtonClick} active>AC</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={handleDeleteButtonClick} active>DEL</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={() => handleButtonClick("/")} active>/</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("7")} active>7</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("8")} active>8</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("9")} active>9</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={() => handleButtonClick("*")} active>*</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("4")} active>4</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("5")} active>5</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("6")} active>6</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={() => handleButtonClick("-")} active>-</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("1")} active>1</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("2")} active>2</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("3")} active>3</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={() => handleButtonClick("+")} active>+</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("0")} active>0</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("00")} active>00</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick(".")} active>.</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={handleEqualsClick} active>=</Button>
            </div>
          </div>
        </section>
      </main>

      <Navbar fixed="bottom" className="bg-color-tertiary">
          <Container id="containerf">
            <Navbar.Brand id="footer" href="#Calculator" className="">
              Created by Benedict John Gonzales | &#169; 2023
            </Navbar.Brand>
          </Container>
        </Navbar>

      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  )
}
