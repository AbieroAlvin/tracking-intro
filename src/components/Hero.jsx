import heroImg from "../assets/images/illustration-devices.svg";
const Hero = () => {
  return (
    <div className="mx-auto w-full mt-24">
      <div className="w-full flex md:flex-row flex-col-reverse justify-between md:gap-4 gap-8 items-center mx-auto max-w-[1080px]">
        <div className="flex flex-col px-8 md:px-0 py-8 md:py-0">
          {/* New Heading */}
          <div className="flex gap-3 font-headings mb-4 uppercase">
            <div className="bg-[var(--V-Dark-Blue)] text-[var(--L-Grayish-Blue)] px-3 py-[2px] rounded-full flex items-center justify-center text-xl">
              <h5>New</h5>
            </div>
            <h5 className="text-xl text-[var(--Grayish-Blue)] tracking-widest">
              Monograph Dashboard
            </h5>
          </div>
          {/* content */}
          <div className="flex flex-col gap-8">
            <h1 className="font-headings md:text-6xl text-4xl font-semibold text-[var(--V-Dark-Blue)] uppercase">
              Powerful insights into your team
            </h1>
            <p className="font-body text-[18px] text-[var(--D-Grayish-Blue)] md:w-[50%]">
              {" "}
              Project planning and time tracking for agile teams
            </p>
          </div>
          {/* buttons */}
          <div className="mt-8 flex gap-6">
            <button className="font-headings uppercase bg-[var(--Red)] text-[var(--L-Grayish-Blue)] rounded-md px-6 py-2 ">
              Schedule a demo
            </button>
            <button className="font-headings uppercase text-[var(--Grayish-Blue)] ">
              to see a live preview
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="illustration of two devices" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
