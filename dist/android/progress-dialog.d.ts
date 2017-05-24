import { OptionsCommon } from '../interfaces';
export declare class LoadingIndicator {
    private _progressDialog;
    show(options?: OptionsCommon): any;
    private createOnCancelListener(cancelListener);
    hide(): void;
    private _getContext();
}
