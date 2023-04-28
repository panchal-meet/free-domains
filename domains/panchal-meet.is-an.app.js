addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'panchal-meet',
  owner: {
    repo: 'https://github.com/panchal-meet/panchal-meet.github.io',
    email: 'meet.panchal@truestaz.com',
  },
  record: {
    CNAME: 'panchal-meet.github.io',
  },
  proxy: false,
})
