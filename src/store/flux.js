const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            swapiList:[],
            swapiList1:[],
            swapiList2:[],
            favorites:[]
		},
		actions: {
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
            fetchFavoritesGet: async () => {
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    'https://assets.breatheco.de/apis/fake/todos/user/alejojimenez',
                    config
                );
                const json = await response.json();
                console.log('--json--', json);
                setStore({ favorites: json.results })
            },
            fetchFavoritesPut: async () => {
                const config = {
                    "method": "PUT",
                    "headers": {
                        "Content-type": "application/json",
                        "body": "JSON.stringify(newList)"
                    },
                }
                const response = await fetch(
                    'https://assets.breatheco.de/apis/fake/todos/user/alejojimenez',
                    config
                );
                const json = await response.json();
                console.log('--json--', json);
                setStore({ favorites: json.results })
            }

		}
	};
};

export default getState;