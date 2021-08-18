---
layout: article
title: Providers FAQs
categories: [providers]
featured: false
popular: false
hidden: false
tags: []
order: 08
---

## Partner Program

### Q: Does the Partner Program include volume discounts for seats under management?

**A:** Bitwarden offers a reseller discount to partners based on cumulative seats under management in any Teams and Enterprise Organizations, including any created for use by reseller or MSP employees. To learn more about the discounting structure, please contact sales [here](https://bitwarden.com/contact/){:target="\_blank"}.

### Q: How are Client Organizations billed?

**A:** Currently, each Client Organization is billed separately using the payment method registered during [Client Organization creation]({{site.baseurl}}/article/client-org-setup/). In the future, we'll be developing functionality to aggregate billing across Client Organizations to improve the Provider experience.

### What customer support do MSPs receive?

**A:** All MSPs receive priority support from our 24/7 customer support team. [Contact Us](https://bitwarden.com/contact/){:target="\_blank"} for support.

## Provider Portal

### Q: What is the Provider Portal? Why should I use it?

**A:** The Provider Portal was designed to streamline multi-Organization control and administration for MSPs across their client's Bitwarden Organizations. Using the Provider Portal, MSPs can:

- View all clients under MSP management, onboard new and existing clients, access clients' Organization Vaults, and administer services for Teams and Enterprise Organizations.
- Add internal staff as users, assign proper user roles, and delegate administrative duties.
- View time-stamped actions made by users in the Provider Portal, including creation of new Client Organizations, invitation of new Provider users, and when Provider users access Client Organizations.

The Provider Portal is an all-in-one portal, designed to streamline client management and operations while increasing value for your clients.

### Q: Is there a startup or monthly fee for using the Provider Portal?

**A:** There is no fee for MSPs or their users to use the Provider Portal. It is provided, free of charge, as part of the Bitwarden Partner Program. If you would like to set up an Organization for use by your internal team, those seats will be billed at the discounted rate.

### Q: I'm already providing Bitwarden as a service for my clients, what do I need to do to move to the Provider Portal?

**A:** It's quick and easy! [Contact Us](https://bitwarden.com/contact/){:target="\_blank"} and a member of the Bitwarden team will issue you an invitation. Once in the Provider Portal, you can [add existing Client Organizations]({{site.baseurl}}/article/add-existing-client-org/) to begin centralizing client management.

### Q: How many clients can I manage through the Provider Portal?

**A:** There is no limit to the number of Client Organizations that can be managed within the Provider Portal.

### Q:What happens if I am locked out of my Provider Admin account?

**A:** Access to the Provider Portal is through your Bitwarden account. If you forget your Master Password, Bitwarden has no knowledge of, way to retrieve, or way to reset your Master Password and you will be unable to access the Provider Portal. **Bitwarden strongly recommends that you provision a second user with a Provider Admin role for failover purposes.**

## Deployment

### Q: What deployment options are available?

**A:** Access to the Bitwarden Provider Portal is available through the Bitwarden Cloud service. The Provider Portal is not supported for self-hosted environments at this time.

## Client Management

### Q: Is there a recommended workflow for onboarding new clients?

**A:** Yes! We've outlined one recommended workflow [here]({{site.baseurl}}/article/client-org-setup/).

### Q: How does an MSP access Client Organizations?

**A:** MSPs can access all Client Organizations under management from the Provider Portal. Learn more [here]({{site.baseurl}}/article/manage-client-orgs/).

### Q: Can an MSP administrator see or manage credentials for all clients?

**A:** Provider Admins and Service Users have the same privileges as Owners in the Client Organization. They can managed Vault items, Collections, Users, Groups, and other functions within the Organization. Provider Admins and Service Users cannot access or view a user's privately-owned Vault items.

### Q: Can we set default Enterprise Policies that apply to all clients?

**A:** Each Client Organization operates independently with individually configured policies. [Learn more about configuring Enterprise Policies]({{site.baseurl}}/article/policies/).
