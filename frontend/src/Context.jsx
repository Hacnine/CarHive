
import React, {useContext, useState} from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
 
    const [signInBtn, setSignInBtn] = useState(true);
    const [isDark, setIsDark] = useState(false);
    const[luxury ,setLuxury] = useState(true);
    const[comfort ,setComfort] = useState(false);
    const[prestige ,setPrestige] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const [title, setTitle] = useState('');
    const [totalItem, setTotalItem] = useState(0);
    const [searchResults, setSearchResults] = useState(null);
    const [latestSearchPayload, setLatestSearchPayload] = useState(null);
    const [selectedVehicleType, setSelectedVehicleType] = useState(null);
    const [triggerSearch, setTriggerSearch] = useState(false);
    const [bookingForm, setBookingForm] = useState({
      pickupLocation: 'City Center',
      dropoffLocation: '',
      pickupDate: new Date(),
      pickupTime: '00:00',
      dropoffDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      dropoffTime: '00:00',
    });
    const rentalLink = '/account/rental';

  
    return (
        <AppContext.Provider value={{  signInBtn, setSignInBtn, isDark, setIsDark ,qualityDescription: luxury,setQualityDescription: setLuxury, comfort ,setComfort, prestige ,setPrestige,activeLink, setActiveLink,title, setTitle, totalItem, setTotalItem,rentalLink, searchResults, setSearchResults, latestSearchPayload, setLatestSearchPayload, selectedVehicleType, setSelectedVehicleType, triggerSearch, setTriggerSearch, bookingForm, setBookingForm}}>
        {children}
      </AppContext.Provider>
    );
  }

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};