// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2209-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}players`);
    const result = await response.json();
    if(result.error) {
      throw result.error;
    }
    console.log(result.data.players);

    return result.data.players;
  } catch(error) {
    console.error('Oops! Trouble fetching players!', error);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}players/${playerId}`)
    const result = await response.json();

    return result.data.player;
  }
  catch(error){
    console.log(error.message)
  }
};


export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(`${APIURL}players`, 
     {method:"POST",
      headers:{
       'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerObj),
    }
    );

    const result = await response.json();

    return result.data.newPlayer;
  }
  catch (error) {
    console.error(error);
  }

};

export const removePlayer = async (playerId) => {

};
