import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Account from "./components/Account.jsx";
import Home from "./components/Home.jsx";
import SignIn from "./components/SignIn.jsx";
import ContactUs from "./components/ContactUs.jsx";
// import Slider from "./components/Slider.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SavingsPlan from "./components/SavingsPlan.jsx";
import AvailablePlan from "./components/AvailablePlans.jsx";
import ActivePlansDetails from "./components/ActivePlansDetails.jsx";
import AccountType from "./components/AccountType.jsx";
import AccountCreation from "./components/AccountCreation.jsx";
import JoinSavingsPlan from "./components/JoinSavingsPlan.jsx";
import IncentivesRewards from "./components/IncentivesRewards.jsx";
import RewardDetails from "./components/RewardDetails.jsx";
import RedemptionConfirm from "./components/RedemptionConfirmed.jsx";
import FoodHamperGift from "./components/FoodHamperGift.jsx";
import Wallet from "./components/Wallet.jsx";
import TransactionDetails from "./components/TransactionDetails.jsx";
import AddBankAccount from "./components/AddBankAccount.jsx";
import WalletSettings from "./components/WalletSettings.jsx";
import TransactionModal from "./components/TransactionModal.jsx";
import WithdrawMoney from "./components/WithdrawModal.jsx";
import WithdrawModal from "./components/WithdrawModalII.jsx";
import TransactionModalI from "./components/WithdrawModelIII.jsx";
import ConfirmWithdrawal from "./components/ConfirmWithdrawal.jsx";
import WithdrawalSuccess from "./components/WithdrawalSuccess.jsx";
import FoodstuffMarket from "./components/FoodstuffMarketplace.jsx";
import ProductDetails from "./components/ProduceDetails.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import DeliveryDetails from "./components/DeliveryDetails.jsx";
import OrderSuccessModal from "./components/OrderSuccessful.jsx";
import OrderHistory from "./components/OrderHistory.jsx";
import TrackOrder from "./components/TrackOrder.jsx";
import ReferralManagement from "./components/ReferralManagement.jsx";
import SupportCenter from "./components/SupportCenter.jsx";
import ChatAssistant from "./components/ChatAssistant.jsx";
import SubmitTicket from "./components/SubmitTicket.jsx";
import SupportTickets from "./components/SupportTicket.jsx";
import SupportChat from "./components/SupportChat.jsx";
import Settings from "./components/Settings.jsx";
import AccountVerification from "./components/AccountVerification.jsx";
import UploadIDModal from "./components/UpdateIdModal.jsx";
import SelfieVerificationModal from "./components/SelfieVerificationModal.jsx";
import VerificationComplete from "./components/VerificationComplete.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import NotificationSettings from "./components/NotificationSettings.jsx";
import Profile from "./components/Profile.jsx";
import EditProfile from "./components/EditProfile.jsx";
import Notifications from "./components/Notification.jsx";
import GenerateReferralCode from "./components/GenerateReferralCode.jsx";
import ReferralCode from "./components/ReferralCode.jsx";
import Admin from "./Admin.jsx";
import PrivateRoute from "./privateRoute/privateRoute.jsx";

