import { team } from "@/types/team";
import Image from "next/image";

const SingleTeamCard = ({ team }: { team: team[number] }) => {
  const { name, image, designation } = team;

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white p-4 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-2 xl:px-2">
        <div className="flex flex-col items-center">
          <div className="relative h-[15rem] w-full overflow-hidden rounded-lg ">
            <Image src={image} alt={name} fill className=""/>
          </div>
          <div className="w-full text-center">
            <h3 className="mb-1 mt-3 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default SingleTeamCard;