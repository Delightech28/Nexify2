const RecentOrders = () => {
    const orders = [
      { id: "KX12345", customer: "Erica Reyes", date: "27 Aug 2019", amount: "$375", status: "Received", tracking: "DF12345" },
      { id: "KX12346", customer: "Tom Fisher", date: "24 Jun 2019", amount: "$445", status: "Confirmed", tracking: "JP12345" },
      { id: "KX12347", customer: "Elisa Hill", date: "08 May 2019", amount: "$546", status: "Confirmed", tracking: "HL12345" },
      { id: "KX12348", customer: "David Moore", date: "12 Dec 2019", amount: "$554", status: "Pending", tracking: "BG12345" },
      { id: "KX12349", customer: "Smyth Wilson", date: "21 May 2019", amount: "$554", status: "Pending", tracking: "MK12345" },
    ];
  
    return (
      <div className="bg-white p-3 md:p-4 rounded-lg shadow">
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="text-gray-500">
                <th className="p-1 md:p-2">Invoice</th>
                <th className="p-1 md:p-2">Customer</th>
                <th className="p-1 md:p-2">Purchase On</th>
                <th className="p-1 md:p-2">Amount</th>
                <th className="p-1 md:p-2">Status</th>
                <th className="p-1 md:p-2">Tracking</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="p-1 md:p-2">{order.id}</td>
                  <td className="p-1 md:p-2">{order.customer}</td>
                  <td className="p-1 md:p-2">{order.date}</td>
                  <td className="p-1 md:p-2">{order.amount}</td>
                  <td className={`p-1 md:p-2 ${order.status === "Received" ? "text-green-500" : order.status === "Confirmed" ? "text-blue-500" : "text-yellow-500"}`}>
                    {order.status}
                  </td>
                  <td className="p-1 md:p-2">{order.tracking}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default RecentOrders;
  
  