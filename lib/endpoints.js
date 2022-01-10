module.exports = {
  test: {
    path: '/api/v2/test/it',
  },
  getS3Token: {
    path: '/api/v2/reports/get_s3_token',
  },
  listDfCacheFiles: {
    path: '/api/v2/reports/list_df_cache_files',
  },
  saveHtmlTemplate: {
    path: '/api/v2/deliverables/save_html_template',
    defaults: {
      use_new_html_render: true,
      use_new_pdf_render: true,
      enabled: false,
    },
  },
  getAllHtmlTemplates: {
    path: '/api/v2/deliverables/get_all_html_templates',
  },
  deleteHtmlTemplate: {
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
  getAllStaticResources: {
    path: '/api/v2/deliverables/get_all_static_resources',
  },
  retrieveRevisionDetails: {
    path: '/api/v2/policies/retrieve_revision_details',
  },
  getContact: {
    path: '/api/v2/contacts/get_contact',
  },
  createDeliverable: {
    path: '/api/v1/deliverables/create_deliverable',
  },
  getAttachment: {
    path: '/api/v2/deliverables/get_attachment',
  },
  retrievePolicy: {
    path: '/api/v2/policies/retrieve_policy',
  },
  retrieveRiskDetails: {
    path: '/api/v2/policies/retrieve_risk_details',
  },
  dataFramePreview: {
    path: '/api/v2/reports/data_frame_preview',
  },
};