function App() {
  return (
    <div className="lg:w-full">
      <Routes>
        {/** Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<Account />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/slider" element={<Slider />} /> */}

        {/** Private Routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/savings-plan" element={<PrivateRoute><SavingsPlan /></PrivateRoute>} />
        <Route path="/available-plans" element={<PrivateRoute><AvailablePlan /></PrivateRoute>} />
        <Route path="/active-plan" element={<PrivateRoute><ActivePlansDetails /></PrivateRoute>} />
        <Route path="/AccountType" element={<PrivateRoute><AccountType /></PrivateRoute>} />
        <Route path="/AccountCreation" element={<PrivateRoute><AccountCreation /></PrivateRoute>} />
        <Route path="/joinsavingsplan" element={<PrivateRoute><JoinSavingsPlan /></PrivateRoute>} />
        <Route path="/Incentives-Rewards" element={<PrivateRoute><IncentivesRewards /></PrivateRoute>} />
        <Route path="/RewardDetails" element={<PrivateRoute><RewardDetails /></PrivateRoute>} />
        <Route path="/RedemptionConfirmed" element={<PrivateRoute><RedemptionConfirm /></PrivateRoute>} />
        <Route path="/FoodHamperGift" element={<PrivateRoute><FoodHamperGift /></PrivateRoute>} />
        <Route path="/wallet" element={<PrivateRoute><Wallet /></PrivateRoute>} />
        <Route path="/TransactionDetails" element={<PrivateRoute><TransactionDetails /></PrivateRoute>} />
        <Route path="/AddBankAccount" element={<PrivateRoute><AddBankAccount /></PrivateRoute>} />
        <Route path="/wallet/settings" element={<PrivateRoute><WalletSettings /></PrivateRoute>} />
        <Route path="/top-up-wallet" element={<PrivateRoute><TransactionModal /></PrivateRoute>} />
        <Route path="/withdraw" element={<PrivateRoute><WithdrawMoney /></PrivateRoute>} />
        <Route path="/withdraw/accountInfo" element={<PrivateRoute><WithdrawModal /></PrivateRoute>} />
        <Route
          path="/withdraw/create-account"
          element={<PrivateRoute><TransactionModalI /></PrivateRoute>}
        />
        <Route path="/confirmwithdrawals" element={<PrivateRoute><ConfirmWithdrawal /></PrivateRoute>} />
        <Route path="/withdrawalSuccess" element={<PrivateRoute><WithdrawalSuccess /></PrivateRoute>} />
        <Route path="/foodstuff" element={<PrivateRoute><FoodstuffMarket /></PrivateRoute>} />
        <Route path="/prouductdetails" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
        <Route path="/shoppingcart" element={<PrivateRoute><ShoppingCart /></PrivateRoute>} />
        <Route path="/deliverydetails" element={<PrivateRoute><DeliveryDetails /></PrivateRoute>} />
        <Route path="/checkoutpage" element={<PrivateRoute><OrderSuccessModal /></PrivateRoute>} />
        <Route path="/orderhistory" element={<PrivateRoute><OrderHistory /></PrivateRoute>} />
        <Route path="/trackorder" element={<PrivateRoute><TrackOrder /></PrivateRoute>} />
        <Route path="/referralmanagement" element={<PrivateRoute><ReferralManagement /></PrivateRoute>} />
        <Route path="/support" element={<PrivateRoute><SupportCenter /></PrivateRoute>} />
        <Route path="/chatassistant" element={<PrivateRoute><ChatAssistant /></PrivateRoute>} />
        <Route path="/submitticket" element={<PrivateRoute><SubmitTicket /></PrivateRoute>} />
        <Route path="/supportticket" element={<PrivateRoute><SupportTickets /></PrivateRoute>} />
        <Route path="/supportchat" element={<PrivateRoute><SupportChat /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/accountverification" element={<PrivateRoute><AccountVerification /></PrivateRoute>} />
        <Route path="/updateidmodal" element={<PrivateRoute><UploadIDModal /></PrivateRoute>} />
        <Route
          path="/selfieverification"
          element={<PrivateRoute><SelfieVerificationModal /></PrivateRoute>}
        />
        <Route
          path="/verification-complete"
          element={<PrivateRoute><VerificationComplete /></PrivateRoute>}
        />
        <Route path="/change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
        <Route
          path="/notification-settings"
          element={<PrivateRoute><NotificationSettings /></PrivateRoute>}
        />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/profile/editprofile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
        <Route path="/profile/notification" element={<PrivateRoute><Notifications /></PrivateRoute>} />
        <Route
          path="/generatereferralcode"
          element={<PrivateRoute><GenerateReferralCode /></PrivateRoute>}
        />
        <Route path="/referralcode" element={<PrivateRoute><ReferralCode /></PrivateRoute>} />

        {/** Admin Portal */}

        <Route path="/admin/*" element={<PrivateRoute><Admin /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
