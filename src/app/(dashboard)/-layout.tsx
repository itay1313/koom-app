import { Header } from "../_components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <h1>inner layout</h1>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default DashboardLayout;
