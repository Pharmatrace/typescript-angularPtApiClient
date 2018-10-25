import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ActivitysService } from './io.pharmatrace.api.scin.public.api/activitys.service';
import { ContainerService } from './io.pharmatrace.api.scin.public.api/container.service';
import { ContainersService } from './io.pharmatrace.api.scin.public.api/containers.service';
import { InformationQueryResponsesService } from './io.pharmatrace.api.scin.public.api/informationQueryResponses.service';
import { InformationQuerysService } from './io.pharmatrace.api.scin.public.api/informationQuerys.service';
import { LegalTxTermssService } from './io.pharmatrace.api.scin.public.api/legalTxTermss.service';
import { LocationsService } from './io.pharmatrace.api.scin.public.api/locations.service';
import { PharmaceuticalsService } from './io.pharmatrace.api.scin.public.api/pharmaceuticals.service';
import { ProfilesService } from './io.pharmatrace.api.scin.public.api/profiles.service';
import { RepackagesService } from './io.pharmatrace.api.scin.public.api/repackages.service';
import { StakeholdersService } from './io.pharmatrace.api.scin.public.api/stakeholders.service';
import { SystemInformationsService } from './io.pharmatrace.api.scin.public.api/systemInformations.service';
import { TradesService } from './io.pharmatrace.api.scin.public.api/trades.service';
import { TransportsService } from './io.pharmatrace.api.scin.public.api/transports.service';
import { UserService } from './io.pharmatrace.api.scin.public.api/user.service';
import { WalletsService } from './io.pharmatrace.api.scin.public.api/wallets.service';

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
