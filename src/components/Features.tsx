import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineVideocam } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IconType } from "react-icons";
const features = [
  {
    icon: MdOutlineVideocam,
    title: "Video Consultations",
    desc: "Connect with doctors through secure video calls from anywhere, anytime.",
  },
  {
    icon: FaCalendarAlt,
    title: "Easy Scheduling",
    desc: " Book appointments that fit your schedule with our easy-to-use calendar system.",
  },
  {
    icon: MdPayment,
    title: "Secure Payments",
    desc: "Pay for consultations securely online with various payment options.",
  },
  {
    icon: VscWorkspaceTrusted,
    title: "VPrivate & Confidential",
    desc: "Your medical information is encrypted and protected at all times.",
  },
];

type FeatureCardProps = {
  Icon: IconType;
  title: string;
  desc: string;
};
const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, desc }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="p-4 bg-blue-600 text-white rounded-md">
        <Icon size={20} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <h2 className="text-md">{desc}</h2>
      </div>
    </div>
  );
};
export const Features = () => {
  return (
    <div className="flex flex-col gap-4 items-center py-20 ">
      <div className="flex flex-col items-center gap-4 mb-20">
        <h1 className="text-2xl font-bold text-blue-600 text-center">
          Features
        </h1>
        <h2 className="text-4xl font-bold text-black text-center ">
          A Better Way to Receive Medical Care
        </h2>
        <h3 className="text-xl text-gray-600 max-w-2xl text-center">
          Our platform provides everything you need for quality healthcare from
          the comfort of your home.
        </h3>
      </div>
      {/* <div className="grid grid-cols-2  gap-y-12"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full max-w-7xl px-4">
        {features.map((feature, index) => (
          <FeatureCard
            Icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
