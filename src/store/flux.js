const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            swapiList:[]
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
            }
		}
	};
};

export default getState;