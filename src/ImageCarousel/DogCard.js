
const DogCard = (props) => {
    const {dog} = props
    console.log(dog)
  return (
    <div>
      <img className = "w-[400px] h-[500px] object-cover rounded-lg m-4" src={dog}/>
    </div>
  );
}

export default DogCard;
