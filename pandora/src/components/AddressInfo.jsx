import Heading from "./ui/heading";


const AddressInfo = ({title, name, surname, phone, city, district, neighborhood, address}) => {

    
    return (
        <div className="border border-black w-[33%]">
            <Heading variant="h2">{title}</Heading>
            <Heading variant="h4">{name} {surname}</Heading>
            <p><span className="text-danger font-bold">phone:</span> {phone}</p>
            <p><span className="text-danger font-bold">city:</span> {city}</p>
            <p><span className="text-danger font-bold">district:</span> {district}</p>
            <p><span className="text-danger font-bold">neighborhood:</span> {neighborhood}</p>
            <p className="w-1/2">address: {address}</p>
        </div>

    )
}
export default AddressInfo;