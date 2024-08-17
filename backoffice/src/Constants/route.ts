const APP_ROUTES = {
  DASHBOARD: "/dashboard",
  MODULE: "/module",
  DRIVERS: "/drivers",
  DRIVERS_PENDING: "/drivers-pending",
  DRIVERS_INFO: "/drivers/info",
  DRIVERS_DECLINED: "/drivers-declined",
  DRIVERS_ORDERS: "/drivers/orders",
  ORDER_DRIVER: "/order/driver",
  ORDER_DRIVER_ORDERS: "/order/driver/:id",
  ORDER_CO_CLIENTS: "/order/corporate-clients",
  ORDER_CO_CLIENTS_ORDERS: "/order/corporate-clients/:id",
  ORDER_CUSTOMER: "/order/customers",
  ORDER_CUSTOMER_ORDERS: "/order/customers/:id",
  ORDER_ADD: "/order/add",
  ORDER_ADD_QUESTION: "/order/add/question",
  ORDER_ADD_CONFIRM: "/order/add/confirm",
  ORDER_ADD_PAYMENT: "/order/add/payment",
  ORDER_ADD_DRIVER: "/order/add/driver",
  ORDER_VIEW: "/order/view",
  CORPRATE_CLIENTS: "/corporate-clients",
  CORPRATE_CLIENTS_INVOICE: "/corporate-clients/invoice",
  CORPRATE_CLIENTS_INVOICE_view: "/corporate-clients/invoice/view",
  CORPRATE_CLIENTS_ADD: "/corporate-clients/add",
  CORPRATE_CLIENTS_EDIT: "/corporate-clients/edit",
  SUPPORT_MANAGE: "/support/manage",
  SUPPORT_REPORT: "/support/report",
  SUPPORT_HELP: "/support/help",
  CUSTOMER: "/customers",
  PAYOUT: "/payout",
  PAYOUT_EDIT: "/payout/edit",
  PAYOUT_PENDING: "/payout-pending",
  SETTING: "/setting",
  ADD_DRIVER: "/add-driver",
  ABOUT: "/about",
  EDIT_ABOUT: "/edit-about",
  PRIVACY_POLICY: "/privacy-policy",
  EDIT_PRIVACY_POLICY: "/edit-privacy-policy",
  BLOGS: "/blogs",
  ADD_BLOG: "/add-blog",
  EDIT_BLOG: "/edit-blog",
  ADD_FAQ: "/add-faq",
  EDIT_FAQ: "/edit-faq",
  FAQS: "/faqs",
  USERS: "/users",
  ADD_USER: "/add-user",
  EDIT_USER: "/edit-user",
  VIEW_USER: "/view-user",
  ADD_CUSTOMER: "/add-customer",
  EDIT_CUSTOMER: "/edit-customer",
  MY_ACCOUNT: "/my-account",
  APP_VERSION: "/app-version",
  EDIT_APP_VERSION: "/edit-app-version",
  SIGNIN: "/",
  FORGOT_PASSWORD: "/forgot-password",
  NEW_PASSWORD: "/new-password",
  OTP_VERIFICATION: "/otp-verification",
  REDIRECT: "/redirect",
  FAQ_WEB_PAGE: "/faq-web-page",
  ABOUT_US_WEB_PAGE: "/about-us-web-page",
  PRIVACY_POLICY_WEB_PAGE: "/privacy-policy-web-page",
  DISCOUNT: "/discount",
  ADD_DISCOUNT: "/discount/add-discount",
  EDIT_DISCOUNT: "/discount/edit-discount",

  // Report
  REPORT_CLIENT: "/report/client",
  REPORT_DRIVER: "/report/driver",
  REPORT_JOB: "/report/job",
  REPORT_REVENUE: "/report/revenue",

  //Support
  SUPPORT: "/support",
  EDIT_SUPPORT: "/support/ticket",
  EDIT_SUPPORT_REPORT: "/support/report/ticket",

  APP_SETTINGS: "/app-settings",
  EDIT_APP_SETTINGS: "/edit-app-settings",
};

export default APP_ROUTES;
