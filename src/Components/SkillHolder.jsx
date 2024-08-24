const SkillHolder = ({ link, toolTipName }) => {
  return (
    <div className="relative flex h-16 w-16 rounded-full mt-11 bg-custom-gradient items-center justify-center transition-all hover:translate-x-5 duration-300 mr-8 group">
      <img className="h-10 w-10" src={link} alt={toolTipName} />
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {toolTipName}
      </div>
    </div>
  );
};

export default SkillHolder;
