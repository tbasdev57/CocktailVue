const cocktailCard = {
    template:
        `<aside v-for="data in cocktailInfos">
        <img :src="data.strDrinkThumb" alt=""/>
        <h3>{{data.strDrink}}<sup>{{data.strAlcoholic}}</sup></h3>
        <p>Catégorie : {{data.strCategory}}</p>
        <p>Liste ingrédients : </p>
        <ul>
            <li v-for="index in ingredients(data)">{{index}}</li>
        </ul>
    </aside>`,
    props: ["cocktailInfos"],
    methods: {

        ingredients(data) {
            let arrIngredients = [];
            for (let i = 1; i <= 15; i++) {
                let ingredient = data["strIngredient" + i];
                if (ingredient) {
                    arrIngredients.push(ingredient);
                };
            };
            return arrIngredients;
        }
    }

};

export default cocktailCard;