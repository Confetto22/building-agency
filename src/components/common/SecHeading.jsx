const SecHeading = ({ mainhead, subhead, mainstyle, substyle, divstyle }) => {
  return (
    <div className={`${divstyle}`}>
      <p className={`${mainstyle} text-red-600 uppercase font-semibold`}>
        {mainhead}
      </p>
      <p className={`${substyle} capitalize  font-semibold`}>{subhead}</p>
    </div>
  );
};

export default SecHeading;
