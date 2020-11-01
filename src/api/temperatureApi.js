import axios from 'axios';

export default axios.create({
    baseURL: 'https://spiralinterview.herokuapp.com/temperatures'
})