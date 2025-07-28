import React from "react";
import { fakeDataUsersList, fakeDataBusinessTransactions } from "@/fakeData";

const getRecentUsers = () =>
  [...fakeDataUsersList]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

const getRecentTransactions = () =>
  [...fakeDataBusinessTransactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

const RecentActivity: React.FC = () => {
  const recentUsers = getRecentUsers();
  const recentTransactions = getRecentTransactions();

  return (
    <div className="bg-white rounded shadow p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">New User Sign-ups</h3>
        <ul>
          {recentUsers.map((user) => (
            <li key={user.id} className="flex justify-between py-1 border-b last:border-b-0">
              <span>{user.firstName} {user.lastName} ({user.email})</span>
              <span className="text-gray-500 text-sm">{user.createdAt}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Recent Transactions</h3>
        <ul>
          {recentTransactions.map((tx) => (
            <li key={tx.id} className="flex flex-col py-2 border-b last:border-b-0">
              <div className="flex justify-between">
                <span className="font-medium">{tx.type}</span>
                <span className="text-gray-500 text-sm">{tx.date}</span>
              </div>
              <div className="flex flex-wrap justify-between text-sm mt-1">
                <span>Item: <span className="font-semibold">{tx.item}</span></span>
                {tx.type === "Car Sale" && (
                  <>
                    <span>Buyer: {tx.buyer}</span>
                    <span>Seller: {tx.seller}</span>
                  </>
                )}
                {tx.type === "Car Rental" && (
                  <>
                    <span>Renter: {tx.renter}</span>
                    <span>Owner: {tx.owner}</span>
                  </>
                )}
                {tx.type === "Spare Parts Sale" && (
                  <>
                    <span>Buyer: {tx.buyer}</span>
                    <span>Seller: {tx.seller}</span>
                  </>
                )}
                <span>Price: <span className="font-semibold">${tx.price}</span></span>
                <span>Status: <span className="font-semibold">{tx.status}</span></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivity; 