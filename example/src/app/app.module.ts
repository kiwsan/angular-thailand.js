// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Application Modules
 */
import { moduleName as coreModule } from './core/core.module';
import { moduleName as contactsModule } from './contacts/contacts.module';
import { moduleName as homeModule } from './home/home.module';

export const moduleName =
  angular.module('application', [
    coreModule,
    contactsModule,
    homeModule
  ])
    .name;
