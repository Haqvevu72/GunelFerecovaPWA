const Desktop = () => {
  return (
    <div className="hidden md:flex fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white text-center z-50">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Digicard is only suitable for mobile devices
        </h1>
        <p className="text-lg">Please open the link on your mobile device.</p>
      </div>
    </div>
  );
};

export default Desktop;
