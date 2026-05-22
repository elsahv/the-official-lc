
 


function Dynamic(props) {
  return props.isLoggedIn ? (
    <div id="BannerTitle-section" className="bg-cerulean flex justify-start bg-">
      <h2 className="2xl:text-4xl md:text-3xl text-2xl md:px-5 px-1 pt-2 pl-2 font-bold ">
        {props.username}
      </h2>
    </div>
  ) : (
    // LEFT IMG --V
    <img
      src="https://dl.dropboxusercontent.com/scl/fi/xseyb5iv2nbfwyvsn2ee7/LC.png?rlkey=buq16mp5xccyn7qdcu5w02r9i&st=6mltgxjt&dl=0"
      alt=""
      className=""
    />
  );
}

export default Dynamic;
 

