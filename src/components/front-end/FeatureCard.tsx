interface PropsType {
    icon: React.ReactNode;
    title: string;
    desc: string;
  }
  
  const FeatureCard = ({ icon, title, desc }: PropsType) => {
    return (
      <div className="flex items-start gap-4 bg-gray-100 px-6 py-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        {/* Icon Section */}
        <div className="text-gray-800">{icon}</div>
  
        {/* Content Section */}
        <div>
          <h2 className="font-medium text-lg text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm">{desc}</p>
        </div>
      </div>
    );
  };
  
  export default FeatureCard;  