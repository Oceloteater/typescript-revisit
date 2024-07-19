/// <reference types="@types/google.maps" />

import { CustomMap } from './CustomMap';
import { Company } from './Company';
import { User } from './User';

const customMap: CustomMap = new CustomMap('map');
const user: User = new User();
const company: Company = new Company();

customMap.addMarker(user).then();
customMap.addMarker(company).then();
