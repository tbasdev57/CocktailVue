import cocktailBaseForm from "../components/cocktail-base-form.js";
import cocktailCard from "../components/cocktail-card.js";
import cocktailNameForm from "../components/cocktail-name-form.js";
import cocktailRandomForm from "../components/cocktail-random-form.js";

const HomeView = {
  name: "HomeView",
  template: `
    <section>
        <cocktail-random-form @result="setResult"></cocktail-random-form>
        <cocktail-name-form @result="setResult"></cocktail-name-form>
        <cocktail-base-form
          :cocktail-ingredients="cocktailIngredients"
          @result="setResult"
        ></cocktail-base-form>
    </section>
    
    <article>
      <aside>
        <p v-if="!this.cocktailInfos.length">{{message}}</p>
        
        <p v-else-if="this.cocktailInfos.length == 1">
          {{cocktailInfos.length}} résultat
        </p>
        <p v-else>{{cocktailInfos.length}} résultats</p>
      </aside>
    </article>

    <section>
      <cocktail-card :cocktail-infos="cocktailInfos"></cocktail-card>
    </section>
  `,

  data() {
    return {
      message: "Découvrez le cocktail parfait!",
      cocktailInfos: [],
      cocktailIngredients: []
    };
  },
  methods: {
    setResult(result) {
      this.cocktailInfos = result;
    }
  },
  mounted() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(
      (response) => {
        response.json().then((data) => {
          this.cocktailIngredients = data.drinks;
        });
      }
    );
  },
  components: {
    cocktailBaseForm,
    cocktailCard,
    cocktailNameForm,
    cocktailRandomForm

  }

};

export default HomeView;
