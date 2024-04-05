<template>
  <ion-page>
    <ion-split-pane content-id="main-content">
       <ion-menu content-id="main-content" type="overlay"  side="end" >
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Inbox</ion-list-header>
            <ion-note>anthony@ionicframework.com</ion-note>

            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
                <ion-icon aria-hidden="true" slot="end" :ios="p.iosArrow" :md="p.mdArrow"></ion-icon>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="labels-list">
            <ion-list-header>Labels</ion-list-header>

            <ion-item v-for="(label, index) in labels" lines="none" :key="index">
              <ion-icon aria-hidden="true" slot="start" :ios="bookmarkOutline" :md="bookmarkSharp"></ion-icon>
              <ion-label>{{ label }}</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-page>
</template>

<script setup lang="ts">
import './Tab4Page.css';

import {
  //IonApp,
  IonPage,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';
import { ref } from 'vue';
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  arrowForwardCircleOutline,
  arrowForwardCircleSharp,
} from 'ionicons/icons';

const selectedIndex = ref(0);
const appPages = [
  {
    title: 'Inbox',
    url: '/tabs/tab4/folder/Inbox',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
    iosArrow: arrowForwardCircleOutline,
    mdArrow: arrowForwardCircleSharp
  },
  {
    title: 'Outbox',
    url: '/tabs/tab4/folder/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    iosArrow: arrowForwardCircleOutline,
    mdArrow: arrowForwardCircleSharp
  },
  {
    title: 'Favorites',
    url: '/tabs/tab4/folder/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
    iosArrow: arrowForwardCircleOutline,
    mdArrow: arrowForwardCircleSharp
  },
  {
    title: 'Archived',
    url: '/tabs/tab4/folder/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
    iosArrow: arrowForwardCircleOutline,
    mdArrow: arrowForwardCircleSharp
  },
  {
    title: 'Trash',
    url: '/tabs/tab4/folder/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp,
    iosArrow: arrowForwardCircleOutline,
    mdArrow: arrowForwardCircleSharp
  },
  {
    title: 'Spam',
    url: '/tabs/tab4/folder/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp,
    iosArrow: arrowForwardCircleOutline,
    mdArrow: arrowForwardCircleSharp
  },
];
const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const path = window.location.pathname.split('tabs/tab4/folder/Inbox')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>

