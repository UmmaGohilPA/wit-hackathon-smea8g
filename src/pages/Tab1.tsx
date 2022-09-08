import {
  IonAvatar,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRange,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [number, setNumber] = useState<number>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRow>
          <IonItem>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>User Name</IonLabel>
          </IonItem>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Postcode </IonLabel>
              <IonInput
                type="number"
                value={searchText}
                placeholder="Enter postcode"
                onIonChange={(e) => setSearchText("")}
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonLabel>Radius </IonLabel>
              <IonInput
                type="number"
                value={searchText}
                placeholder="Enter radius"
                onIonChange={(e) => setSearchText("")}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonList>
          <IonItem>
            <IonLabel>Budget (£)</IonLabel>
            <IonRange min={0} max={100} dualKnobs={true} pin={true}>
              <IonLabel slot="start">{0}</IonLabel>
              <IonLabel slot="end">{100}</IonLabel>
            </IonRange>
          </IonItem>
        </IonList>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Number of meals </IonLabel>
              <IonInput
                type="number"
                value={number}
                placeholder="Enter Number"
                onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonLabel>People </IonLabel>
              <IonInput
                type="number"
                value={number}
                placeholder="Enter Number"
                onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonList>
          <IonItem>
            <IonSelect interface="popover" placeholder="Mode of Transport">
              <IonSelectOption value="walk">Walking</IonSelectOption>
              <IonSelectOption value="public">Public Transport</IonSelectOption>
              <IonSelectOption value="car">Car</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonLabel>Cooking Skill</IonLabel>
            <IonRange min={0} max={2} snaps={true} ticks={true}>
              <IonLabel slot="start">Beginner</IonLabel>
              <IonLabel slot="end">Advance</IonLabel>
            </IonRange>
          </IonItem>
        </IonList>
        <IonItem>
          <IonSelect
            interface="popover"
            placeholder="Dietary Requirements"
            multiple={true}
          >
            <IonSelectOption value="vegetarian">Vegetarian</IonSelectOption>
            <IonSelectOption value="vegan">Vegan</IonSelectOption>
            <IonSelectOption value="celiac">Celiac</IonSelectOption>
            <IonSelectOption value="halal">Halal</IonSelectOption>
            <IonSelectOption value="lactose-intolerance">
              Lactose Intolerance
            </IonSelectOption>
            <IonSelectOption value="nut-allergy">Nut Allergy</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
