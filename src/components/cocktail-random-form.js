const cocktailRandomForm = {

    template: `
    <aside>
        <i class="fa-solid fa-dice fa-3x"></i>
        <h3>Propose-moi un cocktail random</h3>
        <button type="submit" @click.prevent="cocktailWithAlcohol">Cocktail avec alcool</button>
        <button type="submit" @click.prevent="cocktailWithoutAlcohol">Cocktail sans alcool</button>
    </aside>
      `,
    emit: ["result"],
    methods: {

        cocktailWithAlcohol() {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
                (response) => {
                    response.json().then((data) => {
                        this.$emit("result", data.drinks);
                    });
                }
            );
        },
        cocktailWithoutAlcohol() {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=non_alcoholic").then(
                (response) => {
                    response.json().then((data) => {
                        let randomNumber = Math.floor(Math.random() * 57)
                        let id = data.drinks[randomNumber]
                        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id["idDrink"])
                            .then(
                                (response) => {
                                    response.json().then((data) => {
                                        this.$emit("result", data.drinks)
                                    })
                                }
                            )
                    });
                }
            );
        }
    },
};




export default cocktailRandomForm;