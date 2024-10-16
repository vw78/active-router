import {useHistory} from "react-router";
import {LocationDescriptor, Path, LocationState} from "history";

export type UseRouterResult = {
    push(location: Path | LocationDescriptor<LocationState>, state?: LocationState): void;
    replace(location: Path | LocationDescriptor<LocationState>, state?: LocationState): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
};

export const useRouter = (): UseRouterResult => {
    return useHistory();
};


