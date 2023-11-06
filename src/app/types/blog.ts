interface Keywords {
    _uid: string;
    title: string;
    plugin: string;
    og_image: string;
    og_title: string;
    description: string;
    twitter_image: string;
    twitter_title: string;
    og_description: string;
    twitter_description: string;
}

interface MainImage {
    id: number;
    alt: string;
    name: string;
    focus: string;
    title: string;
    source: string;
    filename: string;
    copyright: string;
    fieldtype: string;
    meta_data: Record<string, unknown>;
    is_external_url: boolean;
}

interface TextContent {
    text: string;
    type: string;
}

interface Paragraph {
    type: string;
    content: TextContent[];
}

interface Description {
    type: string;
    content: Paragraph[];
}

export interface BlogComponent {
    _uid: string;
    slug: string;
    title: string;
    keywords: Keywords;
    component: string;
    categories: string[];
    main_image: MainImage;
    updated_at: string;
    description: Description;
    published_at: string;
    body_markdown: string;
    body_richtext: Description;
    prefer_markdown: string;
    _editable: string;
    seo_keywords: string[];
}

interface PageComponent {
    component: string;
    _uid: string;
    blocks: BlogComponent[];
    _editable: string;
}

interface StoryBlokPage {
    story: {
        name: string;
        created_at: string;
        published_at: string;
        id: string;
        uuid: string;
        content: PageComponent;
        slug: string;
        full_slug: string;
        sort_by_date: any;
        position: number;
        tag_list: string[];
    };
    cv: number;
    rels: any[];
    links: any[];
    component: string;
    _editable: string;
}
