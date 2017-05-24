import { OptionsCommon } from '../interfaces';
export declare class LoadingIndicator {
    private _hud;
    private _targetView;
    show(options?: OptionsCommon): any;
    hide(targetView?: any): void;
    private _getRootWindow();
}
