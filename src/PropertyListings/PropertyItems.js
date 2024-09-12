import properties from "./properties";
console.log(properties);

const PropertyItems = (props) => {
  const { property } = props;
  console.log(property);

  return (
    <div className="m-4 border-2 border-zinc rounded-lg">
      <img
        src={property.imageUrl}
        className="w-[280px] h-[200px] object-cover rounded-t-lg"
      />
      <div className="m-2 text-xl">{property.address}</div>
      <div className="m-2 text-lg text-zinc-500">
        {property.city}, {property.state}
      </div>
      <div>
        <div className="m-2 flex justify-between ">
          <div className="flex">
            <i className="fa-solid fa-bed text-2xl text-blue-500"></i>
            <div className="ml-2 text-zinc-500 text-xl">{property.bedrooms}</div>
          </div>

          <div className="flex">
            <i className="fa-solid fa-toilet text-2xl text-blue-500"></i>
            <div className="ml-2 text-zinc-500 text-xl">{property.bedrooms}</div>
          </div>
       
         
        </div>
      </div>
    </div>
  );
};

export default PropertyItems;
