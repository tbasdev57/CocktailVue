const cocktailNameForm = {
    template: `
    <aside>
    <i class="fa-solid fa-martini-glass fa-3x"></i>
             
        <h3>Rechercher un cocktail par nom</h3>
        <input type="text" v-model="cocktailName" placeholder="Martini" />
        <i v-if="message">{{message}}</i>
        <br>
        <button type="submit" @click.prevent="cocktailByName">Rechercher</button>
    </aside>
      `,
    data() {
        return {
            cocktailName: '',
            message: null,
        };
    },
    emit: ["result"],

    methods: {
        cocktailByName() {
            if (this.cocktailName) {
                fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.cocktailName).then(
                    (response) => {
                        response.json().then((data) => {

                            if (data.drinks) {
                                this.$emit("result", data.drinks);
                                this.message = null
                            } else {
                                this.message = "Aucun résultat disponible, réessayez!"
                                this.$emit("result", 0);
                            }

                        });
                    }
                );
            } else {
                this.message = "Veuillez inscrire le nom du cocktail"
            }

        },
    },
};

export default cocktailNameForm;