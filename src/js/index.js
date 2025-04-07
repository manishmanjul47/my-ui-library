import '../scss/main.scss';
import Tabby from './components/tabs'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tabby').forEach((el) => {
    new Tabby(el)
  })
})
