import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave, useIonRouter } from '@ionic/react';

import GameScene from "../scenes/GameScene";
import { initGame } from '../game';

var game: Phaser.Game;

const FunctionalGamePage: React.FC = () => {
  const router = useIonRouter();

  useIonViewDidEnter(() => {
    const gameScene = new GameScene(() => {
      if (router.canGoBack()) {
        router.goBack();
      }
    });
    game = initGame("game-container", [gameScene]);
  });

  useIonViewDidLeave(() => {
    game.destroy(false);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>Game 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Game 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div id="game-container" />

      </IonContent>
    </IonPage>
  );
};

export default FunctionalGamePage;