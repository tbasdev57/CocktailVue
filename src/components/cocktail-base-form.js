

const cocktailBaseForm = {
    template: `
    <aside>
    <i class="fa-sharp fa-solid fa-user-secret fa-3x"></i>
    <h3>Rechercher un cocktail par ingrédient</h3>
    <select @change="selectAnOption($event)">
        <option value=""> Recherche par ingrédient </option>
        <option v-for="ingredient in cocktailIngredients">{{ingredient.strIngredient1}}</option>
    </select>
    <i v-if="message">{{message}}</i>
    <br>
    <button type="submit" @click.prevent="cocktailByIngredient">Rechercher</button>
    </aside>`,
    props: ["cocktail-ingredients"],
    emit: ["result"],
    data() {
        return {
            selectedOption: '',
            arrData: [],
            message: null,
        };
    },
    methods: {

        async cocktailByIngredient() {
            if (this.selectedOption) {

                await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + this.selectedOption)
                    .then(
                        (response) => {
                            response.json().then(async (data) => {
                                let arrIngredient = data.drinks

                                for (let i = 0; i < arrIngredient.length; i++) {
                                    await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + arrIngredient[i]["idDrink"])
                                        .then(
                                            (response) => {
                                                response.json().then((data) => {

                                                    this.arrData[i] = data.drinks[0]
                                                    this.message = null
                                                })
                                            }
                                        )
                                };
                            });
                        }
                    )

                this.$emit("result", this.arrData)

            } else {
                this.message = "Veuillez selectionner un ingrédient"
                this.$emit("result", 0);
            }
        },

        selectAnOption(event) {
            this.selectedOption = event.target.value;
        }
    },
};


export default cocktailBaseForm;
