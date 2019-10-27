import axios from 'axios';
// 37jpxbq3QI67qMSAT-h-qg

const API_KEY = 'QEy_XP28xjlLMF54iuMZMGQxTBAOg7-V6DIIUt_SZJAQkNTKembpIiIpJn3Yzzc5ZtmZTbHML2mEAb-wceSqRNpQ9AoDrsB5n6LLiIS5U0EQMI4EyC8ZuXttv2C1XXYx';
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});