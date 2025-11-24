
const SocialNetwork = ({ newsIcons }) => {
  return (
   

      <div className="flex items-center justify-start w-full gap-1">
        {newsIcons.map((items, index) => (
          <div
            className={`w-10 h-10 flex items-center justify-center rounded ${items.bg}`} key={index}
          >
            <items.Icon className="text-white-green " />
          </div>
        ))}
      </div>
  );
};

export default SocialNetwork;
