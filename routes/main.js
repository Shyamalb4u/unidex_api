const express = require("express");
const userController = require("../controllers/maincontroller");

const router = express.Router();

router.get("/getUser/:id", userController.getUser);
// router.get("/getMail/:mail", userController.getMail);
// router.get("/login/:mail/:pass", userController.getLogin);
router.get(
  "/pending_activation/:publicKey",
  userController.getPendingActivation
);
// router.get("/getTips/:publicKey", userController.getTips);
// router.get("/getRewardTips/:publicKey", userController.getRewardTips);
// router.get("/getDailyRewardList/:publicKey", userController.getDailyRewardList);
router.get(
  "/getDashboardBalance/:publicKey",
  userController.getDashboardBalance
);
router.get("/getMyPackages/:phrases", userController.getMyPackages);
// router.get("/getDirect/:uid", userController.getDirect);
// router.get("/getWithdrawal_check/:withSl", userController.getWithdrawal_check);
// router.get("/getDownline/:uid", userController.getDownline);
// router.get("/getIncomeStatement/:uid/:type", userController.getIncomeStatement);
//////////////////
router.post("/signup", userController.signup);
// router.post("/changePassword", userController.changePassword);
// router.post("/getDailyTips", userController.changePassword);
router.post("/booking", userController.booking);
router.post("/topup", userController.topup);
router.post("/withdrawUsdt", userController.withdrawUsdt);
// router.post("/fcmToken", userController.fcmToken);
// router.post("/sendfcmMsg", userController.sendfcmMsg);
// router.post("/sendTips", userController.sendTips);
// router.post("/insertDReward", userController.insertDReward);
// router.post("/withdrawal", userController.withdrawal);
// router.post("/transfer", userController.insertTransaction);
// router.post("/sendMail", userController.sendMail);
// router.post("/passRecover", userController.sendPassRecoveryLink);
// router.post("/resetPassword", userController.resetPassword);
// router.post("/withdrawalPay", userController.withdrawalPay);

module.exports = router;
