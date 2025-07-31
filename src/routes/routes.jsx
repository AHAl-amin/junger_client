import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";
import DashboardLayout from "../Layout/Admin/DashboardLayout";
import EmailVerification from "../Pages/Authentication/EmailVerification";
import OTP_Verification from "../Pages/Authentication/OTP_Verification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import Admin_Home from "../Layout/Admin/Admin_Home";
import StartSurvey from "../Pages/Home/StartSurvey";
import AiQuestion from "../Pages/Home/AiQuestion";
import Feedback from "../Pages/Home/Feedback";
import SurveyResult from "../Pages/Home/SurveyResult";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
        children: [
          {path: '/', element: <Home/>},
          {path: '/start_survey', element: <StartSurvey/>},
          {path: '/ai_question', element: <AiQuestion/>},
          {path: '/feedback', element: <Feedback/>},
          {path: '/survey_result', element: <SurveyResult/>},
      ]
    },

    {
        path: '/dashboard',
        element: <DashboardLayout />,
      children: [
      {index: true, element: <Admin_Home />},
      {path: 'admin_home', element: <Admin_Home/>}
        ]
    },

    {path: '/sign_up', element: <Registration/>},
    {path: '/login', element: <Login/>},
    {path: '/verify', element: <EmailVerification/>},
    {path: '/otp_verify', element: <OTP_Verification/>},
    {path: '/reset_password', element: <ResetPassword/>},
  ]);