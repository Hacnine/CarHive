import { useEffect } from "react";
import SummaryCard from "../../components/ProfileComponents/SummaryCard";

import { profile, profileLinks, summary } from "../../constants/index_four";
import FavoriteCars from "./FavoriteCars";
import RecentOrder from "./RecentOrder";
import ProfileCard from "../../components/ProfileComponents/ProfileCard";
import { useState } from "react";
import ProfileLinks from "../../components/ProfileComponents/ProfileLinks";
import { AppContext, useGlobalContext } from "../../Context";
import Header from "../../components/Header";

const Dashboard = () => {
  const { activeLink, setActiveLink, title, setTitle } =
    useGlobalContext(AppContext);
  useEffect(() => {
    const dataToSend = "Dashboard";

    setTitle(dataToSend);
  }, []);

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    // Fetch dashboard summary and recent orders
    const fetchDashboard = async () => {
      try {
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) ? import.meta.env.VITE_API_URL : '';
  const res = await fetch(`${base}/api/bookings/dashboard`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
            // Add Authorization header here if your app uses token auth, e.g.
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!res.ok) throw new Error('Failed to fetch dashboard');
        const json = await res.json();
        if (json && json.success) setDashboard(json.data);
      } catch (err) {
        console.warn('Could not load dashboard data', err);
      }
    };

    fetchDashboard();
  }, []);

  // const setData = (data) => {
  //   setTitle(data);
  // };

  return (
  <div className="w-full mx-auto px-4">
      <Header/>
    <div className="flex items-start justify-between flex-col md:flex-row gap-8 wrapper my-20">
      <div className="md:w-[30%] bg-white-green rounded-md px-7 py-7 w-full ">
        <ProfileLinks />
      </div>

      <div className="md:w-[70%] w-full">
        {/* {activeLink ===0? 
      <div>
      <Dashboard setData={setData}/>
      </div>
      : activeLink ===1? 
      <div>
      <Profile setTitle={setData}/>  
      </div>
      :activeLink ===2? 
      <div>
        <Orders setData={setData}/>
      </div>
      :null
      }
    </div> */}

        <div className="sm:space-y-5 gap-10  flex flex-col items-center justify-center ">
          <div className="grid sm:grid-cols-4 sm:mt-0 mt-14 grid-cols-2 iten w-full ">
            {(() => {
              // Build displayed summary using fetched dashboard data if available
              const displayed = dashboard
                ? [
                    { ...summary[0], number: String(dashboard.upcomingOrders || 0) },
                    { ...summary[1], number: String(dashboard.coupons || 0) },
                    { ...summary[2], number: String(dashboard.totalOrders || 0) },
                    { ...summary[3], number: String(dashboard.cancelledOrders || 0) }
                  ]
                : summary;

              return displayed.map((items, index) => (
                <div className="px-2 " key={index}>
                  <SummaryCard {...items} />
                </div>
              ));
            })()}
          </div>
          <div className="w-full ml-4">
            <RecentOrder orders={dashboard ? dashboard.recentOrders : null} />
          </div>

          <div className="w-full ml-4">
            <FavoriteCars />
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Dashboard;
