import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Image from "../images/image.png";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shop Explorer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img src={Image} alt="map" width="100%" height="60%" />

        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Lidl</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>[helper text]</IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Tesco</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>[helper text]</IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Iceland</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>[helper text]</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
