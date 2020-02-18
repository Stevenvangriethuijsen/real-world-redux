export function developersFetched(developers) {
  console.log("I should be step three. Soon as i'm done, I'm dashin ");
  return {
    type: "FETCHED_DEVELOPERS",
    payload: developers
  };
}

export function fetchDevelopers(dispatch, getState) {
  console.log("I should be number two, Off the charts, Classic");
  fetch(
    "https://codaisseur-coders-network.herokuapp.com/developers?offset=10&limit=20"
  )
    .then(res => res.json())
    .then(data => {
      console.log("this should be all the data", data);
      // data is object with two properties count and rows, rows holds the array with information we need
      console.log(data.rows);
      dispatch(developersFetched(data.rows));
    });
}
