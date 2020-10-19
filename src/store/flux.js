const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            swapiList:[],
            swapiList1:[],
            swapiList2:[],
            cardDetailCharacter:[],
            cardDetailPlanets:[],
            cardDetailSpecies:[],
            favorites:[]
		},
		actions: {
            // Fetch List Card
			fetchSwapies: async () =>{
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    'https://swapi.dev/api/people/',
                    config
                );
                const json = await response.json();
                console.log('--json--', json);
                setStore({ swapiList: json.results })
            },
            // Fetch List Card 1            
            fetchSwapies1: async () =>{
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    'https://swapi.dev/api/planets/',
                    config
                );
                const json = await response.json();
                console.log('--json--', json);
                setStore({ swapiList1: json.results })
            },
            // Fetch List Card 2            
            fetchSwapies2: async () =>{
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    'https://swapi.dev/api/species/',
                    config
                );
                const json = await response.json();
                console.log('--json--', json);
                setStore({ swapiList2: json.results })
            },
            // Fetch Card Detail
			fetchCardDetail: async (id) =>{
                console.log('---Flux---', id)
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    `https://swapi.dev/api/people/${id}/`, 
                    config
                );
                const json = await response.json();
                console.log('--json--', json);
                setStore({ cardDetailCharacter: json })
            },
            // Fetch Card Detail 1
			fetchCardDetail1: async (id) =>{
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    `https://swapi.dev/api/planets/${id}/`,
                    config
                );
                const json = await response.json();
                console.log('--json--', json);
                setStore({ cardDetailPlanets: json })
            },
            // Fetch Card Detail 2
			fetchCardDetail2: async (id) =>{
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    `https://swapi.dev/api/species/${id}/`, 
                    config
                );
                const json = await response.json();
                console.log('--json--', json);
                setStore({ cardDetailSpecies: json }) 
            },
            setFavorites: ( arr = [] ) => {
                setStore({
                    favorites: arr
                })
            },
		}
	};
};

export default getState;