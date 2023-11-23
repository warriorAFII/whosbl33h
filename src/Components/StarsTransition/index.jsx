import StarsParticles from "../Particles/StarsParticles";

const StarsTransition = () => {
    return (
      <div  className="w-full flex justify-center overflow-hidden-web relative" style={{height: '100vh'}}>
        <div className="stars"></div>
        
        <div className="w-full h-screen min-h-[800px] absolute">
        <StarsParticles className="w-full h-screen z-0 min-h-[800px]"/>
    </div>
        <h1 style={{fontFamily: 'League Spartan', fontSize: 100}}>From idea to reality</h1>
       
      </div>
    );
  }
  
  export default StarsTransition