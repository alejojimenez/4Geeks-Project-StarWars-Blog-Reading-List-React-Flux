const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            swapiList:[],
            swapiList1:[],
            swapiList2:[],
            cardDetailCharacter:[],
            cardDetailPlanets:[],
            cardDetailVehicle:[],
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
                    'https://swapi.dev/api/vehicles/',
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
                    `https://swapi.dev/api/vehicles/${id}/`, 
                    config
                );
                const json = await response.json();
                console.log('--json--', json);
                setStore({ cardDetailVehicle: json }) 
            },
            setFavorites: ( arr = [] ) => {
                setStore({
                    favorites: arr
                })
            },

            // // Fetch Favorites GET
            // fetchFavoritesGet: async () => {
            //     const config = {
            //         "method": "GET",
            //         "headers": {
            //             "Content-type": "application/json"
            //         },
            //     }
            //     const response = await fetch(
            //         'https://assets.breatheco.de/apis/fake/todos/user/alejojimenez',
            //         config
            //     );
            //     const json = await response.json();
            //     console.log('--json--', json);
            //     setStore({ favorites: json.results })
            // },
            // // Fetch Favorities PUT
            // fetchFavoritesPut: async () => {
            //     const config = {
            //         "method": "PUT",
            //         "headers": {
            //             "Content-type": "application/json",
            //             "body": "JSON.stringify(newList)"
            //         },
            //     }
            //     const response = await fetch(
            //         'https://assets.breatheco.de/apis/fake/todos/user/alejojimenez',
            //         config
            //     );
            //     const json = await response.json();
            //     console.log('--json--', json);
            //     setStore({ favorites: json.results })
            // }

		}
	};
};

export default getState;