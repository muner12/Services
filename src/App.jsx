import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashBoard from "./Pages/DashBoard";
import DashBoard2 from "./Pages/DashBoard2";
import Properties from "../src/Pages/Properties";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "./Pages/Jobs";
import Contractor from "./Pages/Contractor";
import Setting from "./Pages/Setting";
import Reports from "./Pages/Reports";
import Finance from "./Pages/Finance";
import Calender from "./Pages/Calender";
import Login from "./Pages/Login";
import ReportsAddSubscription from "./Pages/ReportsAddSubscription";
import FinanceContractorInvoice from "./Pages/FinanceContractorInvoice";
import FinanceLandlordInvoice from "./Pages/FinanceLandlordInvoice";
import FinanceCIMakePayment from "./Pages/FinanceCIMakePayment";
import Events from "./Pages/Events";
import Subscription from "./Pages/Subscription";
import FinanceContractorInvoiceClose from "./Pages/FinanceContractorInvoiceClose";
import PaymentAddRecipient from "./Pages/PaymentAddRecipient";
import PaymentConfirm from "./Pages/PaymentConfirm";
import Branding from "./Pages/Branding";
import DetailsProperty from "./Pages/DetailsProperty";
import AddProperties from "./Pages/AddProperties";
import AddCertificate from "./Pages/AddCertificate";
import PropertyDetail from "./Pages/PropertyDetail";
import AddNewJob from "./Pages/AddNewJob";
import EditPropertyDetail from "./Pages/EditPropertyDetail";
import JobDetail from "./Pages/JobsDetail";
import LandLordApproval from "./Pages/LandLordApproval";
import GetQoute from "./Pages/GetQoute";
import JobAssignment from "./Pages/JobAssignment";
import EngineerResponse from "./Pages/EngineerResponse";
import JobAss from "./Pages/JobAss";
import Plumber from "./Pages/Plumber";
import AddContractor from "./Pages/AddContractor";
import ContracterDetail from "./Pages/ContracterDetail";
import ViewAll from "./Pages/ViewAll";
import AddNewGroups from "./Pages/AddNewGroups";
import Groups from "./Pages/Groups";
import AccessControl from "./Pages/AccessControl";
import CreateNewRule from "./Pages/CreateNewRule";
import UserDetail from "./Pages/UserDetail";
import AddUserRule from "./Pages/AddUserRule";
import TimeZone from "./Pages/TimeZone";
import OpeningHours from "./Pages/OPeningHours";
import SetOpeningHour from "./Pages/SetOpeningHour";
import JobEngin from "./Pages/JobEngin";
import SelectCategory from "./Pages/SelectCategory";
import SelectGroup from "./Pages/SelectGroup";
import Sla from "./Pages/Sla";
import JobClosure from "./Pages/JobClosure";
import ResponseTimeLimit from "./Pages/ResponseTimeLimit";
import Monitering from "./Pages/Monitering";
import ViewAllJobs from "./Pages/ViewAllJobs";
import AddNewEmail from "./Pages/AddNewEmail";
import MobileApp from "./Pages/MobileApp";
import AddEmail from "./Pages/AddEmail";
import AddEmailSetting from "./Pages/AddEmail";
import ContractorPriority from "./Pages/ContractorPriority";
import ContracterCompliance from "./Pages/ContracterCompliance";
import LiecenseAndText from "./Pages/LiecenseAndText";
import SettingFinance from "./Pages/SettingFinance";
import RecentReports from "./Pages/RecentReports";
import RunReports from "./Pages/RunReports";
import MapView from "./Pages/Map/MapView";

