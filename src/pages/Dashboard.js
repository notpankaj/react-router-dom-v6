import { Outlet } from "react-router-dom";
const Dashboard = ({ user }) => {
  return (
    <>
      <section className="section">
        <h4>Dashboard</h4>
        <span>Hello, {user?.name}</span>
      </section>
      <Outlet />
    </>
  );
};
export default Dashboard;
