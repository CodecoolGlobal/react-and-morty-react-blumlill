import React, { useEffect, useState } from 'react';
import { mainUrls } from './api/dataRoutes';

const Display = (props) => {
    
    const [data, setData] = useState(props.data);
    console.log(data.info.next);

    return (
        <div>
            {data ? <div>
                {
                  data.results.map(element => {
                        return <div>
                            <p>
                                {element.gender}
                            </p>
                            <p>
                                {element.location.name}
                            </p>
                            <p>
                                {element.origin.name}
                            </p>
                        </div>
                    ;
                    })
                }
            </div> : 'Loading'}
    
        </div>
    );
};

export default Display;