import TinderProjectCard from "@/app/(projects)/_components/TinderProjectCard";

const Slider = () => {
  return (
    <div className="relative mx-auto flex h-[500px] cursor-grab flex-col items-center justify-center gap-6">
      {[1, 2, 3, 4].map((item, index) => (
        <TinderProjectCard
          rotate={index % 2 === 0 ? -(item * index + 1) : +(item * index + 1)}
          index={index}
          width={350}
          height={450}
        />
      ))}
    </div>
  );
};

export default Slider;
