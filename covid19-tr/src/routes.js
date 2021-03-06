import Home from "./components/Home";
import Districts from "./components/Districts";
import Neighborhoods from "./components/Neighborhoods";
import Phones from "./components/Phones";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";

export const routes = [
  {path: '/', component: Home, name: 'Home'},
  {path: '/about', component: About, name: 'About'},
  {path: '/districts/:id', component: Districts, name: 'Districts'},
  {path: '/neighborhoods/:id', component: Neighborhoods, name: 'Neighborhoods'},
  {path: '/phones/:id', component: Phones, name: 'Phones'},
  {path: '/privacy-policy', component: PrivacyPolicy, name: 'PrivacyPolicy'},
];
