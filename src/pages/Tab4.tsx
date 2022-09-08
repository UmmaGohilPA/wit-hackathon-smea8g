import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import PageFour from "../images/Frame1.png";
import "./Tab4.css";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shopping List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img src={PageFour} />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
