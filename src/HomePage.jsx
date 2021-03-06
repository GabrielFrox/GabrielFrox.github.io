import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import img from './foto.jpeg';

class HomePage extends Component {
  render() {
    // console.log(img);
    return (
      <div>
        <Navigation />
        <h1>Sobre mim</h1>
        <section>
          <div id="main-content">
            <div className="container">
              <img src={ img } alt="Foto de perfil" id="main-photo" />
              <div id="main-intro">
                <h3 className="main-message">carpe diem quam minimum credula postero</h3>
                <hr />
                <p className="main-message">
                  Me chamo Gabriel Oliveira dos Santos, nascido e criado em Brasília-DF.
                  <br />
                  Você pode acessar projetos que desenvolvi através do menu superior ou do rodapé da página.
                </p>
              </div>
            </div>
            <div className="container">
              <h3>Primeiro contato com tecnologia...</h3>
              <p>
                Desde muito cedo tive contato com tecnologia por incentivo da minha mãe, e acabei me descobrindo um apaixonado pela área, especialmente pelo desenvolvimento de jogos eletrônicos.
              </p>
            </div>
            <div className="container">
              <h3>Planos para o futuro...</h3>
              <p>
                Atualmente estudando desenvolvimento web através da Trybe, com intenção de trabalhar na área em um futuro próximo.
                <br />
                Em um futuro mais distante pretendo focar os estudos em desenvolvimento de jogos, mercado de cryptomoedas e mercado de NFTs.
              </p>
            </div>
            <div className="container">
              <h3>Um pouco mais sobre mim...</h3>
              <p>
                Tenho 22 anos, atualmente morando em Sobradinho-DF.
                Apaixonado pela indústria de jogos e Livros de fantasia medieval.
                <br />
                Tenho mania de recomendar <a href="https://www.amazon.com.br/nome-do-vento-Patrick-Rothfuss/dp/8599296493" target="_blank">O Nome do Vento</a> a todas as pessoas com quem tenho a oportunidade de conversar sobre o assunto (Sério, se curte o tema medieval você deveria dar uma chance pra esse livro).
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
