export const initialFoods = async (callback) => {
  const rawApiData = await fetch ('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const ApiData = await rawApiData.json();
  const { meals } = ApiData;
  callback(meals);
}

export const initialDrinks = async (callback) => {
  const rawApiData = await fetch('htpps://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const ApiData = await rawApiData.json();
  const { drinks } = ApiData;
  callback(drinks);
}
