const MainMenu = {
  template: `
    <header>
    <nav>
    <router-link to="/">CocktailPedia</router-link>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link :to="{ name: 'credits' }">Credits</router-link></li>
      </ul>
    </nav>
  </header>
      `,
};

export default MainMenu;
