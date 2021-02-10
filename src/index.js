import React from 'react';
import ReactDOM from'react-dom';
/**
 * Importando el componente
 */
import PrimerComponente from './PrimerComponente';
import './index.css';
import CounterApp from './CounterApp';
/**
 * Renderizado en React-DOM
 * Encargado de renderizar
 */
const divRoot = document.querySelector('#root');

/** Renderizado */
ReactDOM.render( <CounterApp value={0}/>, divRoot);