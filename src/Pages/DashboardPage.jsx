// src/pages/DashboardPage.jsx
import StatsCard from "../Components/StatsCard";
import RevenueGraph from "../Components/RevenueGraph";
import EmailChart from "../Components/EmailChart";
import RecentOrders from "../Components/RecentOrders";
import DeliveryProgress from "../Components/DeliveryProgress";

const DashboardPage = () => {
  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
        <StatsCard title="Total Sale" value="$345K" change="+30% Last Week" />
        <StatsCard title="Visitors" value="65,427" change="+20% Last Week" />
        <StatsCard title="New Orders" value="1925" change="-12% Last Week" />
        <StatsCard title="Customers" value="2910" change="+14% Last Week" />
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="col-span-1 md:col-span-2">
          <RevenueGraph />
        </div>
        <div className="col-span-1">
          <EmailChart />
        </div>
      </div>
      {/* Orders and Delivery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="col-span-1 md:col-span-2">
          <RecentOrders />
        </div>
        <div className="col-span-1">
          <DeliveryProgress />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;


