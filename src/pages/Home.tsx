import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React Phaser3 Launcher</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonButton className="ion-padding" expand="block" routerLink="/game1">Functional Component Game</IonButton>
        <IonButton className="ion-padding" expand="block" routerLink="/game2">Class-based Component Game</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
