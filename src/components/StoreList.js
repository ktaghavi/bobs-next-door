import React from "react"
import Store from "./Store"

function StoreList({storeData}) {

    const stores = storeData.map(individualStore => <Store key={individualStore.id} store={individualStore} />);

    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {stores}
            </tbody>
        
        </table>
    );
}

export default StoreList;