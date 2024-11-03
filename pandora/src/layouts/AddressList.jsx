import AddressInfo from "@/components/AddressInfo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSelector } from "react-redux";

const AddresList = () => {
    const [showInfo, setShowInfo] = useState(false);
    const addressList = useSelector((store) => store.client.addressList)

    console.log("addressListaddressList:", addressList)
    return (

        <>
            <Button onClick={() => setShowInfo(!showInfo)} >Show kayitli liste</Button>

            <div className="flex flex-wrap gap-1">
                {showInfo && addressList?.map((adres) => {
                    return <AddressInfo
                        key={adres.id}
                        title={adres.title}
                        name={adres.name}
                        surname={adres.surname}
                        phone={adres.phone}
                        city={adres.city}
                        district={adres.district}
                        neighborhood={adres.neighborhood}
                        address={adres.address}
                    />
                })}

            </div>
        </>
    )
}
export default AddresList;