function App() {
  const [selectedContent, setSelectedContent] = useState("content1");

  const handleItemClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="font-roboto flex">
      {/* csdcsd */}
      <Router>
      <Sidebar />
        <Routes>
          <Route path="/" element={<DashBoard2 />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/add-property" element={<AddProperties />}/>
           <Route path="/property/property-detail"element={<PropertyDetail />}/>
           <Route path="/property/add-certificate" element={<AddCertificate />}/>
          <Route path="/property/add-jobs" element={<AddNewJob />}/>
          <Route path="/property/edit-property-detail" element={<EditPropertyDetail />}  />
          <Route path="/job" element={<Jobs />} />
          <Route  path="/job/add-jobs" element={<AddNewJob />}/>
          <Route path="/job/job-detail" element={<JobDetail />}/>
          <Route path="/job/landlord-approval" element={<LandLordApproval />}/>
             <Route path="/job/get-qoute" element={<GetQoute />}/>
           <Route path="/job/assign-engineer" element={<JobAss />}/>
          <Route path="/contractor" element={<Contractor />} />
          <Route path="/contractor/plumber" element={<Plumber />} />
          <Route path="/contractor/add-contracter" element={<AddContractor />} />
          <Route path="/contractor/contractor-detail" element={<ContracterDetail />} />
          <Route path="/contractor/contractor-jobs" element={<ViewAll />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/setting/branding" element={<Branding />} />
          <Route path="/setting/group" element={<Groups />} />
          <Route path="/setting/group/add-new-groups" element={<AddNewGroups />} />
          <Route path="/setting/access-controll" element={<AccessControl />} />
          <Route path="/setting/create-rule" element={<CreateNewRule />} />
          <Route path="/setting/user-detail" element={<UserDetail />} />
          <Route path="/setting/user-rule" element={<AddUserRule />} />
          <Route path="/setting/time-zone" element={<TimeZone />} />
          <Route path="/setting/opening-hours" element={<OpeningHours />} />
          <Route path="/setting/set-opening-hours" element={<SetOpeningHour />} />
          <Route path="/setting/job-engin" element={<JobEngin />} />
          <Route path="/setting/job-assign" element={<JobAssignment />} />
          <Route path="/setting/select-category" element={<SelectCategory />} />
          <Route path="/setting/select-group" element={<SelectGroup />} />
          <Route path="/setting/sla" element={<Sla />} />
          <Route path="/setting/job-closure" element={<JobClosure />} />
          <Route path="/setting/response-time" element={<ResponseTimeLimit />} />
          <Route path="/setting/monitoring" element={<Monitering />} />
          <Route path="/setting/view-all-jobs" element={<ViewAllJobs />} />
          <Route path="/setting/add-email" element={<AddNewEmail />} />
          <Route path="/setting/mobile-app" element={<MobileApp />} />
          <Route path="/setting/addemail" element={<AddEmailSetting />} />
          <Route path="/setting/contracter-priority" element={<ContractorPriority />} />
          <Route path="/setting/contracter-compliance" element={<ContracterCompliance />} />
          <Route path="/setting/liecense-text" element={<LiecenseAndText />} />
          <Route path="/setting/setting-finance" element={<SettingFinance />} />
          <Route path="/reports/recent-reports" element={<RecentReports />} />
          <Route path="/reports/run-report" element={<RunReports />} />
          <Route path="/reports/subscription" element={<Subscription />} />
          <Route path="/map" element={<MapView />} />


          {/* <Route path="/reports/run-report" element={<RunReports />} /> */}
































          <Route path="/branding" element={<Branding/>}/>
          <Route path="/report" element={<Reports />} />
          <Route path="/report/events" element={<Events />} />
          <Route path="/report/subscription" element={<Subscription />} />
          <Route path="/report/events/subscription" element={<ReportsAddSubscription />} />
        
          <Route path="/finance" element={<Finance />}></Route>
          <Route
            path="/finance/contractor-invoice"
            element={<FinanceContractorInvoice />}
          />
          <Route
            path="/finance/contractor-invoice/close"
            element={<FinanceContractorInvoiceClose />}
          />
          <Route
            path="/finance/contractor-invoice/make/payment"
            element={<FinanceCIMakePayment />}
          />
          <Route
            path="/finance/contractor-invoice/payment/add/recipient"
            element={<PaymentAddRecipient />}
          />
          <Route
            path="/finance/contractor-invoice/payment/confirm"
            element={<PaymentConfirm />}
          />
          <Route
            path="/finance/landlord-invoice"
            element={<FinanceLandlordInvoice />}
          />
           <Route
            path="/property/add-property"
            element={<AddProperties />}
          />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail-property/:id" element={<DetailsProperty />}></Route>
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
