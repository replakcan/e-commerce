import AddressInfo from "@/components/AddressInfo";
import Heading from "@/components/ui/heading";
import { setAddress } from "@/redux/actions/shoppingCartActions";
import { useDispatch, useSelector } from "react-redux";

const AddresList = () => {
  const addressList = useSelector((store) => store.client.addressList);
  const dispatch = useDispatch();

  const chooseAddress = (address) => {
    dispatch(setAddress(address));
  };

  return (
    <div className="">
      {addressList.length === 0 && (
        <Heading variant="h1">Kayitli adres kaydi bulunamadi.</Heading>
      )}

      <div className="flex flex-wrap gap-1">
        {addressList?.map((adres) => {
          return (
            <AddressInfo
              onClick={() => chooseAddress(adres)}
              key={adres.id}
              title={adres.title}
              name={adres.name}
              surname={adres.surname}
              phone={adres.phone}
              city={adres.city}
              district={adres.district}
              neighborhood={adres.neighborhood}
              address={adres.address}
              id={adres.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default AddresList;
