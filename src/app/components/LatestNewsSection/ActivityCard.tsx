import Image from "next/image";

interface ActivityCardProps {
  activity: {
    id: number;
    title: string;
    date: string;
    position: string;
    description: string;
    image: string;
  };
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="w-[335px] bg-white overflow-hidden">
      <div className="relative bg-white">
        <Image
          src={activity.image}
          alt={activity.title}
          width={335}
          height={331}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-6 px-4">
        <div className="text-sm text-gray-600 mb-2">
          <p>
            {activity.date} {activity.position}
          </p>
        </div>

        <div className="mt-4 pb-6 space-y-2 border-b border-[#D5D5D5]">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{activity.title}</h3>
          <p className="text-gray-500 line-clamp-2">{activity.description}</p>
        </div>

        <div className="py-2 flex justify-between items-center">
          <div>立即報名</div>
          <div>
            <img src="/images/icons/right_arrow.png" alt="right_arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
