import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./Login";
import { Register } from "./Register";
import { OTPScreen } from "./OTPScreen";
import { LoginCurrentDevice } from "./LoginCurrentDevice";
import { Congratulations } from "./Congratulations";
import { SendMoney } from "./SendMoney";
import { ConfirmDetails } from "./confirmDetails";
import { PendingTransaction } from "./PendingTransaction";
import { CancelTransaction } from "./CancelTransaction";
import { PleaseWait} from "./PleaseWait";
import { ScanQRCode } from "./ScanQRCode";
import { PaymentLink} from "./PaymentLink";
import { Bank } from "./Bank";
import { ReceiveMoney} from "./ReceiveMoney";
import { AddMoney } from "./AddMoney";
import { AddMoneyProfile } from "./AddMoneyProfile";




const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Add Money Profile">
      <Stack.Screen name="Add Money Profile" component={AddMoneyProfile} />
      <Stack.Screen name="Add Money" component={AddMoney} />
      <Stack.Screen name="Receive Money" component={ReceiveMoney} />
      <Stack.Screen name="Bank" component={Bank} />
      <Stack.Screen name="Payment Link" component={PaymentLink} />
      <Stack.Screen name="Scan QR Code" component={ScanQRCode} />
      <Stack.Screen name="Please Wait" component={PleaseWait} />
      <Stack.Screen name="OTP Screen" component={OTPScreen} />
      <Stack.Screen name="Cancel Transaction" component={CancelTransaction} />
      <Stack.Screen name="Pending Transaction" component={PendingTransaction} />
      <Stack.Screen name="Send Money" component={SendMoney} />
      <Stack.Screen name="Congratulations" component={Congratulations} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Confirm Details" component={ConfirmDetails} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Login Current Device" component={LoginCurrentDevice} />
    </Stack.Navigator>
  );
}
