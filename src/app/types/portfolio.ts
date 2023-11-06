type ContentType = {
    type: string;
    content: Array<{
        type: string;
        content?: Array<{
            text: string;
            type: string;
            marks?: Array<{
                type: string;
                attrs: {
                    href: string;
                    uuid?: any;
                    anchor?: any;
                    target?: any;
                    linktype: string;
                };
            }>;
        }>;
    }>;
};

type CommonFields = {
    _uid: string;
    slug: string;
    title: string;
    component: string;
    _editable: string;
    project_url?: URL;
    degress_programme: URL;
    company_website: URL;
};

export type WorkExperience = CommonFields & {
    body: ContentType;
    end_date: string;
    start_date: string;
    work_title: string;
    used_languages: string[];
    organization_name: string;
    portfolio_section: string;
};

export type Education = CommonFields & {
    body: ContentType;
    end_date: string;
    start_date: string;
    education_title: string;
    organization_name: string;
    portfolio_section: string;
};

type URL = {
    id: string;
    url: string;
    linktype: string;
    fieldtype: string;
    cached_url: string;
};

export type Certificate = CommonFields & {
    lang: string;
    name: string;
    certificate: {
        id: number;
        alt?: string;
        name?: string;
        focus?: string;
        title?: string;
        source?: string;
        filename: string;
        copyright?: string;
        fieldtype: string;
        meta_data?: any;
        is_external_url: boolean;
    };
    description: ContentType;
    type: string;
};

type PortfolioPage = {
    workExperiences: WorkExperience[];
    educations: Education[];
    certificates: Certificate[];
};
