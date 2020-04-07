import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GoogleFontLoader from 'react-google-font-loader';

import axios from 'axios';

import {Helmet} from "react-helmet";

import moment from 'moment';
require('moment/locale/pt-br');

const auth = {
  ak: "delivery123"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preloader: true,
      requests: [],
      auth: false
    };
    this.auth = this.auth.bind(this);
    this.loadResources = this.loadResources.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (JSON.parse(window.localStorage.getItem('authenticated')) !== null) {
      this.setState({ auth: true });
      this.loadResources();
    }
  }
  
  logout() {
    window.localStorage.setItem('authenticated', null);
    this.setState({ auth: false, requests: [] });
  }

  async loadResources() {
    this.setState({ preloader: true });
    try {
      let requests = await axios.get('https://acaiteria-karma.herokuapp.com/requests');
      let parsedRequests = [];
      let currentRequest;
      for (let request in requests.data.data) {
        currentRequest = requests.data.data[request];
        currentRequest.request = JSON.parse(currentRequest.request);
        parsedRequests.push(currentRequest);
      }
      this.setState({ requests: parsedRequests, preloader: false });
      console.log(this.state);
    } catch (err) {
    }
  }

  auth(e) {
    if (e.target.value === auth.ak) {
      window.localStorage.setItem('authenticated', JSON.stringify(true));
      this.setState({ auth: true });
      this.loadResources();
    }
  }

  render() {
    return (
      <>
          <Helmet>
            <link rel="icon" type="image/jpg" href="https://cdn.jsdelivr.net/gh/gabriellacerda/resources/karma.jpg" />
          </Helmet>
          <GoogleFontLoader
            fonts={[
              {
                font: 'Roboto',
                weights: [100, 300, 400, 500],
              }
            ]}
          />
        {!this.state.auth ?
          <div className="accessKey">
            <Helmet>
              <meta charSet="utf-8" />
              <title>Sign in - Açaiteria Delivery - Karma &middot; Private instance</title>
            </Helmet>
          <div className="logo">
            <img src="https://cdn.jsdelivr.net/gh/gabriellacerda/resources/karma.jpg" />
          </div>
          <div className="header">
            <h2>Açaiteria Delivery</h2>
          </div>
          <div className="header">
            <h1>Olá novamente! Entre com a chave de <br/> acesso para continuar...</h1>
          </div>
          <br/>
          <div className="accessKeyInput">
            <span>Chave de acesso</span>
            <input className="form-control" type="text" onChange={this.auth} />
          </div>
          <br/>
          <div className="credits">
            <small>Built with Karma</small>
          </div>
          </div>:
        <div className="panelView">
                      <nav className="navbar navbar-light">
              <a className="navbar-brand" href="#">
                <img src="https://cdn.jsdelivr.net/gh/gabriellacerda/resources/karma.jpg" width="30" height="30" alt="" />
                Karma
              </a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link cursor-pointer" onClick={this.logout}>Sair</a>
                </li>
              </ul>
            </nav>
          {this.state.preloader ?
          <div>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Obtendo dados frescos - Açaiteria Delivery - Karma &middot; Private instance</title>
            </Helmet>
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <h4>Obtendo dados frescos &middot; Açaiteria Delivery</h4>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="listing">
            <Helmet>
              <meta charSet="utf-8" />
              <title>Eventos - Açaiteria Delivery - Karma &middot; Private instance</title>
            </Helmet>
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="btn-fixed">
                    <button className="btn btn-primary" onClick={this.loadResources}>Atualizar</button>
                  </div>
                  <h4>Eventos &middot; Açaiteria Delivery</h4>
                  <ul className="timeline">
                    {this.state.requests.map((request) => (
                      <li>
                        <a target="_blank" href="https://www.totoprayogo.com/#">Nova requisição</a>
                        <a href="#" className="float-right">{moment(request.date).calendar()}</a>
                        <p>
                          <div>Endpoint:</div>
                          {request.request.request} <br/>
                          <code>{request.request.response}</code> <br/>
                          <div>Env variables:</div>
                          <code>
                            CITY_TOKEN: {request.request.env_variables.token} <br/>
                            CITY_ENV_K: {request.request.env_variables.token_name}
                          </code>
                          <div>Detalhes do pedido:</div>
                          <code>
                            Total: {request.request.total} <br/>
                            Número de telefone: {request.request.phone} <br/>
                          </code>
                        </p>
                      </li>
                    ))}
                  </ul>
                  <br/>
                  <div className="credits">
                    <small>&copy; 2020 Built with Karma</small>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>}
      </>
    );
  };
}

export default App;
