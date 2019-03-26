import { JsonApiEntity } from '@ceo/entity';

export const projectRoles: any[] = [
  new JsonApiEntity({id: 1, type: 'project-roles', attributes: {name: "General Contractor", imageUrl: "/assets/frontend/states/project-roles/general-contractor.svg"}}),
  new JsonApiEntity({id: 2, type: 'project-roles', attributes: {name: "Subcontractor", imageUrl: "/assets/frontend/states/project-roles/subcontractor.svg"}}),
  new JsonApiEntity({id: 3, type: 'project-roles', attributes: {name: "Supplier", imageUrl: "/assets/frontend/states/project-roles/supplier.svg"}}),
];
