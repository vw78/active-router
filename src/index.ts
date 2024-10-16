import ActiveRouterProvider from "./provider/ActiveRouterProvider";

import '@ionic/react/css/core.css';

import {LifeCycleCallback, setupIonicReact} from '@ionic/react';
import {useRouter} from "./hooks/useRouter";
import {useParams as useRouterParams, useLocation as useRouterLocation} from "react-router";
import {
    useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave,
} from '@ionic/react';
import * as H from "history";


type Config = {
    animated: boolean
}


setupIonicReact({animated: false});

const setupActiveReact = (config: Config) => {
    setupIonicReact({
        animated: config['animated'] || false
    })
};

function useParams<Params extends { [K in keyof Params]?: string } = {}>(): Params {
    return useRouterParams();
}

function useLocation<S = H.LocationState>(): H.Location<S> {
    return useRouterLocation();
}

const useViewDidEnter = (callback: LifeCycleCallback, deps?: any[]) => {
    return useIonViewDidEnter(callback, deps)
}

const useViewDidLeave = (callback: LifeCycleCallback, deps?: any[]) => {
    return useIonViewDidLeave(callback, deps)
}

const useViewWillEnter = (callback: LifeCycleCallback, deps?: any[]) => {
    return useIonViewWillEnter(callback, deps)
}

const useViewWillLeave = (callback: LifeCycleCallback, deps?: any[]) => {
    return useIonViewWillLeave(callback, deps)
}


export {
    ActiveRouterProvider,
    setupActiveReact,
    useRouter,
    useParams,
    useLocation,
    useViewDidEnter,
    useViewDidLeave,
    useViewWillEnter,
    useViewWillLeave
}



