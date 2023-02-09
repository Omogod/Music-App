"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passworTemplate = void 0;
const config_1 = __importDefault(require("../../../config"));
function passworTemplate(firstname, token) {
    return __awaiter(this, void 0, void 0, function* () {
        return `<!DOCTYPE html>
  <table
    class="full-width-container"
    style="
      height: 100%;
      font-family: Calibri;
      padding-bottom: 30px;
      padding-top: 30px;
      padding-left: 0px;
      padding-right: 0px;
    "
    height="100%"
    cellspacing="0"
    cellpadding="0"
    bgcolor="#eeeeee"
    border="0"
  >
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table
            class="container"
            style="width: 720px"
            cellspacing="0"
            cellpadding="0"
            width="720"
            bgcolor="#ffffff"
            border="0"
          >
            <tbody>
              <tr>
                <td valign="top" cellPadding="50" cellPadding="50" border="10">
                  <table
                    class="container header"
                    style="background: #1a2155; width: 100%"
                    cellspacing="20"
                    cellpadding="20"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td align="left">
                          <h4 style="color:white;vertical-align: bottom;margin-bottom: 0;"><img src="./NavBar-Logo.svg" alt="Smooze">Reset Password</h4>
                        </td>
                        <td align="right">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    class="container hero-subheader"
                    style="width: 100%; color: #1a2155"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="hero-subheader__title"
                          style="
                            font-family: calibri;
                            font-size: 11pt;
                            color: black;
                            font-weight: 600;
                            padding-bottom: 15px;
                            padding-top: 30px;
                            padding-left: 30px;
                            padding-right: 0px;
                          "
                          align="left"
                        >
                          Hello ${firstname},
                        </td>
                      </tr>
                      <tr style="padding: 0px">
                        <td
                          class="hero-subheader__content"
                          style="
                            font-family: calibri;
                            font-size: 11pt;
                            color: black;
                            padding-left: 30px;
                          "
                          align="left"
                        >
                          A request has been received to change the password for your Smooze account<br /><br />
                          <div style="width: 20%;margin: 0 auto;">
                          <a href=${config_1.default.FRONTEND_BASE_URL}/resetpassword/?token=${token}>
                            <button style="color: white;background-color: #1a2155;padding: 7px;padding-left: 20px; padding-right:20px ;width: 150px;border:none">Reset Password</button>
                            </a>
                          </div><br>
                         If you did not initiate this request, please contact us immediateky at <a href="">support@Smooze.com</a>.<br><br>
                          Thank you,<br>The Snooze Team <br /><br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                   `;
    });
}
exports.passworTemplate = passworTemplate;
//# sourceMappingURL=resetPassword.js.map