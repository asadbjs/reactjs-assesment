import check from "../assets/check.gif";
import close from "../assets/close.gif";
import { toast } from "react-toastify";

class NotificationService {
  success(message) {
    toast.success(message, {
      icon: ({ theme, type }) => <img alt="logo" src={check} />,
    });
  }

  error(message) {
    toast.error(message, {
      icon: ({ theme, type }) => <img alt="logo" src={close} />,
    });
  }

  redirect(location) {
    setTimeout(() => {
      //window.location.reload();
    }, 3000);
  }
}

const Notification = new NotificationService();

Object.freeze(Notification);

export default Notification;
