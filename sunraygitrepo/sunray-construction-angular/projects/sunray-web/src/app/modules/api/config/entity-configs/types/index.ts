import {
  FormFieldEntity,
  ProjectTypeEntity,
  ProjectTypeRequestTypeEntity,
  ResourceAttributeEntity,
  ResourceAssociationEntity,
  ResourceConfigurationEntity,
  ResourceValidatorEntity,
} from '../../../classes/index'

export const entityConfigTypes = [
  {
    type: "sunray-entities",
  },
  {
    type: "addresses",
  },
  {
    type: "configs"
  },
  {
    type: "forms",
    isSeed: true,
    seed: [{}],
  },
  {
    type: "form-fields",
    entityType: FormFieldEntity,
    isSeed: true,
    seed: [{}],
  },
  {
    type: "companies",
    url: "api/companies",
  },
  {
    type: "company-accounts-payable-contacts",
    url: "api/company_accounts_payable_contacts"
  },
  {
    type: "company-primary-contacts",
    url: "api/company_primary_contacts"
  },
  {
    type: "company-request-type-rates",
  },
  {
    type: "states",
    url: "api/states",
    primaryKeys: ["id", "slug"],
  },
  {
    type: "contact-list-members",
    url: 'api/v1/contacts/lists/members'
  },
  {
    type: "contact-support-tickets",
  },
  {
    type: "contact-list-tickets",
    url: 'api/v1/contacts/lists/tickets'
  },
  {
    type: "state-request-types",
    url: 'api/state_request_types',
  },
  {
    type: "project-roles",
    url: "api/v1/job/project_roles",
    initialState: {
      scopes: {
        primaryClaimant: {
          ids: [],
        }
      }
    }
  },
  {
    type: "job-types",
    url: "api/v1/job/job_types",
  },
  {
    type: "project-types",
    url: "api/v1/project/project_type/project_types",
    entityType: ProjectTypeEntity,
  },
  {
    type: "project-type-request-types",
    url: "api/v1/project/project_type/request_types",
    entityType: ProjectTypeRequestTypeEntity,
  },
  {
    type: "project-participant-assignments",
    url: "api/project_participant_assignments",
  },
  {
    type: "project-participants",
    url: "api/project_participants",
  },
  {
    type: "user-registration",
    url: "api/v1/registrations",
  },
  {
    type: "company-divisions",
    url: "api/company_divisions"
  },
  {
    type: "users",
    url: "api/users"
  },
  {
    type: "notaries",
    url: "api/notaries"
  },
  {
    type: "signors",
    url: "api/signors"
  },
  {
    type: "accounting-items",
  },
  {
    type: "invoices",
    url: "api/invoices",
  },
  {
    type: "comments",
    url: "api/comments"
  },
  {
    type: "invoice-documents",
    url: "invoice_documents"
  },
  {
    type: "invoice-summary-documents",
    url: "invoice_summary_documents"
  },
  {
    type: "document-request-fees"
  },
  {
    type: "report-report-type-report-types",
    url: "api/v1/report/report_type/report_types"
  },
  {
    type: "report-reports",
    url: "api/reports"
  },
  {
    type: "translations"
  },
  {
    type: "print-queues-queues",
    url: "api/v1/print/queue/queues"
  },
  {
    type: "print-queues-queue-elements",
    url: "api/v1/print/queue/queue_elements"
  },
  {
    type: "move-queues-queue-elements",
    url: "api/v1/print/queue/queue_elements"
  },
  {
    type: "print-batches-batches",
    url: "api/v1/print/batch/batches"
  },
  {
    type: "print-batches-batch-items"
  },
  {
    type: "print-print-jobs-print-jobs",
    url: "api/v1/print/print_job/print_jobs"
  },
  {
    type: "dashboards-account-managers",
    url: "api/v1/dashboard/account_managers"
  },
  {
    type: "account-managers",
    url: "api/v1/user/account_managers"
  },
  {
    type: "dashboards-data-points",
    url: (opts = {}) => {
      return `api/v1/dashboard/data_point/contexts/${opts['payload']['id']}/data_points`
    }
  },
  {
    type: "dashboards-data-points-contexts",
    url: 'api/v1/dashboard/data_point/contexts'
  },
  {
    type: "dashboards-data-point-types",
    url: 'api/v1/dashboard/data_point_types'
  },
  {
    type: "dashboards-data-point-items",
    url: (opts: any = {}) => {
      return `api/v1/dashboard/data_points/${opts.payload.filter['dashboards-data-point-id']}/items`
    }
  },
  {
    type: "dashboard-document-requests",
    url: (opts = {}) => {
      return `api/v1/dashboard/data_points/${opts['payload']['id']}/items`
    }
  },
  {
    type: "dashboard-performanc-items",
    url: "api/v1/dashboard/performance"
  },
  {
    type: 'resource-configurations',
    entityType: ResourceConfigurationEntity,
    seed: [
      {
        id: 'companies',
      },
      {
        id: 'invoices',
      },
      {
        id: 'states',
      },
      {
        id: 'projects-projects',
      },
    ],
    url: 'api/v1/config/resources/configurations',
  },
  {
    type: 'resource-attributes',
    entityType: ResourceAttributeEntity,
  },
  {
    type: 'resource-associations',
    entityType: ResourceAssociationEntity,
  },
  {
    type: 'resource-validators',
    entityType: ResourceValidatorEntity,
  },
  {
    type: 'resource-actions'
  },
  {
    type: 'user-accounts',
    reducer: (state, action): any => { 
      return state
    }
  },
  {
    type: 'user-account-passwords',
    url: "user_accounts/password"
  },
  {
    type: 'sunray-entities'
  },
  {
    type: 'sales-agents',
    url: "api/v1/user/sales_agents"
  },
  {
    type: 'account-types',
    url: 'api/v1/account_types'
  },
  {
    type: 'payment-terms',
    url: 'api/v1/payment_terms'
  },
  {
    type: 'billing-cycles',
    url: 'api/v1/billing_cycles'
  },
  {
    type: 'referral-sources',
    url: 'api/v1/referral_sources'
  },
  {
    type: 'project-participant-assignments',
    url: 'api/project_participant_assignments'
  },
  {
    type: 'referral-sources',
    url: 'api/v1/referral_sources'
  },
  {
    type: 'projects-projects',
    url: 'api/v1/project/projects'
  },
  {
    type: 'jobs',
  },
  {
    type: 'job-documents',
  },
  {
    type: 'comments',
  },
  {
    type: 'document-requests',
    url: 'api/document_requests'
  },
  {
    type: 'clients',
  },
  {
    type: 'general-contractors',
  },
  {
    type: 'document-request-statuss',
  },
]
