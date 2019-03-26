import { FooterComponent }                        from './footer.component';
import { ContactInfoComponent }                   from './contact-info/contact-info.component';
import { MenuComponent  as FooterMenuComponent }  from './menu/menu.component';
import { SocialComponent }                        from './social/social.component';
import { CopyrightComponent }                     from './copyright/copyright.component';
import { LegalLinksComponent }                    from './legal-links/legal-links.component';

export const footerComponents: any[] = [
  FooterComponent,
  ContactInfoComponent,
  FooterMenuComponent,
  SocialComponent,
  CopyrightComponent,
  LegalLinksComponent,
];

export * from './footer.component';
export * from './contact-info/contact-info.component';
export { FooterMenuComponent };
export * from './social/social.component';
export * from './copyright/copyright.component';
export * from './legal-links/legal-links.component';
