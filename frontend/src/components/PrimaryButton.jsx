import { AppContext,useGlobalContext } from "../Context";
import { useNavigate  } from 'react-router-dom';

export default function PrimaryButton ({className,textColor, buttonName, icon, padding,shadow,  scale, url, rounded,type, onClick, disabled, loading}) {
  
  const {setSignInBtn,setQualityDescription ,setComfort ,setPrestige} = useGlobalContext(AppContext);

  const navigateLink = useNavigate();

  function signIn(){
    setSignInBtn(true);
    navigateLink('/signin'); }

  function signUp(){
    setSignInBtn(false)
  }

  function contactUsBtn(){
    navigateLink('/contact');
  }

  function luxuryBtn(){

    setQualityDescription(true);
    setComfort(false);
    setPrestige(false);

  }

  function comfortBtn(){

    setComfort(true);
    setQualityDescription(false);
    setPrestige(false);


  }

  function prestigeBtn(){

    setPrestige(true);
    setComfort(false);
    setQualityDescription(false);

  }

  const defaultClickHandler = 
  ["Sign In"].includes(buttonName) ? signIn : 
  ["Sign Up"].includes(buttonName) ? signUp: 
  ["LUXURY"].includes(buttonName) ? luxuryBtn : 
  ["COMFORT"].includes(buttonName) ? comfortBtn:
  ["PRESTIGE"].includes(buttonName) ? prestigeBtn : 
  ["CONTACT US"].includes(buttonName) ? contactUsBtn:null;

  const clickHandler = onClick || defaultClickHandler;



  return (
    <div>
      <a href={url}>
  <button
    disabled={disabled}
    className={` ${rounded? `${rounded}` : 'rounded font-semibold'} capitalize  items-center justify-center     ${shadow? `${shadow}`: 'shadow-md shadow-green-800'} tracking-[1px] font-serif ${className} 
  ${textColor ? `${textColor}` : 'text-white'} ${padding ? `${padding}`: `px-4 py-2 text-sm`} ${scale? "":"hover:scale-105 transition-all duration-500 ease-in "}`}
    onClick={clickHandler} type={type} >
    <div className="flex items-center justify-center">
      <span className="pr-2">{icon}</span>
      {loading ? <span className="animate-pulse">Searching...</span> : buttonName}
    </div>
  </button>
      </a>
    </div>
  )


}
