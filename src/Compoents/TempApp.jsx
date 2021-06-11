import React, { useState, useEffect } from 'react';
import './css/style.css';
import Token from './Token';

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Butwal");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${Token}`
            const response = await fetch(url);
            const resJson = await response.json()
            setCity(resJson.main)
        }
        fetchApi();
    }, [search])


    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                </div>
                {
                    !city ? (
                        <p className="errorMsg">No Data Found</p>
                    ) : (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h2>
                                <h1 className="temp">{city.temp}</h1>
                                <h3 className="tempmin_max">Minimum:{city.temp_min}| Maximum:{city.temp_max} </h3>
                            </div>

                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                    )}


            </div>

        </>
    )

};

export default TempApp;