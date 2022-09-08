import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol>
            <IonList>
              <IonItem>
                <IonSelect placeholder="Select price">
                  <IonSelectOption value="apples">£1 - £3</IonSelectOption>
                  <IonSelectOption value="oranges">£4 - £6</IonSelectOption>
                  <IonSelectOption value="bananas">£6+</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonCol>
          <IonCol>
            <IonList>
              <IonItem>
                <IonSelect placeholder="Select impact">
                  <IonSelectOption value="apples">1</IonSelectOption>
                  <IonSelectOption value="oranges">2</IonSelectOption>
                  <IonSelectOption value="bananas">3</IonSelectOption>
                  <IonSelectOption value="apples">4</IonSelectOption>
                  <IonSelectOption value="oranges">5</IonSelectOption>
                  <IonSelectOption value="bananas">6</IonSelectOption>
                  <IonSelectOption value="apples">7</IonSelectOption>
                  <IonSelectOption value="oranges">8</IonSelectOption>
                  <IonSelectOption value="bananas">9</IonSelectOption>
                  <IonSelectOption value="bananas">10</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £4 | Impact: 10</IonCardSubtitle>
                <IonCardTitle>Recipe #1</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £5 | Impact: 6</IonCardSubtitle>
                <IonCardTitle>Recipe #1</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £5 | Impact: 8</IonCardSubtitle>
                <IonCardTitle>Recipe</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price 4 | Impact: 7</IonCardSubtitle>
                <IonCardTitle>Recipe #1</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol>
            <IonList>
              <IonItem>
                <IonSelect placeholder="Select price">
                  <IonSelectOption value="apples">£1 - £3</IonSelectOption>
                  <IonSelectOption value="oranges">£4 - £6</IonSelectOption>
                  <IonSelectOption value="bananas">£6+</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonCol>
          <IonCol>
            <IonList>
              <IonItem>
                <IonSelect placeholder="Select impact">
                  <IonSelectOption value="apples">1</IonSelectOption>
                  <IonSelectOption value="oranges">2</IonSelectOption>
                  <IonSelectOption value="bananas">3</IonSelectOption>
                  <IonSelectOption value="apples">4</IonSelectOption>
                  <IonSelectOption value="oranges">5</IonSelectOption>
                  <IonSelectOption value="bananas">6</IonSelectOption>
                  <IonSelectOption value="apples">7</IonSelectOption>
                  <IonSelectOption value="oranges">8</IonSelectOption>
                  <IonSelectOption value="bananas">9</IonSelectOption>
                  <IonSelectOption value="bananas">10</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £7 | Impact: 10</IonCardSubtitle>
                <IonCardTitle>Recipe #2</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £7 | Impact: 9</IonCardSubtitle>
                <IonCardTitle>Recipe #2</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £8 | Impact: 8</IonCardSubtitle>
                <IonCardTitle>Recipe #2</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £9 | Impact: 8</IonCardSubtitle>
                <IonCardTitle>Recipe #2</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol>
            <IonList>
              <IonItem>
                <IonSelect placeholder="Select price">
                  <IonSelectOption value="apples">£1 - £3</IonSelectOption>
                  <IonSelectOption value="oranges">£4 - £6</IonSelectOption>
                  <IonSelectOption value="bananas">£6+</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonCol>
          <IonCol>
            <IonList>
              <IonItem>
                <IonSelect placeholder="Select impact">
                  <IonSelectOption value="apples">1</IonSelectOption>
                  <IonSelectOption value="oranges">2</IonSelectOption>
                  <IonSelectOption value="bananas">3</IonSelectOption>
                  <IonSelectOption value="apples">4</IonSelectOption>
                  <IonSelectOption value="oranges">5</IonSelectOption>
                  <IonSelectOption value="bananas">6</IonSelectOption>
                  <IonSelectOption value="apples">7</IonSelectOption>
                  <IonSelectOption value="oranges">8</IonSelectOption>
                  <IonSelectOption value="bananas">9</IonSelectOption>
                  <IonSelectOption value="bananas">10</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £9 | Impact: 5</IonCardSubtitle>
                <IonCardTitle>Recipe #3</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £10 | Impact: 6</IonCardSubtitle>
                <IonCardTitle>Recipe #3</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £9 | Impact: 6</IonCardSubtitle>
                <IonCardTitle>Recipe #3</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Price £8 | Impact: 8</IonCardSubtitle>
                <IonCardTitle>Recipe #3</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                In this recipe you will learn how to make the recipe. You will
                need the following ingredients to make this recipe...
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

/*
 <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
*/
