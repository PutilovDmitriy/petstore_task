import * as React from "react";
import Pet from "./Pet";
interface PetsProps {}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Pets: React.FC<PetsProps> = (props) => {
  return (
    <div className="pets">
      {arr.map((pet) => (
        <Pet key={pet} />
      ))}
    </div>
  );
};

export default Pets;
