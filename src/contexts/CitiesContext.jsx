import {createContext, useContext, useEffect, useReducer} from "react";

const CitiesContext = createContext();
const BASE_URL='http://localhost:9000';

const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: '',
}

function reducer(state, action) {
    switch (action.type) {
        case 'loading':
            return {
                ...state,isLoading: true,
            }

        case 'cities/loaded':
            return {
                ...state,isLoading: false, cities: action.payload
            }
        case 'city/loaded':
            return {...state,isLoading: false, currentCity: action.payload}


        case 'cities/created':
            return {
                ...state,isLoading: false,cities: [...state.cities, action.payload]
            }


        case 'city/deleted':
            return {
                ...state,isLoading: false,cities: state.cities.filter(city => city.id !== action.payload)
            }


        case 'rejected':
            return {
                ...state,isLoading: false,error:action.payload,
            }

        default: throw new Error('Unknown action type');
    }
}

function CitiesProvider({children}) {
    const [{cities, isLoading, currentCity}, dispatch,error] = useReducer(reducer, initialState);


    useEffect(function (){
        async function fetchCities(){
            dispatch({type:'loading'})
            try {
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                dispatch({type: 'cities/loaded',payload:data})
            }catch {
                dispatch({type:'rejected',payload:'could not load cities.'});
            }
        }
        fetchCities();
    },[])

    async function getCity(id){
        if (Number(id) === currentCity.id){
            return;
        }

        dispatch({type:'loading'})
        try {
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            dispatch({type:'city/loaded',payload: data})
        }catch {
            dispatch({type:'rejected',payload:'could not load cities.'});
        }

    }

    async function createCity(newCity){
        dispatch({type:"loading"})
        try {
            const res = await fetch(`${BASE_URL}/cities`,{
                method: "POST",
                body:JSON.stringify(newCity),
                headers:{"Content-Type":"application/json"}
            });
            const data = await res.json();

            dispatch({type: 'cities/created',payload:data})
        }catch {
            dispatch({type:'rejected',payload:'could not create cities.'});
        }
    }

    async function deleteCity(id){
        dispatch({type:"loading"})
        try {
            await fetch(`${BASE_URL}/cities/${id}`,{
                method: "DELETE",
            });

            dispatch({type: 'city/deleted',payload:id})
        }catch {
            dispatch({type:'rejected',payload:'could not delete cities.'});
        }
    }

    return <CitiesContext.Provider value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity
    }}>{children}</CitiesContext.Provider>;

}

function useCities(){
    const context = useContext(CitiesContext);
    if (context === undefined) {
        throw new Error("useCities must be used within the context");
    }
    return context;
}

export {CitiesProvider, useCities}