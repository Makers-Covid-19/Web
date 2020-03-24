import Home from "./components/Home";
import Districts from "./components/Districts";

export const routes = [
  {path: '/', component: Home, name: 'Home'},
  {path: '/districts/:id', component: Districts, name: 'Districts'},
];
