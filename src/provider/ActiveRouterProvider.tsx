import {IonApp, IonPage, IonRouterOutlet} from "@ionic/react";
import {IonReactHashRouter} from "@ionic/react-router";
import {Route} from 'react-router-dom';
import React from "react";

type RouteProps = {
    component: React.ComponentType<any>;
    path: string;
}

export interface RouterProviderProps {
    routes: RouteProps[]
}

const withWrapper = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => (
        <IonPage style={{background: 'white'}}>
            <WrappedComponent {...props} />
        </IonPage>
    );
};

function ActiveRouterProvider({routes}: RouterProviderProps): React.ReactElement {

    return <IonApp>
        <IonReactHashRouter>
            <IonRouterOutlet>
                {
                    routes.map((item, idx) => (
                        <Route exact path={item.path} component={withWrapper(item.component)} key={idx}/>
                    ))
                }
            </IonRouterOutlet>
        </IonReactHashRouter>
    </IonApp>;
}

export default ActiveRouterProvider;