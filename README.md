# App-cocktailPedia-Vue.js

## Objectifs

Vous devez créer une single page application (SPA) de recherche de cocktails en utilisant Vue.

## API

Vous utiliserez l'API gratuite et sans autentification [TheCocktailDB](https://www.thecocktaildb.com/api.php) pour récupérer les données
sur les cocktails.

## Interface

Vous êtes libre de votre interface, mais elle doit respecter toutes les conditions demandées par les fonctionnalités à faire.
Peu importe le design et la complexité de celle-ci, votre interface doit être utilisable et fonctionnelle.
Vous devez afficher le nombre de résultats de chaque recherche (en respectant le singulier/pluriel).

## Exemple

![image](./img/Exemple1)

Cette interface utilise le framework classless [MVP.css](https://andybrewer.github.io/mvp/) qui permet de prototype rapidement une application web.


## Affichage des cocktails

Pour chaque cocktail, vous devrez afficher au minimum :
- Présence d'alcool ou non : `strAlcoholic`
- Catégorie : `strCategory`
- Nom : `strDrink`
- Image : `strDrinkThumb`
- Liste des ingrédients : `strIngredient1` ... `strIngredient15`

## Fonctionnalités

### Recherche d'un cocktail aléatoire
Vous devez créer un bouton qui permet d'afficher un cocktail au hasard.
API Endpoint à utiliser : https://www.thecocktaildb.com/api/json/v1/1/random.php

### Recherche de cocktail par nom
Vous devez créer un formulaire qui permet de recherche un cocktail par son nom.
API Endpoint à utiliser : https://www.thecocktaildb.com/api/json/v1/1/search.php?
s=margarita (exemple en recherchant un cocktail "margarita")

#### Gestion d'erreur
Vous devez gérer 2 cas d'erreur :
- L'utilisateur n'a pas rentré de nom de cocktail
- Aucun cocktail ne correspond à la recherche de l'utilisateur

Vous afficherez une notification à l'utilisateur.

### Recherche de cocktail par ingrédient
Vous devez créer un formulaire listant les ingrédients disponibles dans l'API qui permet de recherche des cocktails basé sur l'ingrédient sélectionné.


Pour cela, vous devez récupérer la liste des ingrédients au chargement de la page ( `mounted` ) et les intégrer à votre formulaire.

- API Endpoint à utiliser pour récupérer la liste des ingrédients :

  https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list


Ensuite, vous effecturez une recherche sur l'API pour récupérer les cocktails basé sur l'ingrédient sélectionné par l'utilisateur :

- API Endpoint à utiliser pour récupérer les cocktails basés sur un ingrédient :


  https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka (exemple en recherchant un cocktail contenant l'ingrédient "Vodka")
  
Vous devez effectuer une requête HTTP supplémentaire sur l'API pour chaque cocktail récupéré en utilisant l'id du cocktail `idDrink` pour obtenir ses détails, l'endpoint permettant de récupérer les cocktails basés sur un ingrédient ne renvoyant pas les détails du cocktail
(seulement l'identifiant du cocktail, sa photo et son nom).

- API Endpoint à utiliser pour récupérer les détails d'un cocktail :

   https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007 (exemple avec le cocktail `idDrink` 11007)
   
#### Gestion d'erreur
Vous devez gérer 2 cas d'erreur :
- L'utilisateur n'a pas sélectionné d'ingrédient
- Aucun cocktail ne correspond à l'ingrédient sélectionné par l'utilisateur

Vous afficherez une notification à l'utilisateur.

## Bonus
### Recherche d'un cocktail aléatoire sans alcool
Vous devez créer un bouton qui permet d'afficher un cocktail sans alcool au hasard.


Vous effecturez une recherche sur l'API pour récupérer la liste des cocktails sans alcool.


- API Endpoint à utiliser : https://www.thecocktaildb.com/api/json/v1/1/filter.php?
a=Non_Alcoholic

Ensuite, vous choisirez un cocktail de la liste au hasard en javascript.


Puis, vous effecturez une requête HTTP supplémentaire sur l'API en utilisant l'id du cocktail
`idDrink` pour obtenir ses détails, l'endpoint permettant de récupérer les cocktails sans alcool
ne renvoyant pas les détails du cocktail (seulement l'identifiant du cocktail, sa photo et son
nom).
- https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007 (exemple avec le
cocktail `idDrink` 11007)

### Pages
Votre projet doit comporter 2 pages :
- Une page d'accueil ( `/` )qui regroupe tous les formulaires de recherche de cocktails
- Une page de crédits ( `/credits` ) qui liste par exemple tous les outils open-source utilisés
pour créer cette application.


Vous utiliserez [Vue Router](https://router.vuejs.org/) pour cela.

## Contraintes techniques
- Vue CLI interdit
- Vous devrez lancer un serveur HTTP en local pour faire fonctionner le projet (pour éviter
les CORS principalement)
- Uniquement Vue et Vue Router comme dépendances Javascript autorisées
- Vous pouvez par contre utiliser le framework CSS de votre choix (si votre framework utilise des dépendances Javascript, vous pouvez les utiliser)
- Vous pouvez utiliser la très populaire librairie Axios pour vos requêtes HTTP en
remplacement de fetch
- Vous devez découper votre interface Vue en composants. Vous êtes libre de votre découpage
d'interface.
- Vous n'êtes pas obligé d'utiliser le système de modules de Javascript pour découper votre
code/vos components en fichiers indépendants. C'est un bonus.

## Livrable
Votre but est de rendre un projet totalement fonctionnel, gestion des erreurs incluse.


Une fois cela effectué, vous pouvez ajouter des bonus à votre projet. Attention, un bonus n'est
pas là pour remplacer une fonctionnalité demandée, mais pour être un "plus" par rapport à ce
qui est demandé.


Si le projet ne respecte pas les conditions demandées, ce sera un hors-sujet, car vos compétences
ne pourront pas être évaluées.


Tout code copié sur internet ou sur le projet d'un camarade ne permet pas de vous évaluer.


En cas de difficulté, cherchez toujours à rendre quelque chose de fonctionnel. Il vaut mieux
rendre un projet totalement fonctionnel qui n'utilise pas de composants Vue, de modules js...
Qu'un projet incomplet.


Vous pouvez aussi envoyer plusieurs livrables itératifs.


Exemple : un projet complet sans utilisation de composants Vue, et un projet qui utilise les
composants Vue mais qui n'est pas totalement fonctionnel.


Cela vous permet de montrer votre niveau d'acquisition des compétences demandées dans ce
module.
