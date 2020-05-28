import React, { Componet } from 'react';
import ServerData from '../serverData/serverData.js'

class MainePage extends Componet {
    constructor() {
        super();
        state: {}
    }

    render() {
        return (
            <div className="wrapper">
                <ServerData/>
            </div>
        )
    }
}

export default MainePage;