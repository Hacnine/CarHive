import { data } from "../constants";
import { FaBeer, Fa500Px, FaAccusoft } from "react-icons/fa";

const Contact2 = () => {
  const data = [
    {
      icons: FaBeer,
    },
    {
      icons: Fa500Px,
    },
    {
      icons: FaAccusoft,
    },
  ];
  return (
    <>
      <div className="w-1/2 mx-auto bg-green-200 p-4">
        {data.map((item, index) => {
          const Icon = item.icons;

          return (
            <div key={index} className="mx-auto bg-yellow-200 w-1/3">
              <item.icons />
            </div>
          );
        })}
      </div>
      <div class="w-1/2 bg-blue-200 p-4">
        <p>Without mx-auto</p>
      </div>

      <div class="w-1/2 bg-blue-200 p-4 mx-auto">
        <p>With mx-auto</p>
      </div>
    </>
  );
};

export default Contact2;
