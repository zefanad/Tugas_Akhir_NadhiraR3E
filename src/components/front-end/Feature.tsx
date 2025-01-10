import FeatureCard from "./FeatureCard";
import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";

const data = [
  {
    icon: TbTruckDelivery,
    title: "Free Delivery",
    desc: "Orders from all item",
  },
  {
    icon: RiRefund2Fill,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    icon: TbDiscount,
    title: "Member Discount",
    desc: "On Order Over $99.00",
  },
  {
    icon: MdSupportAgent,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day",
  },
];

const Feature = () => {
  return (
    <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={<item.icon className="text-4xl text-gray-800" />}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Feature;