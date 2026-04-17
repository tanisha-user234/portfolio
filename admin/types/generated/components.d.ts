import type { Schema, Struct } from '@strapi/strapi';

export interface DashboardContact extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    ContactForm: Schema.Attribute.Component<'shared.contact-form', true>;
    ContactInfo: Schema.Attribute.Component<'shared.contact-info', false>;
    formButtonText: Schema.Attribute.String;
    isLeftActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    isRightActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    sectionTitleHighlight: Schema.Attribute.String;
  };
}

export interface DashboardEducation extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    description: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    order: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DashboardExperience extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    experience: Schema.Attribute.Component<'shared.experience', true>;
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    sectionTitleHighlighted: Schema.Attribute.String;
  };
}

export interface DashboardFooter extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    backToTop: Schema.Attribute.Component<'shared.back-to-top', false>;
    bottomBar: Schema.Attribute.Component<'shared.bottom-bar', false>;
    name: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'shared.social-links', true>;
    tagline: Schema.Attribute.String;
  };
}

export interface DashboardHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    descriptionHighlight: Schema.Attribute.String;
    heroDescription: Schema.Attribute.Text;
    mainTitleHighlight: Schema.Attribute.String;
    mainTitlePart1: Schema.Attribute.String;
    maiTitlePart2: Schema.Attribute.String;
    primaryButtonLabel: Schema.Attribute.String;
    primaryButtonUrl: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    secondaryButtonUrl: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.stats', true>;
    topBadgeIcon: Schema.Attribute.String;
    topBadgeText: Schema.Attribute.String;
  };
}

export interface DashboardNavbar extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    isSocialLinks: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    mainText: Schema.Attribute.String;
    name: Schema.Attribute.String;
    navItems: Schema.Attribute.Component<'shared.nav-items', true>;
    SocialLinks: Schema.Attribute.Component<'shared.social-links', true>;
  };
}

export interface DashboardProject extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_projects';
  info: {
    displayName: 'Project';
  };
  attributes: {
    projects: Schema.Attribute.Component<'shared.project-items', true>;
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    sectionTitleHighLight: Schema.Attribute.String;
  };
}

export interface DashboardSkills extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_skills_s';
  info: {
    displayName: 'Skills ';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    skills: Schema.Attribute.Component<'shared.tech', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBackToTop extends Struct.ComponentSchema {
  collectionName: 'components_shared_back_to_tops';
  info: {
    displayName: 'backToTop';
  };
  attributes: {
    label: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedBottomBar extends Struct.ComponentSchema {
  collectionName: 'components_shared_bottom_bars';
  info: {
    displayName: 'bottomBar';
  };
  attributes: {
    builtWithText: Schema.Attribute.String;
    owner: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface SharedContactForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    rows: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['email', 'password', 'text', 'textarea', 'checkbox', 'radio']
    >;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'ContactInfo';
  };
  attributes: {
    ContactMethods: Schema.Attribute.Component<'shared.contact-methods', true>;
    description: Schema.Attribute.Text;
    highlightTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    title2: Schema.Attribute.String;
  };
}

export interface SharedContactMethods extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_methods';
  info: {
    displayName: 'ContactMethods';
  };
  attributes: {
    icon: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    order: Schema.Attribute.String;
    url: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedExperience extends Struct.ComponentSchema {
  collectionName: 'components_shared_experiences';
  info: {
    displayName: 'experience';
  };
  attributes: {
    color: Schema.Attribute.String;
    company: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    location: Schema.Attribute.String;
    period: Schema.Attribute.String;
    tech: Schema.Attribute.Component<'shared.tech', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedNavItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_items';
  info: {
    displayName: 'nav-items';
  };
  attributes: {
    label: Schema.Attribute.String;
    order: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedProjectItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_project_items';
  info: {
    displayName: 'project_items';
  };
  attributes: {
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    size: Schema.Attribute.String;
    tech: Schema.Attribute.Component<'shared.tech', true>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SharedSkillsItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills_items';
  info: {
    displayName: 'skills_items';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    skills: Schema.Attribute.Component<'shared.tech', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    icon: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    order: Schema.Attribute.String;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedStats extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTech extends Struct.ComponentSchema {
  collectionName: 'components_shared_teches';
  info: {
    displayName: 'tech';
  };
  attributes: {
    skill: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dashboard.contact': DashboardContact;
      'dashboard.education': DashboardEducation;
      'dashboard.experience': DashboardExperience;
      'dashboard.footer': DashboardFooter;
      'dashboard.hero-section': DashboardHeroSection;
      'dashboard.navbar': DashboardNavbar;
      'dashboard.project': DashboardProject;
      'dashboard.skills': DashboardSkills;
      'shared.back-to-top': SharedBackToTop;
      'shared.bottom-bar': SharedBottomBar;
      'shared.contact-form': SharedContactForm;
      'shared.contact-info': SharedContactInfo;
      'shared.contact-methods': SharedContactMethods;
      'shared.experience': SharedExperience;
      'shared.nav-items': SharedNavItems;
      'shared.project-items': SharedProjectItems;
      'shared.skills-items': SharedSkillsItems;
      'shared.social-links': SharedSocialLinks;
      'shared.stats': SharedStats;
      'shared.tech': SharedTech;
    }
  }
}
