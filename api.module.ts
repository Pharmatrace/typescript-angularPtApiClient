import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ActivitysService } from './api/activitys.service';
import { ContainerService } from './api/container.service';
import { ContainersService } from './api/containers.service';
import { InformationQueryResponsesService } from './api/informationQueryResponses.service';
import { InformationQuerysService } from './api/informationQuerys.service';
import { LegalTxTermssService } from './api/legalTxTermss.service';
import { LocationsService } from './api/locations.service';
import { PharmaceuticalsService } from './api/pharmaceuticals.service';
import { ProfilesService } from './api/profiles.service';
import { RepackagesService } from './api/repackages.service';
import { StakeholdersService } from './api/stakeholders.service';
import { SystemInformationsService } from './api/systemInformations.service';
import { TradesService } from './api/trades.service';
import { TransportsService } from './api/transports.service';
import { UserService } from './api/user.service';
import { WalletsService } from './api/wallets.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ActivitysService,
    ContainerService,
    ContainersService,
    InformationQueryResponsesService,
    InformationQuerysService,
    LegalTxTermssService,
    LocationsService,
    PharmaceuticalsService,
    ProfilesService,
    RepackagesService,
    StakeholdersService,
    SystemInformationsService,
    TradesService,
    TransportsService,
    UserService,
    WalletsService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
