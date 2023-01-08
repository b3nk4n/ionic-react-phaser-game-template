import React from 'react';

import { IonContent, IonPage, withIonLifeCycle, NavContext, NavContextState } from '@ionic/react';

import GameScene from "../scenes/GameScene";
import { initGame } from '../game';

var game: Phaser.Game;

type AppProps = {}
type AppState = {}

class ClassGamePage extends React.Component<AppProps, AppState> {
  static contextType = NavContext;

  ionViewDidEnter(): void {
    const gameScene = new GameScene(() => {
      (this.context as NavContextState).goBack();
    });
    game = initGame("game-container", [gameScene]);
  }

  ionViewDidLeave(): void {
    game.destroy(false);
  }

  render() {
    return (
      <IonPage>
        <IonContent fullscreen>
  
          <div id="game-container" />
  
        </IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(ClassGamePage);
