import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Result() {
    const [display, setDisplay] = useState("Loading...");

    async function getPrediction(){
        try {
            const response = await axios.get("/get-request");
            setDisplay(response.data.value);
        }
        catch (error) {
            console.log(error);
            setDisplay("Model Error, Please Try Again Later")
        }
    }

    useEffect(() => {
        getPrediction();
    }, []);
    return(<div style={{fontSize: "5rem"}}>{display}</div>)
}

export default Result;
