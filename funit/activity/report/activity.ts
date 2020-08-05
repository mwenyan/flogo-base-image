import {Observable} from "rxjs/Observable";
import {Injectable, Injector, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {
    WiContrib,
    WiServiceHandlerContribution,
    IValidationResult,
    IActivityContribution,
} from "wi-studio/app/contrib/wi-contrib";


@WiContrib({})
@Injectable()
export class ReportActivityContributionHandler extends WiServiceHandlerContribution {
    constructor(private injector: Injector, private http: Http,) {
        super(injector, http);
    }
   
    value = (fieldName: string, context: IActivityContribution): any | Observable<any> => {

        switch(fieldName) {
            case "output":
                let oschemaobj = [{assertion: "", pass: true, message: "" }]
                  
                return JSON.stringify(oschemaobj)
                
        }
        return null;
    }
 
    validate = (fieldName: string, context: IActivityContribution): Observable<IValidationResult> | IValidationResult => {
        return null;
    }
}