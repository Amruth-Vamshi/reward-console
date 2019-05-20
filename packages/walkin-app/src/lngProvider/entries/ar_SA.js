import antdSA from "antd/lib/locale-provider/en_US";
import appLocaleData from "react-intl/locale-data/ar";
import saMessages from "../locales/ar_SA.json.js";

const saLang = {
  messages: {
    ...saMessages
  },
  antd: antdSA,
  locale: "ar",
  data: appLocaleData
};
export default saLang;
