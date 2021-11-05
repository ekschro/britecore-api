module.exports = {
  test: {
    path: '/api/v2/test/it',
  },
  s3Token: {
    path: '/api/v2/reports/get_s3_token',
  },
  dfCachesList: {
    path: '/api/v2/reports/list_df_cache_files',
  },
  uploadDeliverable: {
    path: '/api/v2/deliverables/save_html_template',
    defaults: {
      use_new_html_render: true,
      use_new_pdf_render: true,
      enabled: false,
    },
  },
  getDeliverables: {
    path: '/api/v2/deliverables/get_all_html_templates',
  },
  deleteDeliverable: {
    path: '/api/v2/deliverables/delete_html_template',
  },
  saveStaticResource: {
    path: '/api/v2/deliverables/save_static_resource',
  },
  deleteStaticResource: {
    path: '/api/v2/deliverables/delete_static_resource',
  },
  expireStaticResource: {
    path: '/api/v2/deliverables/expire_static_resource',
  },
  getStaticResource: {
    path: '/api/v2/deliverables/get_static_resource',
  },
  getStaticResources: {
    path: '/api/v2/deliverables/get_all_static_resources',
  },
  retrieveRevisionDetails: {
    path: '/api/v2/policies/retrieve_revision_details',
  },
  retrieveContact: {
    path: '/api/v2/contacts/get_contact',
  },
  createDeliverable: {
    path: '/api/v1/deliverables/create_deliverable',
  },
  getAttachment: {
    path: '/api/v2/deliverables/get_attachment',
  },
};
